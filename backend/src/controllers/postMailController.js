require("dotenv").config();

const mailController = (destinatarios, asunto, cuerpo) => {
  // Convertir la lista de destinatarios a una cadena separada por comas
  const destinatarioString = Array.isArray(destinatarios) ? destinatarios.join(',') : destinatarios;

  // Configurar el correo electrónico
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: destinatarioString,
    subject: asunto,
    html: cuerpo,
  };
  return mailOptions;
};

module.exports = {
  mailController,
};
