const axios = require("axios");

const getAgenciesHandler = async (req, res) => {
  const { postalCodeDestination, token } = req.body;

  try {
    // Solicitud a la API de Correo Argentino para obtener las agencias
    const response = await axios.get(
      `https://api.correoargentino.com.ar/micorreo/v1/agencies?postalCode=${postalCodeDestination}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Enviamos la respuesta de las agencias al front-end
    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener las agencias de Correo Argentino:", error);
    res.status(500).json({ message: "Error al obtener las agencias" });
  }
};

module.exports = {
  getAgenciesHandler
};
