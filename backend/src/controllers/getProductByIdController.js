const { Product } = require('../db')

const getProductByIdController = async(slug) => {
    const product = await Product.findOne({ where: { slug } })

    return product;
}

module.exports = { getProductByIdController };