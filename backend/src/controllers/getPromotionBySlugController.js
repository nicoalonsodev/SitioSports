const { Promotion } = require('../db')

const getPromotionBySlugController = async(slug) => {
    const promotion = await Promotion.findOne({ where: { slug } })

    return promotion;
}

module.exports = { getPromotionBySlugController };