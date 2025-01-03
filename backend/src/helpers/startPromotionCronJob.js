const cron = require('node-cron');
const { Promotion } = require("../db"); // Asegúrate de que esté correctamente configurado

const startPromotionCronJob = async () => {
  // Actualizar promociones al inicio del backend
  try {
    const now = new Date();
    const result = await Promotion.updateMany(
      { endDate: { $lte: now }, disabled: false },
      { $set: { disabled: true } }
    );
    console.log(`[STARTUP] Promotions updated: ${result.nModified}`);
  } catch (error) {
    console.error("[STARTUP] Error updating promotions:", error);
  }

  // Configurar el cron job para ejecución diaria
  cron.schedule('0 0 * * *', async () => {
    try {
      const now = new Date();
      const result = await Promotion.updateMany(
        { endDate: { $lte: now }, disabled: false },
        { $set: { disabled: true } }
      );
      console.log(`[CRON JOB] Promotions updated: ${result.nModified}`);
    } catch (error) {
      console.error("[CRON JOB] Error updating promotions:", error);
    }
  });
};

module.exports = startPromotionCronJob;
