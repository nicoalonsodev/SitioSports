const getRatesHandler = async (req, res) => {
    const { postalCodeDestination, dimensions, deliveredType, token } = req.body;
  
    try {
  
      const response = await axios.post(
        "https://api.correoargentino.com.ar/micorreo/v1/rates",
        { customerId: "0001374226", postalCodeOrigin: "4107", postalCodeDestination, dimensions, deliveredType },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      res.json(response.data);
    } catch (error) {
      console.error("Error al obtener las tarifas de Correo Argentino:", error);
      res.status(500).json({ message: "Error al obtener las tarifas" });
    }
  };
  
module.exports = {
    getRatesHandler,
  };