const {
    deleteUserController,
  } = require("../controllers/deleteProductController.js");
  
  const deleteProductHandler = async (req, res) => {
    const id = req.params.id;
   
    try {
      await deleteUserController(id);
      res.send("Producto destruido");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    deleteProductHandler,
  };
  