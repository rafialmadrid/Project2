module.exports = function(sequelize, DataTypes) {
  var catalogoPrecio = sequelize.define("catalogoPrecio", {
    clave: {
      type: DataTypes.STRING,
    },
    total: {
      type: DataTypes.DOUBLE
    }
  });

    catalogoPrecio.associate = function(models) {
    // We're saying that a Solicitud should belong to an Expediente
    // A Solicitud can't be created without an Expediente due to the foreign key constraint
    catalogoPrecio.belongsTo(models.catalogoEstudio, {
      // foreignKey: "clave",
      targetKey: "clave"
    });
  };

  return catalogoPrecio;
};
