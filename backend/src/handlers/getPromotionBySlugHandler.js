const {
  getPromotionBySlugController,
} = require("../controllers/getPromotionBySlugController");

const getPromotionBySlugHandler = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await getPromotionBySlugController(slug);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPromotionBySlugHandler,
};
