module.exports = function(sequelize, DataTypes) {
  var Expediente = sequelize.define("Expediente", {
    // Giving the Author model a name of type STRING
    nombre: DataTypes.STRING
  });

  Expediente.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Expediente.hasMany(models.Solicitud, {
      onDelete: "cascade"
    });
  };

  return Expediente;
};
