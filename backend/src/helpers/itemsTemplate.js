const itemTemplate = `
<div class="order-item">
    <img src="%PRODUCT_IMAGE_URL%" alt="Producto">
    <div>
        <p><strong>%PRODUCT_PRICE%</strong></p>
        <p><strong>%PRODUCT_NAME%</strong></p>
        <p>Color: %PRODUCT_COLOR%</p>
        <p>Talle: %PRODUCT_SIZE%</p>
    </div>
    
</div>
`;

module.exports = itemTemplate;