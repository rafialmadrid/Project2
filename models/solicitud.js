module.exports = function(sequelize, DataTypes) {
  var Solicitud = sequelize.define("Solicitud", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Solicitud.associate = function(models) {
    // We're saying that a Solicitud should belong to an Expediente
    // A Solicitud can't be created without an Expediente due to the foreign key constraint
    Solicitud.belongsTo(models.Expediente, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Solicitud;
};
