const { Promotion } = require("../db");

const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Reemplaza caracteres no alfanuméricos por guiones
    .replace(/(^-|-$)+/g, ""); // Elimina guiones al principio y al final
};

const generateUniqueSlug = async (baseSlug) => {
  let slug = baseSlug;
  let count = 1;

  // Verificar si existe un producto con el mismo slug
  while (await Promotion.findOne({ where: { slug } })) {
    // Si existe, añadir un número al final del slug
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
};
const postPromotionController = async (
  type,
  description,
  title,
  img,
  products,
  disabled,
  categories,
  subcategories,
  giftCategories,
  giftSubcategories,
  usageRecord,
  gift,
  endDate
) => {
  let promotion;
  // Generar slug a partir del productName
  const baseSlug = createSlug(title);

  // Generar un slug único
  const slug = await generateUniqueSlug(baseSlug);
  promotion = await Promotion.create({
    type,
    slug,
    description,
    title,
    img,
    products,
    disabled,
    categories,
    subcategories,
    giftCategories,
    giftSubcategories,
    usageRecord,
    gift,
    endDate,
  });
  return promotion;
};

module.exports = postPromotionController;
