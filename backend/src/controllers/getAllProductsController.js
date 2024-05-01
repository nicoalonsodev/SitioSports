const { Product } = require('../db');

const getAllProductsController = async (page = 1, limit = 3) => {
  const offset = (page - 1) * limit;
  
  const allProducts = await Product.findAll({
    offset,
    limit,
  });

  return allProducts;
};

module.exports = {
    getAllProductsController,
};
