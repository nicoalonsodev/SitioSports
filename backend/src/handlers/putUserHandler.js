const { putUserController } = require('../controllers/putUserController.js');

const putUserHandler = async (req, res) => {
  const id = req.params.id;
  const { username, email, password, rol, favorites, disabled } = req.body;
  try {
    await putUserController(id, username, email, password, rol, favorites, disabled);
    res.send('Registro modificado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    putUserHandler
};