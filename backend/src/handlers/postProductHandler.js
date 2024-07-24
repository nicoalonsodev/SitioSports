const postProductController = require("../controllers/postProductController");

const postProductHandler = async (req, res) => {
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
      compare_price,
      tags
    } = req.body;
    const userPosted = await postProductController(
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
      compare_price,
      tags
    );
    return res.status(200).json(userPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postProductHandler,
};
