// Dependencias y configuración base
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;
const startPromotionCronJob = require("./src/helpers/startPromotionCronJob.js");
const updatePromotions = require("./src/helpers/updatePromotions.js");

// Sincronización y levantamiento del servidor
conn.sync({ alter: true }).then(async () => {
  try {
    updatePromotions();
    // Iniciar el cron job
    startPromotionCronJob();
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
  } catch (error) {
    console.error("Error during server initialization:", error);
  }
});
