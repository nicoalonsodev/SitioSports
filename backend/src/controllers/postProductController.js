const { Product } = require("../db");

const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Reemplaza caracteres no alfanuméricos por guiones
    .replace(/(^-|-$)+/g, '');   // Elimina guiones al principio y al final
};

const generateUniqueSlug = async (baseSlug) => {
  let slug = baseSlug;
  let count = 1;

  // Verificar si existe un producto con el mismo slug
  while (await Product.findOne({ where: { slug } })) {
    // Si existe, añadir un número al final del slug
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
};

const postProductController = async (
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
  compare_price,
  tags
) => {
  // Generar slug a partir del productName
  const baseSlug = createSlug(productName);

  // Generar un slug único
  const slug = await generateUniqueSlug(baseSlug);

  // Crear el producto con el slug único
  const product = await Product.create({
    productName,
    slug, // Guardar el slug único en la base de datos
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
    compare_price,
    tags,
  });

  return product;
};

module.exports = postProductController;
