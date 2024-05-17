const { Order } = require("../db");
const { getLastOrderNumber } = require("../helpers/getLastNumber");
const orderTransferCreate = require("../helpers/mailsTemplate/orderTransferCreate");
const { mailHandler } = require("../handlers/postMailHandler");
const postOrderController = async (
  items,
  name,
  email,
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
   // Generar el nuevo número de orden (esto depende de tu lógica de negocio)
   const newOrderNumber = lastOrderNumber ? lastOrderNumber + 1 : 1; // Ejemplo: incrementar en 1


   const asunto = `Gracias por comprar en Sitio Sports`;
   const destinatario = email;
   const cuerpo = orderTransferCreate.replace(/%ORDER_NUMBER%/g, newOrderNumber)
   await mailHandler(destinatario, asunto, cuerpo);


   // Crear la nueva orden
    const order = await Order.create(
      {
        order_number: newOrderNumber,
        items,
        name,
        email,
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
      }
    );
    return order;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  postOrderController,
};
