module.exports = function(sequelize, DataTypes) {
  var Expediente = sequelize.define("Expediente", {
    // Giving the Expediente model a name of type STRING
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    nacimiento: {
     type: DataTypes.DATEONLY, 
     //allowNull: false,
      validate: {
        len: [1]
      }
    },
    edad: DataTypes.INTEGER,
    sexo: {
     type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    cp: DataTypes.STRING,
    rfc: DataTypes.STRING,
    razon_social: DataTypes.STRING,
    domicilio: DataTypes.STRING,

    /*fecha_registro: DataTypes.DATEONLY,
    hora_registro:DataTypes.DATEONLY,
    usuario_registro: DataTypes.STRING,
    terminal_registro: DataTypes.STRING,
    status: DataTypes.STRING,*/

  });

  Expediente.associate = function(models) {
    // Associating Expediente with Solicitudes
    // When an Expediente is deleted, also delete any associated Solicitudes
    Expediente.hasMany(models.Solicitud, {
      onDelete: "cascade"
    });
  };

  return Expediente;
};
