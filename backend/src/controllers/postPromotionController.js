const { Promotion } = require("../db");

const postPromotionController = async (type, description, title, img, products, disabled, categories, usageRecord, gift, endDate) => {
  let promotion;

  promotion = await Promotion.create({
    type, description, title, img, products, disabled, categories, usageRecord, gift, endDate
  });
  return promotion;
};

module.exports = postPromotionController;
