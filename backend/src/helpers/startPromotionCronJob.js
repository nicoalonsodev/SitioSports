const cron = require("node-cron");
const updatePromotions = require("./updatePromotions");

const startPromotionCronJob = () => {
  // Configurar el cron job para que se ejecute todos los días a la medianoche
  cron.schedule("0 0 * * *", async () => {
    console.log("Running daily promotion update job...");
    try {
      await updatePromotions();
      console.log("Promotions updated successfully.");
    } catch (error) {
      console.error("Error running daily promotion update job:", error);
    }
  });
};

module.exports = startPromotionCronJob;
