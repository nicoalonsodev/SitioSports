const { Promotion } = require("../db"); // Asegúrate de que esté correctamente configurado

const updatePromotions = async () => {
  try {
    const now = new Date();

    // Actualizar directamente todas las promociones que cumplan la condición
    const [updatedCount] = await Promotion.update(
      { disabled: true }, // Cambios a realizar
      { where: { endDate: { [Op.lte]: now }, disabled: false } } // Condiciones
    );

    if (updatedCount > 0) {
      console.log(`[TASK] Promotions updated: ${updatedCount}`);
    } else {
      console.log("[TASK] No promotions to update.");
    }
  } catch (error) {
    console.error("[TASK] Error updating promotions:", error);
  }
};

module.exports = updatePromotions;
