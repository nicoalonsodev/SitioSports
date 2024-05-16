const { Order } = require("../db");

const getLastOrderNumber = async () => {
  try {
    // Encuentra la última orden creada
    const lastOrder = await Order.findOne({
      order: [['createdAt', 'DESC']], // Ordena por la columna createdAt en orden descendente
    });

    if (lastOrder) {
      // Si se encuentra la última orden, retorna el order_number
      return lastOrder.order_number;
    } else {
      // Si no hay órdenes en la base de datos, retorna null o un valor por defecto
      return null;
    }
  } catch (error) {
    console.error("Error fetching last order:", error);
    throw error;
  }
};
module.exports = {
getLastOrderNumber
}