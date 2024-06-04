const {
  deleteUserController,
  } = require("../controllers/deleteUserController.js");
  
  const deleteUserHandler = async (req, res) => {
    const id = req.params.id;
   
    try {
      await deleteUserController(id);
      res.send("Usuario destruido");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    deleteUserHandler,
  };
  