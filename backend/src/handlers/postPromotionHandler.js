const postPromotionController = require("../controllers/postPromotionController");

const postPromotionHandler = async (req, res) => {
  try {
    const {
      type,
      description,
      title,
      img,
      products,
      disabled,
      categories,
      subcategories,
      giftCategories,
      giftSubcategories,
      usageRecord,
      gift,
      endDate,
    } = req.body;
    const promotion = await postPromotionController(
      type,
      description,
      title,
      img,
      products,
      disabled,
      categories,
      subcategories,
      giftCategories,
      giftSubcategories,
      usageRecord,
      gift,
      endDate
    );
    return res.status(200).json(promotion);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postPromotionHandler,
};
