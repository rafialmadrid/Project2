module.exports = function(sequelize, DataTypes) {
  var Empresa = sequelize.define("empresa", {
    
    nombre: {
      type: DataTypes.STRING,
      
    },
  });

  
    Empresa.associate = function(models) {
    
    Empresa.hasMany(models.catalogoPrecio, {
      onDelete: "cascade"
    });
  };

  return Empresa;
};
