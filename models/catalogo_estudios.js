module.exports = function(sequelize, DataTypes) {
  var catalogoEstudio = sequelize.define("catalogoEstudio", {
    clave: {
      type: DataTypes.STRING,
      //allowNull: false,
      
    },
    nombre: {
      type: DataTypes.STRING,
      //allowNull: false,
      
    },
    area: DataTypes.STRING,
    dias: DataTypes.INTEGER,
    unidades: DataTypes.STRING

    //departamento: DataTypes.STRING,
  });

  catalogoEstudio.associate = function(models) {
    // Associating Expediente with Solicitudes
    // When an Expediente is deleted, also delete any associated Solicitudes
    catalogoEstudio.hasMany(models.Estudio, {
      onDelete: "cascade"
    });
  };

  return catalogoEstudio;
};