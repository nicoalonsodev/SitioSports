const cron = require('node-cron');
const { Promotion } = require("../db"); // Asegúrate de que esté correctamente configurado

const startPromotionCronJob = () => {
  cron.schedule('0 0 * * *', async () => {
    try {
      const now = new Date();
      const promotions = await Promotion.find({ endDate: { $lte: now }, disabled: false });

      if (promotions.length > 0) {
        for (const promo of promotions) {
          promo.disabled = true;
          await promo.save();
        }
        console.log(`[CRON JOB] Promotions updated: ${promotions.length}`);
      } else {
        console.log("[CRON JOB] No promotions to update.");
      }
    } catch (error) {
      console.error("[CRON JOB] Error updating promotions:", error);
    }
  });
};

module.exports = startPromotionCronJob;
