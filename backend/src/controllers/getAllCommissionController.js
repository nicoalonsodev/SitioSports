const { Commission } = require('../db');

const getAllCommissionsController = async (page = 1, limit = 3) => {
  const offset = (page - 1) * limit;
  
  const allProducts = await Commission.findAll({
    offset,
    limit,
  });

  return allProducts;
};

module.exports = {
  getAllCommissionsController,
};
