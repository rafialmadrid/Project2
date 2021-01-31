module.exports = function(sequelize, DataTypes) {
  var Solicitud = sequelize.define("Solicitud", {
      
    tipo: {
      type: DataTypes.STRING,
    },
    total_estudios: DataTypes.STRING, 
    descuento: DataTypes.STRING,
    iva: DataTypes.STRING,
    subtotal: DataTypes.STRING,
    impuesto: DataTypes.STRING,
    total: DataTypes.STRING,
    cargo: DataTypes.STRING,
    observaciones_solicitud: DataTypes.STRING,
    sucursal: { //FK
      type: DataTypes.STRING,
    },

    //status: DataTypes.STRING,
    //expediente: FK
    /*fecha_inicio:
    hora_inicio:
    usuario_inicio:
    fecha_solicitud:
    hora_solicitud:
    usuario_solicitud:
    terminal_solicitud:
    clave_procedencia: DataTypes.STRING,
    procedencia: DataTypes.STRING,
    clave_compania:DataTypes.STRING,
    compania: DataTypes.STRING,
    lista: DataTypes.STRING,*/
    /*descuento_tipo: DataTypes.STRING,
    descuentop: DataTypes.DOUBLE,
    decuentoc: DataTypes.DOUBLE,*/
    /*registro:
    registror:*/
    /*cargo_tipo: DataTypes.DOUBLE,  
    cargop: DataTypes.DOUBLE,
    cargoc: DataTypes.DOUBLE, */
    /*tipo_convenio: DataTypes.STRING,*/
    //medico: DataTypes.STRING,
    //medico_clave: DataTypes.STRING, //FK
    //tipo_solicitud: DataTypes.STRING,

  });

  Solicitud.associate = function(models) {
    // We're saying that a Solicitud should belong to an Expediente
    // A Solicitud can't be created without an Expediente due to the foreign key constraint
    Solicitud.belongsTo(models.Expediente, {
      
    });

    Solicitud.hasMany(models.Estudio,{

    });

    /*Solicitud.hasMany(models.Resultado, {

    });*/
    
  };

  return Solicitud;
};
