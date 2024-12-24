const { getPromotionController } = require('../controllers/getPromotionController')

const getPromotionHandler = async (req, res) => {
    try{
     let promotion = await getPromotionController(req);
     res.status(200).json({ promotion })
    }catch(error){
        res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    getPromotionHandler
  };