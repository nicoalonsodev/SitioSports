const axios = require("axios");

const getRatesHandler = async (req, res) => {
  const { postalCodeDestination, dimensions, token } = req.body;

  try {
    // Hacemos ambas peticiones a la API de Correo Argentino en paralelo
    const [domicilioResponse, sucursalResponse] = await Promise.all([
      axios.post(
        "https://api.correoargentino.com.ar/micorreo/v1/rates",
        {
          customerId: "0001374226",
          postalCodeOrigin: "4107",
          postalCodeDestination,
          dimensions,
          deliveredType: "D", // Tipo de envío: Domicilio
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      ),
      axios.post(
        "https://api.correoargentino.com.ar/micorreo/v1/rates",
        {
          customerId: "0001374226",
          postalCodeOrigin: "4107",
          postalCodeDestination,
          dimensions,
          deliveredType: "S", // Tipo de envío: Sucursal
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      ),
    ]);

    // Combinamos los resultados en un solo objeto de respuesta
    const combinedRates = {
      domicilio: domicilioResponse.data.rates,
      sucursal: sucursalResponse.data.rates,
    };

    // Enviamos la respuesta combinada al front-end
    res.json(combinedRates);
  } catch (error) {
    console.error("Error al obtener las tarifas de Correo Argentino:", error);
    res.status(500).json({ message: "Error al obtener las tarifas" });
  }
};

module.exports = {
    getRatesHandler,
};
