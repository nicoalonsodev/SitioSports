const {
  getAllCommissionsController,
} = require("../controllers/getAllCommissionController");

const getAllCommissionsHandler = async (req, res) => {
  const { page = 1, limit = 50 } = req.query;

  try {
    let apiResponse = await getAllCommissionsController(page, limit);
    res.json(apiResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllCommissionsHandler,
};
