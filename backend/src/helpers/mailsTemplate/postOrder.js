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

   .account-info, .shipping-info, .order-details {
        background-color: #f4f4f430; 
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-top: 20px;
    }

    .account-info p, .shipping-info p, .order-details p {
        margin: 5px 0;
    }

    .order-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
    }

    .order-item img {
        max-width: 100px;
        border-radius: 4px;
        margin-right: 20px; /* Añade margen derecho para separar la imagen del div */
    }

    .product-details {
        flex: 1; /* Asegura que el div ocupe el espacio restante */
    }
</style>
</head>
<body>
    <div class="container">
        <img src="https://res.cloudinary.com/de2r6mtda/image/upload/v1722537197/Sitio/logoTransparent_qgzoo5.png" alt="Logo de la empresa" class="logo">
        <h2>Su transacción ha sido exitosa</h2>
        <p>Gracias por su compra. Su pago ha sido confirmado y su orden está en proceso.</p>
        <div class="shipping-info">
            <p><strong>Nombre completo:</strong> %CUSTOMER_NAME%</p>
            <p><strong>Dirección:</strong> %CUSTOMER_ADDRESS%</p>
            <p><strong>Piso:</strong> %CUSTOMER_FLOOR%</p>
            <p><strong>Depto:</strong> %CUSTOMER_APT%</p>
        </div>
        <div class="order-details">
            <h3>Detalle de la orden</h3>
            %ORDER_ITEMS%
            <p><strong>Subtotal:</strong> %ORDER_SUBTOTAL%</p>
            <p><strong>Envío:</strong> %ORDER_SHIPPING_COST%</p>
            <p><strong>Total:</strong> %ORDER_TOTAL%</p>
        </div>
        <p>Si tiene alguna consulta o necesita más información, no dude en comunicarse con nuestro equipo de atención al cliente respondiendo a esta direccion de correo o a nuestro whatsapp <a href="https://wa.me/+5493812097082">haciendo click aqui</a>.</p>
        <p>Atentamente,</p>
        <p>El equipo de Sitio Sports</p>
        <p>© 2024 Sitio Sports S.A.S  </p>      
    </div>
</body>
</html>
`;

module.exports = orderTemplate;
