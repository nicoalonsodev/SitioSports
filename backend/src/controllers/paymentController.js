const { Order } = require("../db");
const { MercadoPagoConfig, Preference } = require("mercadopago");
const { cleanData } = require("../helpers/cleanOrder");
const { postFirstOrderController } = require("./postFirstOrderController");
const { putOrderController } = require("./putOrderController");
const { v4: uuidv4 } = require("uuid");

const { MERCADOPAGO_API_KEY } = process.env;

const { updateStock } = require("../helpers/updateStock");

const createOrder = async (req, res) => {

  const client = new MercadoPagoConfig({ accessToken: MERCADOPAGO_API_KEY });
  const preference = new Preference(client);
  const products = req.body.productInfo;
  const payer = req.body.payerInfo;
  const shipment = req.body.shipment;
const shippingCost = req.body.shipment.price

  const order_id = uuidv4();
  try {
    let firstOrder; 
    if (payer) {
      const client_email = payer.email;
      const client_id = payer.client_id;
      firstOrder = await postFirstOrderController(order_id, client_email, client_id, products, payer, shipment);
    }
    const order_number = firstOrder.order_number;


    const items = products?.map((product) => ({
      title: product.name,
      unit_price: Number(product.price),
      currency_id: "ARS",
      quantity: product.quantity,
      description: product.size,
      id: product.id,
      category_id: Number(product.variant.id),
    }));

    
    if(shippingCost){
      items.push({
        title: "Costo de envío",
        unit_price: Number(shippingCost),
        currency_id: "ARS",
        quantity: 1,
      });
    }

    const body = {
       items: items,
      shipments: {
        receiver_address: {
          zip_code: payer.zipCode,
          street_name: payer.street,
          street_number: payer.streetNumber,
          floor: payer.floor,
          apartment: payer.aclaration,
          city_name: payer.city,
          state_name: payer.state,
          country_name: "Argentina",
          aclaration: payer.aclaration,
        },
      },

      payer: {
        phone: {
          number: payer.phone,
        },
        email: payer.email,
        name: payer.payerName,
      },
      external_reference: order_id,
     
       //notification_url: "https://b927-131-161-236-213.ngrok-free.app/webhook",
      notification_url: "https://sitiosports-production.up.railway.app/webhook",
      payment_methods: {
        installments: 12 
      },
      back_urls: {
        success: `https://www.sitiosports.com/orden-mp-confirmada/${order_number}`,
        failure: `https://www.sitiosports.com/orden-mp-rechazada/${order_number}`,
        pending: `https://www.sitiosports.com/orden-mp-pendiente/${order_number}`,
      },
      auto_return: "approved",
    };

    const result = await preference.create({
      body,
    });

    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const receiveWebhook = async (req, res) => {
  // Intentar obtener el paymentId desde diferentes lugares
  const paymentId = req.query['data.id'] || req.query.id || req.body.id;
  const type = req.body.type;
  const topic = req.body.topic;


  if (!paymentId) {
    // Si paymentId no está definido, responder con un error
    return res.status(400).json({ message: "Payment ID not found" });
  }

  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${MERCADOPAGO_API_KEY}`, // Asegúrate de usar process.env aquí
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      const order_id = data.external_reference;
      const cleanedItems = cleanData(data);

      if (cleanedItems.status === "approved") {
        await updateStock(cleanedItems.items);
      }
      await putOrderController(order_id, cleanedItems);
    } else {
      console.error("Error fetching payment data from Mercado Pago");
      return res.status(500).json({ message: "Error fetching payment data" });
    }

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = {
  createOrder,
  receiveWebhook,
};
