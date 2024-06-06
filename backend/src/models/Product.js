const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    compare_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_cat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sizes: {
      type: DataTypes.JSON,
      allowNull: true, 
      defaultValue: [] 
    },
    variants: {
      type: DataTypes.JSON,
      allowNull: true, 
      defaultValue: [] 
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    badge: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    image: {
      type: DataTypes.STRING(2080),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(2080),
      allowNull: true,
    },
    best_sellers: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    new_arrivals: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    special_offers: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    shipping_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    discount_tag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    discount_percentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    total_sales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });
};
