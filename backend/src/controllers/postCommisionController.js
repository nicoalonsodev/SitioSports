const { Commission } = require("../db");

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
  description
) => {
  // Buscar si existe un usuario con la misma dirección de correo electrónico y proveedor
  let product = await Commission.findOne({ where: { productName } });

  if (!product) {
    // No se encontró un usuario con la misma dirección de correo electrónico y proveedor, crear uno nuevo
    product = await Commission.create({
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
    });
  }
  return product;
};

module.exports = { postCommissionsController };
