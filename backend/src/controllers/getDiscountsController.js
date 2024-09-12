const { Discount } = require("../db.js");

const getDiscountsController = async(req) => {
    try {
      let discount;
      if (req.query.id) {
        discount = await Discount.findOne({ where: { id: req.query.id } });
       } else {
        discount = await Discount.findAll();
      }
      return discount;
    } catch(error) {
      throw new Error('Hubo un problema para encontrar los Codigos de Descuento')
    }
  };

module.exports = {
    getDiscountsController
};
