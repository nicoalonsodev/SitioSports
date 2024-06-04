const { User } = require('../db');

const deleteUserController = async (id) => {
    // Busca el registro en la base de datos por su ID
    const user = await User.findOne({ where: { id } });

    if (!user) {
        throw new Error('No se encontró el usuario');
    }

    // Elimina el usuario
    await user.destroy();

    return { message: 'Usuario eliminado correctamente' };
};

module.exports = {
    deleteUserController
};