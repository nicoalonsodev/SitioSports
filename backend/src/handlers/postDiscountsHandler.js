const postDiscountsController = require("../controllers/postDiscountsController");

const postDiscountsHandler = async (req, res) => {
  try {
    const { code, description, percentage, remainingUses } = req.body;
    const discount = await postDiscountsController(
      code,
      description,
      percentage,
      remainingUses
    );
    return res.status(200).json(discount);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postDiscountsHandler,
};
