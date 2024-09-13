const { putDiscountsController } = require('../controllers/putDiscountsController.js');

const putDiscountsHandler = async (req, res) => {
  const code = req.params.code; // Usamos req.params.code para obtener el código del cupón desde la URL
  const { description, percentage, disabled, remainingUses, usageRecord } = req.body;

  try {
    // Llamamos al controlador para actualizar el descuento
    const updatedDiscount = await putDiscountsController(
      code,
      description, 
      percentage,
      disabled,
      remainingUses,
      usageRecord
    );
    
    // Enviamos la respuesta con los datos actualizados
    res.status(200).json({ valid: true, discount: updatedDiscount.percentage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putDiscountsHandler
};