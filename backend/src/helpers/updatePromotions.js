const { Promotion } = require("../db.js");
const { Op } = require("sequelize"); // Importar Op desde Sequelize

const updatePromotions = async () => {
  try {
    const now = new Date();

    // Encuentra las promociones caducadas
    const expiredPromotions = await Promotion.findAll({
      where: {
        endDate: { [Op.lt]: now }, // Promociones con endDate anterior a la fecha actual
        disabled: false, // Solo actualiza las promociones que no están deshabilitadas
      },
    });

    // Actualiza cada promoción encontrada
    await Promise.all(
      expiredPromotions.map((promotion) =>
        promotion.update({ disabled: true })
      )
    );

    console.log(`Promotions updated: ${expiredPromotions.length}`);
  } catch (error) {
    console.error("Error updating promotions:", error);
  }
};

module.exports = updatePromotions;
