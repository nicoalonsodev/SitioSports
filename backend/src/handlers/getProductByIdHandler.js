const {
  getProductByIdController,
} = require("../controllers/getProductByIdController");

const getProductByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdController(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProductByIdHandler,
};
