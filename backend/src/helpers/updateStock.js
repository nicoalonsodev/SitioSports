const { Product } = require("../db");
const { putProductController } = require("../controllers/putProductController");
const updateStock = async (itemsStock) => {
  console.log(itemsStock);
  try {
    // Iterar sobre cada producto en la orden
    for (const product of itemsStock) {
      // Encontrar el producto en la base de datos por su ID
      const existingProduct = await Product.findOne({
        where: { id: product.id },
      });

      // Verificar si el producto existe en la base de datos
      if (existingProduct) {
        console.log(existingProduct.variants);
        const categoryId = product.category_id ? parseInt(product.category_id) : product.variant.id;
        const variantToUpdate = existingProduct.variants.find(
          (variant) => variant.id === categoryId
        );
        console.log(variantToUpdate);
        if (variantToUpdate) {
          productSize = product.description ? product.description : product.size;
          // Encontrar el tamaño correspondiente en el array de sizes
          const sizeToUpdate = variantToUpdate.sizes.find(
            (size) => size.size === productSize
          );
          // Verificar si se encontró el tamaño
          if (sizeToUpdate) {
            if (!sizeToUpdate.sold) {
              sizeToUpdate.sold = 0;
            }
            // Restar la cantidad comprada del stock del tamaño
            sizeToUpdate.stock -= parseInt(product.quantity);
            sizeToUpdate.sold += parseInt(product.quantity);
            // Guardar los cambios en la base de datos
            await putProductController(existingProduct.id, {
              variants: existingProduct.variants,
            });
          } else {
            console.log(
              `El tamaño ${product.description} no se encontró para el producto con ID ${product.id}`
            );
          }
        } else {
          console.log(`Estamos errando`);
        }
      } else {
        console.log(
          `El producto con ID ${product.id} no se encontró en la base de datos`
        );
      }
    }
  } catch (error) {
    console.error("Error al actualizar el stock:", error);
  }
};

module.exports = {
  updateStock,
};
