const axios = require("axios");

const getAgenciesHandler = async (req, res) => {
  const { postalCodeDestination, token, provinceCode } = req.body;

  try {
    const response = await axios.get(
      `https://api.correoargentino.com.ar/micorreo/v1/agencies?customerId=0000550997&provinceCode=${provinceCode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ agencies: response.data });
  } catch (error) {
    console.error("Error al obtener las agencias de Correo Argentino:", error);
    res.status(500).json({ message: "Error al obtener las agencias" });
  }
};

module.exports = { getAgenciesHandler };
