const { Order } = require("../db");
const { getLastOrderNumber } = require("../helpers/getLastNumber");
const postFirstOrderController = async(
    order_id, client_email, client_id, products, payer) => {
      try {
        // Obtener el número de la última orden
        const lastOrderNumber = await getLastOrderNumber();
        // Generar el nuevo número de orden (esto depende de tu lógica de negocio)
        const newOrderNumber = lastOrderNumber ? lastOrderNumber + 1 : 1; // Ejemplo: incrementar en 1
        // Crear la nueva orden
        const order = await Order.create({
          order_id,
          order_number: newOrderNumber,
          email: client_email,
          name: payer.payerName,
          client_id: client_id,
          items: products,
          shipment: {
            zipCode: payer.zipCode,
            state_name: payer.state,
            city_name: payer.city,
            street_name: payer.street,
            street_number: payer.streetNumber,
            floor: payer.floor,
            aclaration: payer.aclaration,
          },
          phone: payer.phone,


          // shipping_type: shipping_type
        });
       
        return order;
      } catch (error) {
        console.error("Error creating order:", error);
        throw error;
      }
    };

module.exports = {
    postFirstOrderController
}