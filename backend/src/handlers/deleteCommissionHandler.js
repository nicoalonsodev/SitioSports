const {
  deleteCommissionController,
  } = require("../controllers/deleteCommissionController.js");
  
  const deleteCommissionhandler = async (req, res) => {
    const id = req.params.id;
    try {
      await deleteCommissionController(id);
      res.send("Producto destruido");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    deleteCommissionhandler,
  };
  
