const postProductController = require('../controllers/postProductController');

const postProductHandler = async(req, res) => {
    try {
        const { productName, price, stock, brand, cat, sub_cat, sizes, color, badge, image, description } = req.body
        const userPosted = await postProductController(productName, price, stock, brand, cat, sub_cat, sizes, color, badge, image, description) ;
        return res.status(200).json(userPosted)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    postProductHandler
};