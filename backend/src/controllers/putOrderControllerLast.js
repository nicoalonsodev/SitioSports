const { Order } = require("../db");
const { updateStock } = require("../helpers/updateStock");
const { mailHandler } = require("../handlers/postMailHandler");
const emailTemplate = require("../helpers/mailsTemplate/postOrder");
const orderCancelled = require("../helpers/mailsTemplate/orderCancelled");
const orderDispatched = require("../helpers/mailsTemplate/orderDispatched");
const orderAproved = require("../helpers/mailsTemplate/orderAproved");
const putOrderController = async (id, updatedFields) => {
  try {
    const order = await Order.findOne({ where: { id: id } });
    if (!order) {
      throw new Error("No se encontró el producto");
    }
 
    // Desestructurar los campos actualizados del objeto updatedFields
    const {
      items,
      name,
      phone,
      email,
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
      admin_comment,
      track_id,
    } = updatedFields;

    const itemsStock = items;
    if (status === "Aprobado") {
      updateStock(itemsStock);
    }

    if (items) {
      order.items = items;
    }
    if (email) {
      order.email = email;
    }
    if (name) {
      order.name = name;
    }
    if (phone) {
      order.phone = phone;
    }
    if (shipment) {
      order.shipment = shipment;
    }
    if (order_type) {
      order.order_type = order_type;
    }
    if (status) {
      order.status = status;
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
    if (admin_comment) {
      order.admin_comment = admin_comment;
    }
    if (track_id) {
      order.track_id = track_id;
    }

    const client_email = order.email;
    const order_number = order.order_number;
    if (!client_email) {
      throw new Error("No se encontró el email del cliente en la orden");
    }
    const action = order.status === "Cancelado" ? "Cancelada" : order.status === "Enviado" ? "Despachada" : order.status === "Aprobado" ? "Aprobada" : "";

    const asunto = `Orden de compra #${order_number} ${action}`;
    const destinatario = client_email;
    const cuerpo = status === "Cancelado" ? orderCancelled.replace("%STATUS%", action) : status === "Enviado" ? orderDispatched
    .replace(/%STATUS%/g, action)
    .replace(/%TRACK_ID%/g, track_id) : status === "Aprobado" ? orderAproved.replace("%STATUS%", action) : "" ;


    await mailHandler(destinatario, asunto, cuerpo);
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
