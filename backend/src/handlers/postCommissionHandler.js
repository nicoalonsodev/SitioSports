const { postCommissionsController } = require("../controllers/postCommisionController");

const postCommissionsHandler = async (req, res) => {
  try {
    const {
      productName,
      price,
      brand,
      cat,
      sub_cat,
      sizes,
      variants,
      color,
      badge,
      image,
      description,
      compare_price
    } = req.body;
    const productPosted = await postCommissionsController(
      productName,
      price,
      brand,
      cat,
      sub_cat,
      sizes,
      variants,
      color,
      badge,
      image,
      description,
      compare_price
    );
    return res.status(200).json(productPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postCommissionsHandler,
};
