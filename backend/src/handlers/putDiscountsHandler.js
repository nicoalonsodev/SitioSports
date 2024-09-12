const { putDiscountsController } = require('../controllers/putDiscountsController.js');

const putDiscountsHandler = async (req, res) => {
  const id = req.params.id;
  const { code, description, percentage, disabled } = req.body;
  try {
    await putDiscountsController(id, code, description, percentage, disabled );
    res.send('Registro modificado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putDiscountsHandler
};