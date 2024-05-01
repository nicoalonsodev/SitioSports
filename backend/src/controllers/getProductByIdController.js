const { Product } = require('../db')

const getProductByIdController = async(id) => {
    const product = await Product.findOne({ where: { id } })

    return product;
}

module.exports = { getProductByIdController };