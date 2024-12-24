const { Promotion } = require("../db");

const postPromotionController = async (type, title, description, img, products, categories, usageRecord, gift, endDate) => {
  let promotion;

  promotion = await Promotion.create({
    type, title, img, description, products, categories, usageRecord, gift, endDate
  });
  return promotion;
};

module.exports = postPromotionController;
