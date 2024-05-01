const {
  getAllProductsController,
} = require("../controllers/getAllProductsController");

const getAllProductsHandler = async (req, res) => {
  const { page = 1, limit = 50 } = req.query;

  try {
    let apiResponse = await getAllProductsController(page, limit);
    res.json(apiResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProductsHandler,
};
