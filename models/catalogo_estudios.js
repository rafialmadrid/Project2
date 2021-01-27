module.exports = function(sequelize, DataTypes) {
  var catalogoEstudio = sequelize.define("catalogoEstudio", {
    clave: {
      type: DataTypes.STRING,
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
    
    catalogoEstudio.hasMany(models.catalogoPrecio, {
      onDelete: "cascade"
    });
  };

  return catalogoEstudio;
};
