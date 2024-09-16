
const { Order } = require("../db.js");
const { Op } = require("sequelize");

  const destroyOrders = async(req) => {
    try {
        // Eliminar todas las órdenes con order_number menor a 41
        const result = await Order.destroy({
          where: {
            order_number: {
              [Op.lt]: 41,  // 'Op.lt' es menor que 41
            },
          },
        });
    
        console.log(`${result} órdenes eliminadas.`);  // Muestra cuántas órdenes fueron eliminadas
      } catch (error) {
        console.error("Error eliminando órdenes:", error);
      }
  };

module.exports = {
    destroyOrders
};
