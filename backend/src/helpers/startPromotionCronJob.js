const cron = require('node-cron');
const { Promotion } = require("../db"); // Asegúrate de que esté correctamente configurado

const startPromotionCronJob = () => {
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
