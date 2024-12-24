const {
  deletePromotionController,
  } = require("../controllers/deletePromotionController.js");
  
  const deletePromotionHandler = async (req, res) => {
    const id = req.params.id;
    try {
      await deletePromotionController(id);
      res.send("Promocion destruida");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    deletePromotionHandler,
  };
  
