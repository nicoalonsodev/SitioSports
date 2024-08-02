const orderTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notificación de Orden</title>
    <style>
    /* Estilos CSS */
    body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
        color: #333333; /* Cambia el color del texto a gris oscuro */
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    h2, p {
        color: #333333; /* Cambia el color del texto a gris oscuro */
    }

    .button {
        display: inline-block;
        background-color: #007bff;
        color: #ffffff;
        padding: 10px 20px;
        border-radius: 4px;
        text-decoration: none;
    }

    .button:hover {
        background-color: #0056b3;
        color: #ffffff;
    }

    .logo {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100px;
    }
</style>
</head>
<body>
    <div class="container">
        <img src="https://res.cloudinary.com/de2r6mtda/image/upload/v1722537197/Sitio/logoTransparent_qgzoo5.png" alt="Logo de la empresa" class="logo">
        <h2>Su orden ha sido %STATUS%. Tu código de seguimiento es: %TRACK_ID%</h2>
        <p>Si tiene alguna consulta o necesita más información, no dude en comunicarse con nuestro equipo de atención al cliente respondiendo a esta direccion de correo o a nuestro whatsapp <a href="https://wa.me/+5493813624693">haciendo click aqui</a> .</p>
        <p>Atentamente,</p>
        <p>El equipo de Sitio Sports</p>
        <p>© 2024 Sitio Sports S.A.S</p>
    </div>
</body>
</html>
`;

module.exports = orderTemplate;