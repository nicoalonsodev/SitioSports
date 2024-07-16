const { Commission } = require("../db");

const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Reemplaza caracteres no alfanuméricos por guiones
    .replace(/(^-|-$)+/g, '');   // Elimina guiones al principio y al final
};

const postCommissionsController = async (
  productName,
  price,
  brand,
  cat,
  sub_cat,
  sizes,
  variants,
  color,
  badge,
  image,
  description,
  compare_price
) => {
  // Generar slug a partir del productName
  const slug = createSlug(productName);

  // Buscar si existe un producto con el mismo slug
  let product = await Commission.findOne({ where: { slug } });

  if (!product) {
    // No se encontró un producto con el mismo slug, crear uno nuevo
    product = await Commission.create({
      productName,
      slug, // Guardar el slug en la base de datos
      price,
      brand,
      cat,
      sub_cat,
      sizes,
      variants,
      color,
      badge,
      image,
      description,
      compare_price
    });
  }
  return product;
};

module.exports = { postCommissionsController };
