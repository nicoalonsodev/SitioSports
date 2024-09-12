const { Discount } = require('../db');

const putDiscountsController = async (id, code, description, percentage, disabled) => {
    // Busca el registro en la base de datos por su ID
    const discount = await Discount.findOne({ where: { id } })
    if (!discount) {
      throw new Error('No se encontró el cupon de descuento');
    }

    // Actualiza los campos que deseas modificar
    if(code) {
      discount.code = code;
    }
    if(description){
      discount.description = description;
    }
    if(percentage){
      discount.percentage = percentage;
    }
    if(disabled){
      discount.disabled = disabled;
    }

    // Guarda los cambios en la base de datos
    await discount.save();

    return discount;
};

module.exports = {
  putDiscountsController
};