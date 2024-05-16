const { Order } = require("../db.js");

const getOrdersController = async(req) => {
    try {
      let orders;
    //   if (req.query.id) {
    //     users = await Order.findOne({ where: { id: req.query.id } });
    //   } else if (req.query.username) {
    //     users = await Order.findOne({ where: { username: req.query.username } });
    //   } else if (req.query.email) {
    //     users = await Order.findOne({ where: { email: req.query.email } });
    //   } else {
        orders = await Order.findAll();
    //   }
      return orders;
    } catch(error) {
      throw new Error('Hubo un problema para encontrar los usuarios')
    }
  };

module.exports = {
    getOrdersController
};
