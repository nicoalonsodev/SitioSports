const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    order_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    items: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    client_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    shipment: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {},
    },
    order_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    status_detail: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    payerMp: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {},
    },
    payment_method: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {},
    },

    payment_method_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    payment_type_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    shipping_amount: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    transaction_amount: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    transaction_details: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {},
    },
    admin_comment: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    track_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    Shipping_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
  });
};
