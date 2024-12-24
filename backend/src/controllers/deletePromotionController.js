const { Promotion } = require('../db');

const deletePromotionController = async (id) => {
    // Busca el registro en la base de datos por su ID
    const promotion = await Promotion.findOne({ where: { id } });

    if (!promotion) {
        throw new Error('No se encontró la Promocion');
    }

    // Elimina la promocion
    await promotion.destroy();

    return { message: 'Promocion eliminada correctamente' };
};

module.exports = {
    deletePromotionController
};