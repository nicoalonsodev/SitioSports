const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Promotion", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    // Breve descripción de la promoción
    description: {
      type: DataTypes.STRING(2080),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(2080),
      allowNull: false,
      defaultValue: "",
    },
    img: {
      type: DataTypes.STRING(3080),
      allowNull: false,
      defaultValue: "",
    },

    // Tipo de promoción: "2x1", "3x2", "regalo", etc.
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Productos afectados por la promoción
    products: {
      type: DataTypes.ARRAY(DataTypes.JSONB), // Cada producto tiene un objeto con ID y nombre.
      allowNull: true,
      defaultValue: [],
    },

    // Categorías afectadas por la promoción
    categories: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Lista de IDs o nombres de categorías.
      allowNull: true,
      defaultValue: [],
    },
    
    subcategories: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Lista de IDs o nombres de categorías.
      allowNull: true,
      defaultValue: [],
    },
    giftCategories: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Lista de IDs o nombres de categorías.
      allowNull: true,
      defaultValue: [],
    },
    
    giftSubcategories: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Lista de IDs o nombres de categorías.
      allowNull: true,
      defaultValue: [],
    },

    // Productos de regalo (si aplica)
    gift: {
      type: DataTypes.JSONB, // Objeto con información del producto de regalo (e.g., { id, nombre }).
      allowNull: true,
      defaultValue: [],
    },

    // Registro de uso de la promoción
    usageRecord: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
      defaultValue: [],
    },

    // Estado de la promoción
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    // Fecha de fin de la promoción
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
};
