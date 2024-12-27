const { Promotion } = require("../db");
// Función para crear un slug a partir del nombre del producto
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Reemplaza caracteres no alfanuméricos por guiones
    .replace(/(^-|-$)+/g, ""); // Elimina guiones al principio y al final
};

const putPromotionController = async (
  id,
  type,
  title,
  img,
  description,
  products,
  disabled,
  categories,
  usageRecord,
  gift,
  endDate
) => {
  // Busca el registro en la base de datos por su ID
  const promotion = await Promotion.findOne({ where: { id } });
  if (!promotion) {
    throw new Error("No se encontró la promocion");
  }

  // Actualiza los campos que deseas modificar
  if (type) {
    promotion.type = type;
  }
  if (title) {
    promotion.title = title;
    promotion.slug = createSlug(title);
  }
  if (img) {
    promotion.img = img;
  }
  if (description) {
    promotion.description = description;
  }
  if (products) {
    promotion.products = products;
  }
  if (categories) {
    promotion.categories = categories;
  }
  if (usageRecord) {
    promotion.usageRecord = usageRecord;
  }
  if (disabled) {
    promotion.disabled = disabled;
  }
  if (gift) {
    promotion.gift = gift;
  }
  if (endDate) {
    promotion.endDate = endDate;
  }

  // Guarda los cambios en la base de datos
  await promotion.save();

  return promotion;
};

module.exports = {
  putPromotionController,
};
