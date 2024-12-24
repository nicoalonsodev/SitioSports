const { Promotion } = require('../db');

const putPromotionController = async ( id, type, title, description, img, products, disabled, categories, usageRecord, gift, endDate) => {
 
    // Busca el registro en la base de datos por su ID
    const promotion = await Promotion.findOne({ where: { id } })
    if (!promotion) {
      throw new Error('No se encontró la promocion');
    }

    // Actualiza los campos que deseas modificar
    if(type) {
        promotion.type = type;
    }
    if(title) {
        promotion.title = title;
    }
    if(img) {
        promotion.img = img;
    }
    if(description){
      promotion.description = description;
    }
    if(products){
      promotion.products = products;
    }
    if(categories){
      promotion.categories = categories;
    }
    if (usageRecord) {
        promotion.usageRecord = usageRecord;
    }
    if(disabled){
      promotion.disabled = disabled;
    }
    if (gift) {
        promotion.gift = gift;
    }
    if(endDate){
      promotion.endDate = endDate;
    }

    // Guarda los cambios en la base de datos
    await promotion.save();

    return promotion;
};

module.exports = {
  putPromotionController
};