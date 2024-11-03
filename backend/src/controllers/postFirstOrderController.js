const fetch = require('node-fetch'); // O puedes usar axios si prefieres
const { Order } = require("../db");
const { getLastOrderNumber } = require("../helpers/getLastNumber");

const postFirstOrderController = async (
  order_id,
  client_email,
  client_id,
  products,
  payer,
  shipment
) => {
  try {
    // Obtener el número de la última orden
    const lastOrderNumber = await getLastOrderNumber();

    // Generar el nuevo número de orden
    const newOrderNumber = lastOrderNumber ? lastOrderNumber + 1 : 1;

    // Crear la nueva orden en tu base de datos
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
        rate: shipment
      },
      phone: payer.phone,
      shipping_amount: shipment.price
    });

    // Preparar los datos para enviar a Google Sheets
    const formData = new URLSearchParams({
      OrderNumber: order.order_number,
      Name: order.name,
      Email: order.email,
      Phone: order.phone,
      ZipCode: order.shipment.zipCode,
      StateName: order.shipment.state_name, 
      CityName: order.shipment.city_name, 
      StreetName: order.shipment.street_name, 
      StreetNumber: order.shipment.street_number, 
      Floor: order.shipment.floor, 
      Aclaration: order.shipment.aclaration
      // Address: `${order.shipment.street_name} ${order.shipment.street_number}, ${order.shipment.city_name}, ${order.shipment.state_name}, ${order.shipment.zipCode}`,
    });

    // Enviar los datos a Google Sheets de forma asíncrona
    const googleSheetsUrl =
      "https://script.google.com/macros/s/AKfycbwOEnOrWxhQ7SqZtArVUScCgKzp6PoE6uvclC8vsQNahKzIWCfDe9XKGPpGJOqqWgKM/exec";
    fetch(googleSheetsUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Opcionalmente, puedes manejar la respuesta aquí
        console.log("Datos enviados a Google Sheets con éxito.");
      })
      .catch((error) => {
        // Atrapar errores, pero no detener el flujo principal
        console.error("Error al enviar datos a Google Sheets:", error);
      });

    return order;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

module.exports = {
  postFirstOrderController,
};
