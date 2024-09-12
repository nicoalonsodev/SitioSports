const { getDiscountsController } = require('../controllers/getDiscountsController')

const getDiscountsHandler = async (req, res) => {
    try{
     let discounts = await getDiscountsController(req);
     res.status(200).json({ discounts })
    }catch(error){
        res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    getDiscountsHandler
  };