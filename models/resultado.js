module.exports = function(sequelize, DataTypes) {
  var Resultado = sequelize.define("Resultado", {
    
      valor: DataTypes.DOUBLE,
      texto: DataTypes.STRING,
      unidades: DataTypes.STRING
  });

  Resultado.associate = function(models) {
    // We're saying that an Estudio should belong to a Solicitud
    // An Estudio can't be created without an Solicitud due to the foreign key constraint
    Resultado.belongsTo(models.Estudio,{
      
    });

    Resultado.belongsTo(models.catalogoEstudio,{

    });

    Resultado.belongsTo(models.catalogoEstudiosGrupo,{

    });


  };

  return Resultado;
};
