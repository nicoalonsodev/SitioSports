const {
  putProductController,
} = require("../controllers/putProductController.js");

const putProductHandler = async (req, res) => {
  const id = req.params.id;
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
    best_sellers,
    new_arrivals,
    special_offers,
  } = req.body;
  const updatedFields = {
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
    best_sellers,
    new_arrivals,
    special_offers,
  };
  try {
    await putProductController(id, updatedFields);
    console.log("cambiaste!");
    res.send("Registro modificado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putProductHandler,
};
