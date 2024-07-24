const { Product } = require("../db");

// Función para crear un slug a partir del nombre del producto
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Reemplaza caracteres no alfanuméricos por guiones
    .replace(/(^-|-$)+/g, '');   // Elimina guiones al principio y al final
};

const putProductController = async (id, updatedFields) => {
  try {
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      throw new Error("No se encontró el producto");
    }

    // Desestructurar los campos actualizados del objeto updatedFields
    const {
      productName,
      price,
      compare_price,
      brand,
      cat,
      sub_cat,
      sizes,
      variants,
      color,
      badge,
      image,
      description,
      best_sellers,
      new_arrivals,
      special_offers,
      discount_percentage,
      video_youtube,
      disabled,
      tags
    } = updatedFields;

    // Actualizar los campos del producto solo si se proporcionan en updatedFields
    if (productName !== undefined) {
      product.productName = productName;
      product.slug = createSlug(productName);
    }
    if (disabled !== undefined) {
      product.disabled = disabled;
    }
    if (price !== undefined) {
      product.price = price;
    }
    if (compare_price !== undefined) {
      product.compare_price = compare_price;
    }
    if (brand !== undefined) {
      product.brand = brand;
    }
    if (cat !== undefined) {
      product.cat = cat;
    }
    if (sub_cat !== undefined) {
      product.sub_cat = sub_cat;
    }
    if (sizes !== undefined) {
      product.sizes = sizes;
    }
    if (variants !== undefined) {
      product.variants = variants;
    }
    if (color !== undefined) {
      product.color = color;
    }
    if (badge !== undefined) {
      product.badge = badge;
    }
    if (image !== undefined) {
      product.image = image;
    }
    if (description !== undefined) {
      product.description = description;
    }
    if (discount_percentage !== undefined) {
      product.discount_percentage = discount_percentage;
    }
    if (video_youtube !== undefined) {
      product.video_youtube = video_youtube;
    }
    if (best_sellers !== undefined) {
      product.best_sellers = best_sellers;
    }
    if (new_arrivals !== undefined) {
      product.new_arrivals = new_arrivals;
    }
    if (special_offers !== undefined) {
      product.special_offers = special_offers;
    }
    if (tags !== undefined) {
      product.tags = tags;
    }

    // Calcular las ventas totales (sold) de todas las variantes y tamaños
    let totalSales = 0;
    if (variants) {
      totalSales = variants.reduce((total, variant) => {
        const variantSales = variant.sizes.reduce((variantTotal, size) => {
          return variantTotal + size.sold;
        }, 0);
        return total + variantSales;
      }, 0);
    }

    // Actualizar la propiedad total_sales del producto
    product.total_sales = totalSales;

    // Guardar los cambios en la base de datos
    await product.save();

    return product;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error; // Re-lanzar el error para que sea manejado en el contexto externo
  }
};

module.exports = {
  putProductController,
};
