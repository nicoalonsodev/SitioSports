const { Order } = require("../db");
const { getLastOrderNumber } = require("../helpers/getLastNumber");
const postFirstOrderController = async(
    order_id, client_email) => {
      try {
        // Obtener el número de la última orden
        const lastOrderNumber = await getLastOrderNumber();
        // Generar el nuevo número de orden (esto depende de tu lógica de negocio)
        const newOrderNumber = lastOrderNumber ? lastOrderNumber + 1 : 1; // Ejemplo: incrementar en 1
        // Crear la nueva orden
        const order = await Order.create({
          order_id,
          order_number: newOrderNumber,
          email: client_email,
          // shipping_type: shipping_type
        });
       
        return order;
      } catch (error) {
        console.error("Error creating order:", error);
        throw error;
      }
    };

module.exports = {
    postFirstOrderController
}