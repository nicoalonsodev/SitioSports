const {
  putCommissionsController,
} = require("../controllers/putCommissionsController.js");

const putCommissionsHandler = async (req, res) => {
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
  } = req.body;
  const commissionUpdate = {
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
