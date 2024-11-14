const axios = require('axios');

const getCorreoArgentinoToken = async (req, res) => {
  try {
    // const username = process.env.CORREO_ARGENTINO_USERNAME;
    // const password = process.env.CORREO_ARGENTINO_PASSWORD;

    // Codificar el username y password en base64 para la autenticación Basic
    const authToken = Buffer.from(`${process.env.CORREO_ARGENTINO_USERNAME}:${process.env.CORREO_ARGENTINO_PASSWORD}`).toString('base64');

    const response = await axios.post(
      'https://api.correoargentino.com.ar/micorreo/v1/token',
      {}, // Se envía un objeto vacío en el body
      {
        headers: {
          'Authorization': `Basic ${authToken}`
        }
      }
    );   

    const { token, expire } = response.data;

    // Devolver el token y la expiración como respuesta
    res.json({ token, expire });
  } catch (error) {
    console.error('Error al obtener el token de Correo Argentino:', error);
    res.status(500).json({ message: 'Error al obtener el token' });
  }
};

module.exports = {
  getCorreoArgentinoToken,
};
