const { Order } = require("../db");
const { getLastOrderNumber } = require("../helpers/getLastNumber");
const orderTransferCreate = require("../helpers/mailsTemplate/orderTransferCreate");
const { mailHandler } = require("../handlers/postMailHandler");
const itemTemplate = require("../helpers/itemsTemplate");
const formatPrice = require("../helpers/formatPrice");

const postOrderController = async (
  items,
  name,
  email,
  client_id,
  phone,
  shipment,
  order_type,
  status,
  status_detail,
  payerMp,
  payment_method,
  payment_method_id,
  payment_type_id,
  shipping_amount,
  transaction_amount,
  transaction_details
) => {
  try {
    // Obtener el número de la última orden
    const lastOrderNumber = await getLastOrderNumber();
    const newOrderNumber = lastOrderNumber ? lastOrderNumber + 1 : 1; // Ejemplo: incrementar en 1
    const discount = transaction_details.total_paid_amount * 0.15;
    const address = `${shipment.street_name} ${shipment.street_number}, ${shipment.state_name}, ${shipment.zipCode}`;

    // Mapear items para crear el HTML
    const itemsHtml = items.map(item => {
      return itemTemplate
        .replace(/%PRODUCT_IMAGE_URL%/g, item.variant.imgUrl[0])
        .replace(/%PRODUCT_NAME%/g, item.name)
        .replace(/%PRODUCT_COLOR%/g, item.variant.variant)
        .replace(/%PRODUCT_SIZE%/g, item.size)
        .replace(/%PRODUCT_PRICE%/g, `$${formatPrice(item.price)}`);
    }).join('');

    // Reemplazar los marcadores en el template
    let cuerpo = orderTransferCreate
      .replace(/%ORDER_NUMBER%/g, newOrderNumber)
      .replace(/%CUSTOMER_NAME%/g, name)
      .replace(/%CUSTOMER_PHONE%/g, phone)
      .replace(/%CUSTOMER_ADDRESS%/g, address)
      .replace(/%CUSTOMER_FLOOR%/g, shipment.floor)
      .replace(/%CUSTOMER_APT%/g, shipment.apt)
      .replace(/%SHIPPING_TYPE%/g, `${shipment.rate.productName} ${shipment.rate.deliveredType === "D" ? "a Domicilio" : "por Sucursal"}`)
      .replace(/%SHIPPING_CHARGE%/g, shipment.rate.price)
      .replace(/%SHIPPING_TIME%/g, `De ${shipment.rate.deliveryTimeMin} dias a ${shipment.rate.deliveryTimeMax} dias.`)
      .replace(/%ORDER_ITEMS%/g, itemsHtml)  // Inserta los items en el template
      .replace(/%ORDER_SUBTOTAL%/g, `$${formatPrice(transaction_details.total_paid_amount)}`) // Agrega el subtotal
      .replace(/%ORDER_DISCOUNT%/g, `$${formatPrice(discount)}`) // Agrega el descuento
      .replace(/%ORDER_SHIPPING_COST%/g, "Gratis") // Agrega el costo de envío
      .replace(/%ORDER_TOTAL%/g, `$${formatPrice(transaction_amount)}`); // Agrega el total

    const asunto = `Gracias por comprar en Sitio Sports`;
    const destinatarios = [email, "sitiosports.contacto@gmail.com"];

    // Enviar el correo a todos los destinatarios
    await mailHandler(destinatarios, asunto, cuerpo);

    // Crear la nueva orden
    const order = await Order.create({
      order_number: newOrderNumber,
      items,
      name,
      email,
      client_id,
      phone,
      shipment,
      order_type,
      status,
      status_detail,
      payerMp,
      payment_method,
      payment_method_id,
      payment_type_id,
      shipping_amount,
      transaction_amount,
      transaction_details,
    });
    return order;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  postOrderController,
};
