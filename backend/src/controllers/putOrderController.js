const { Order } = require("../db");
const { mailHandler } = require("../handlers/postMailHandler");
const orderTemplate = require("../helpers/mailsTemplate/postOrder");
const itemTemplate = require("../helpers/itemsTemplate");
const formatPrice = require("../helpers/formatPrice");
const putOrderController = async (order_id, cleanedItems) => {
  try {
    const order = await Order.findOne({ where: { order_id: order_id } });
    if (!order) {
      throw new Error("No se encontró el producto");
    }


    // Desestructurar los campos actualizados del objeto updatedFields
    const {
        name,
        phone,
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
    } = cleanedItems;

    if (name) {
      order.name = name;
    }
    if (phone) {
      order.phone = phone;
    }
    if (order_type) {
      order.order_type = order_type;
    }
    if (status) {
      if (status === "approved") {
        order.status = "Aprobado";
      } else {
        order.status = status;
      }
    }
    if (status_detail) {
      order.status_detail = status_detail;
    }
    if (payerMp) {
      order.payerMp = payerMp;
    }
    if (payment_method) {
      order.payment_method = payment_method;
    }
    if (payment_method_id) {
      order.payment_method_id = payment_method_id;
    }
    if (payment_type_id) {
      order.payment_type_id = payment_type_id;
    }
    if (shipping_amount) {
      order.shipping_amount = shipping_amount;
    }
    if (transaction_amount) {
      order.transaction_amount = transaction_amount;
    }
    if (transaction_details) {
      order.transaction_details = transaction_details;
    }

    if (status === "approved" || status === "Aprobado") {
      const items = order.items;
      const client_email = order.email;
      const order_number = order.order_number;
      const shipment = order.shipment;

      if (!client_email) {
        throw new Error("No se encontró el email del cliente en la orden");
      }

      const address = `${shipment.street_name} ${shipment.street_number}, ${shipment.state_name}, ${shipment.zipCode}`;

      const asunto = `Orden de compra #${order_number}`;
      const destinatario = [client_email, "sitiosports.contacto@gmail.com"];
      const itemsHtml = items.map(item => {
        return itemTemplate
          .replace(/%PRODUCT_IMAGE_URL%/g, item.variant.imgUrl[0])
          .replace(/%PRODUCT_NAME%/g, item.name)
          .replace(/%PRODUCT_COLOR%/g, item.variant.variant)
          .replace(/%PRODUCT_SIZE%/g, item.size)
          .replace(/%PRODUCT_PRICE%/g, `$${formatPrice(item.price)}`);
      }).join('');

      let cuerpo = orderTemplate
        .replace(/%CUSTOMER_NAME%/g, name)
        .replace(/%CUSTOMER_PHONE%/g, phone)
        .replace(/%CUSTOMER_ADDRESS%/g, address)
        .replace(/%CUSTOMER_FLOOR%/g, shipment.floor)
        .replace(/%CUSTOMER_APT%/g, shipment.apt)
        .replace(/%ORDER_ITEMS%/g, itemsHtml)
        .replace(/%ORDER_SUBTOTAL%/g, `$${formatPrice(transaction_amount)}`)
        .replace(/%ORDER_SHIPPING_COST%/g, "Gratis")
        .replace(/%ORDER_TOTAL%/g, `$${formatPrice(transaction_amount)}`);

      // Enviar el correo
      await mailHandler(destinatario, asunto, cuerpo);
    }

    // Guardar los cambios en la base de datos
    await order.save();

    return order;
  } catch (error) {
    console.error("Error al actualizar la orden:", error);
    throw error; // Re-lanzar el error para que sea manejado en el contexto externo
  }
};

module.exports = {
  putOrderController,
};
