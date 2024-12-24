const { Promotion } = require("../db.js");

const getPromotionController = async(req) => {
    try {
      let promotion;
      if (req.query.id) {
        promotion = await Promotion.findOne({ where: { id: req.query.id } });
       } else {
        promotion = await Promotion.findAll();
      }
      return promotion;
    } catch(error) {
      throw new Error('Hubo un problema para encontrar las promociones')
    }
  };

module.exports = {
    getPromotionController
};
