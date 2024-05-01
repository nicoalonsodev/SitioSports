const { Product } = require("../db");

const putProductController = async (
  id,
  productName,
  price,
  stock,
  brand,
  cat,
  sub_cat,
  sizes,
  color,
  badge,
  image,
  description
) => {

  const product = await Product.findOne({ where: { id } });
  if (!product) {
    throw new Error("No se encontró el usuario");
  }
 
  if (productName) {
    product.productName = productName;
  }
  if (price) {
    product.price = price;
  }
  if (stock) {
    product.stock = stock;
  }
  if (brand) {
    product.brand = brand;
  }
  if (cat) {
    product.cat = cat;
  }
  if (sub_cat) {
    product.sub_cat = sub_cat;
  }
  if (sizes) {
    product.sizes = sizes;
  }
  if (color) {
    product.color = color;
  }
  if (badge) {
    product.badge = badge;
  }
  if (image) {
    product.image = image;
  }
  if (description) {
    product.description = description;
  }

  await product.save();

  return product;
};

module.exports = {
  putProductController,
};
