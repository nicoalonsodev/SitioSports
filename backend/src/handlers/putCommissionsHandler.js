const {
  putCommissionsController,
} = require("../controllers/putCommissionsController.js");

const putCommissionsHandler = async (req, res) => {
  const id = req.params.id;
  const {
    productName,
    slug,
    price,
    compare_price,
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
    discount_percentage,
    video_youtube
  } = req.body;
  const commissionUpdate = {
    productName,
    slug,
    price,
    compare_price,
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
    discount_percentage,
    video_youtube
  };
  try {
    await putCommissionsController(id, commissionUpdate);
    console.log("cambiaste!");
    res.send("Registro modificado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putCommissionsHandler
};
