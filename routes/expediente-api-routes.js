var db = require("../models");

module.exports = function(app) {
  app.get("/api/expedientes", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Expediente.findAll({include: db.Solicitud}).then(function(dbExpediente) {
      res.json(dbExpediente);
    });
  });

  app.get("/api/expedientes/:nombre", function(req, res){
    db.Expediente.findAll({
      where: {
        nombre: req.params.nombre
      }
    }).then(function(dbExpediente){
      res.json(dbExpediente);
    })
  });

  app.get("/api/expedientes/:id", function(req, res) {
    // 2; Add a join to include all of the Expedientes's Solicitudes here
    db.Expediente.findOne({
      where: {
        include: db.Solicitud, 
        id: req.params.id
      }
    }).then(function(dbExpediente) {
      res.json(dbExpediente);
    });
  });



    

  app.post("/api/expedientes", function(req, res) {
    
      solicituds=JSON.parse(req.body.Solicituds);

    db.Expediente.create({
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      edad: req.body.edad,
      sexo: req.body.sexo,
      Solicituds: solicituds
    },
      {
        include: [db.Solicitud] 
      })
    .then(function(dbExpediente) {
      res.json(dbExpediente);
    });
  });


  

  app.delete("/api/expedientes/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExpediente) {
      res.json(dbExpediente);
      console.log(dbExpediente);
    });
  });

};
