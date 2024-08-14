const { putOrderController } = require("../controllers/putOrderControllerLast");

const putOrderHandler = async (req, res) => {
    const id = req.params.id;
    const {
      items,
      name,
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
      transaction_details,
      admin_comment,
      track_id,
      email
    } = req.body;
    const updatedFields = {
      items,
      name,
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
      transaction_details,
      admin_comment,
      track_id,
      email
    };
    try {
      await putOrderController(id, updatedFields);
      console.log("cambiaste!");
      res.send("Registro modificado correctamente");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    putOrderHandler,
  };
  