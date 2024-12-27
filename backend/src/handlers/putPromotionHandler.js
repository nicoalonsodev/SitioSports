const {
  putPromotionController,
} = require("../controllers/putPromotionController.js");

const putPromotionHandler = async (req, res) => {
  const id = req.params.id; // Obtiene el ID del código de promoción desde la URL
  const {
    type,
    title,
    description,
    img,
    products,
    disabled,
    categories,
    usageRecord,
    gift,
    endDate,
  } = req.body;

  // Validación básica de datos
  if (!id) {
    return res
      .status(400)
      .json({ error: "El código de promoción (ID) es obligatorio." });
  }

  try {
    // Llama al controlador para actualizar la promoción
    const updatedPromotion = await putPromotionController(
      id,
      type,
      title,
      img,
      description,
      products,
      disabled,
      categories,
      usageRecord,
      gift,
      endDate
    );

    // Verifica si se actualizó correctamente
    if (!updatedPromotion) {
      return res.status(404).json({ error: "Promoción no encontrada." });
    }

    // Envia respuesta de éxito
    res
      .status(200)
      .json({
        message: "Promoción modificada correctamente",
        updatedPromotion,
      });
  } catch (error) {
    console.error(error);

    // Manejo de errores inesperados
    res
      .status(500)
      .json({
        error: "Error al modificar la promoción.",
        details: error.message,
      });
  }
};

module.exports = {
  putPromotionHandler,
};
