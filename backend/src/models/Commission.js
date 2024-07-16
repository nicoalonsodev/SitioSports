const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Commission", {
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
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
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
  });
};
