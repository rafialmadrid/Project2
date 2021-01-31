module.exports = function(sequelize, DataTypes) {
  var Estudio = sequelize.define("Estudio", {
  
      fecha_entrega: DataTypes.DATEONLY, 

      //precio: DataTypes.DOUBLE, FROM catalogo_precios
      //dias: DataTypes.INTEGER, FROM catalogo_estudios
      //area: DataTypes.STRING, FROM catalogo_areas
      //departamento: DataTypes.STRING FROM catalogo_estudios
      //hora_entrega: DataTypes.DATE, 


  });

  Estudio.associate = function(models) {
    // We're saying that an Estudio should belong to a Solicitud
    // An Estudio can't be created without an Solicitud due to the foreign key constraint
    Estudio.belongsTo(models.Solicitud, {

    });

    Estudio.belongsTo(models.catalogoEstudio,{

    });

    Estudio.hasMany(models.Resultado,{

    });

  };

  return Estudio;
};
