const {
  putProductController,
} = require("../controllers/putProductController.js");

const putProductHandler = async (req, res) => {
  const id = req.params.id;
  const {
    productName,
    price,
    stock,
    brand,
    cat,
    sub_cat,
    sizes,
    color,
    badge,
    image,
    description,
  } = req.body;
  try {
    await putProductController(
      id,
      productName,
      price,
      stock,
      brand,
      cat,
      sub_cat,
      sizes,
      color,
      badge,
      image,
      description
    );
    res.send("Registro modificado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putProductHandler,
};
