const { Promotion } = require("../db"); // Asegúrate de que esté correctamente configurado

const updatePromotions = async () => {
  try {
    const now = new Date();
    const promotions = await Promotion.find({ endDate: { $lte: now }, disabled: false });

    if (promotions.length > 0) {
      for (const promo of promotions) {
        await Promotion.updateOne({ id: promo.id }, { $set: { disabled: true } });
      }
      console.log(`[TASK] Promotions updated: ${promotions.length}`);
    } else {
      console.log("[TASK] No promotions to update.");
    }
  } catch (error) {
    console.error("[TASK] Error updating promotions:", error);
  }
};

module.exports = updatePromotions;
