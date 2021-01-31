module.exports = function(sequelize, DataTypes) {
  var catalogoEstudiosGrupo = sequelize.define("catalogoEstudiosGrupo", {
    clave: {
      type: DataTypes.STRING,
    },

    parametro: {
      type: DataTypes.STRING,
    }
    
    
  });

  
    catalogoEstudiosGrupo.associate = function(models) {
    
    catalogoEstudiosGrupo.belongsTo(models.catalogoEstudio, {
      onDelete: "cascade"
    });

    catalogoEstudiosGrupo.hasMany(models.Resultado, {
      onDelete: "cascade"
    });

  };

  return catalogoEstudiosGrupo;
};
