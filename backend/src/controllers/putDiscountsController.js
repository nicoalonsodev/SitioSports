const { Discount } = require('../db');

const putDiscountsController = async ( code, description, percentage, disabled, remainingUses, usageRecord) => {
  let newUsageRecord = usageRecord
    // Busca el registro en la base de datos por su ID
    const discount = await Discount.findOne({ where: { code } })
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
    if(remainingUses){
      discount.remainingUses = remainingUses;
    }
    if (usageRecord) {
      if (!Array.isArray(discount.usageRecord)) {
        discount.usageRecord = []; // Inicializamos el array si está vacío o no existe
      }
      discount.usageRecord.push(usageRecord); // Agregamos el nuevo uso al array

      // Solo restamos un uso si llega un nuevo `usageRecord`
      if (discount.remainingUses > 0) {
        discount.remainingUses--;
      }

      // Si los usos restantes llegan a 0, deshabilitamos el cupón automáticamente
      if (discount.remainingUses === 0) {
        discount.disabled = true;
      }
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