const {postOrderController} = require("../controllers/postOrderController");

const postOrderHandler = async (req, res) => {
  try {
    const {
        items,
        name,
        email,
        phone,
        shipment,
        order_type,
        status,
        status_detail,
        payerMp,
        payment_method,
        payment_method_id,
        payment_type_id,
        shipping_amount,
        transaction_amount,
        transaction_details
    } = req.body;
    const userPosted = await postOrderController(
        items,
        name,
        email,
        phone,
        shipment,
        order_type,
        status,
        status_detail,
        payerMp,
        payment_method,
        payment_method_id,
        payment_type_id,
        shipping_amount,
        transaction_amount,
        transaction_details
    );
    
    return res.status(200).json(userPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postOrderHandler,
};
