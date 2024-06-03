const cleanData = (data) => {

  const items = data.additional_info.items || [];
  const filteredItems = items.filter(item => item.title !== "Costo de envío");

  const name = data.additional_info.payer.first_name || "";
  const phone = data.additional_info.payer.phone.number || "";

  const zipCode =
    data.additional_info.shipments.receiver_address.zip_code || "";
  const state_name =
    data.additional_info.shipments.receiver_address.state_name || "";
  const city_name =
    data.additional_info.shipments.receiver_address.city_name || "";
  const street_name =
    data.additional_info.shipments.receiver_address.street_name || "";
  const street_number =
    data.additional_info.shipments.receiver_address.street_number || "";
  const apartment =
    data.additional_info.shipments.receiver_address.apartment || "";
  const floor = data.additional_info.shipments.receiver_address.floor || "";
  const aclaration =
    data.additional_info.shipments.receiver_address.aclaration || "";

  const order_type = data.order.type || "";
  const payerMp = data.payer || "";

  const payment_method = data.payment_method || "";

  const payment_method_id = data.payment_method_id || "";
  const payment_type_id = data.payment_type_id || "";

  const status = data.status || "";
  const status_detail = data.status_detail || "";
  const shipping_amount = data.shipping_amount || "";
  const transaction_amount = data.transaction_amount || "";
  const transaction_details = data.transaction_details || "";
  //   const payer_info = additional_info.;

  const cleanedObject = {
    items: filteredItems,
    name: name,
    phone: phone,
    shipment: {
      zipCode: zipCode,
      state_name,
      city_name,
      street_name,
      street_number,
      apartment,
      floor,
      aclaration,
    },
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
  };
  return cleanedObject;
};

module.exports = {
  cleanData,
};
