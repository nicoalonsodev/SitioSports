const { Product } = require('../db');

const deleteProductController = async (id) => {
    // Busca el registro en la base de datos por su ID
    const product = await Product.findOne({ where: { id } });

    if (!product) {
        throw new Error('No se encontró el usuario');
    }

    // Elimina el usuario
    await product.destroy();

    return { message: 'Usuario eliminado correctamente' };
};

module.exports = {
    deleteProductController
};