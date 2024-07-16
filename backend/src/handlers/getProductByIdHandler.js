const {
  getProductByIdController,
} = require("../controllers/getProductByIdController");

const getProductByIdHandler = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await getProductByIdController(slug);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProductByIdHandler,
};
