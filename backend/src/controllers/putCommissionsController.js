const { Commission } = require("../db");

const putCommissionsController = async (id, updatedFields) => {
  try {
    const product = await Commission.findOne({ where: { id } });
    if (!product) {
      throw new Error("No se encontró el producto");
    }

    // Desestructurar los campos actualizados del objeto updatedFields
    const {
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
    } = updatedFields;

    // Actualizar los campos del producto solo si se proporcionan en updatedFields
    if (productName) {
      product.productName = productName;
    }
    if (price) {
      product.price = price;
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
    if (variants) {
      product.variants = variants;
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

    // Guardar los cambios en la base de datos
    await product.save();

    return product;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error; // Re-lanzar el error para que sea manejado en el contexto externo
  }
};

module.exports = {
  putCommissionsController,
};
