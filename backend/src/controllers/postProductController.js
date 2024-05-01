const { Product } = require("../db");

const postProductController = async (
  productName, price, stock, brand, cat, sub_cat, sizes, color, badge, image, description
) => {
  // Buscar si existe un usuario con la misma dirección de correo electrónico y proveedor
  let product = await Product.findOne({ where: { productName } });

  if (!product) {
    // No se encontró un usuario con la misma dirección de correo electrónico y proveedor, crear uno nuevo
    product = await Product.create({
      productName, price, stock, brand, cat, sub_cat, sizes, color, badge, image, description
    });
  }
  return product;
};

module.exports = postProductController;
