// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the solicitudes
  app.get("/api/solicitudes", function(req, res) {
    var query = {};
    if (req.query.expediente) {
      query.expediente = req.query.expediente;
    }
    // 1. Add a join here to include all of the Authors to these posts
    db.Solicitud.findAll({
      include: db.Expediente,    
      where: query
    }).then(function(dbSolicitud) {
      res.json(dbSolicitud);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/solicitudes/:id", function(req, res) {
    // 2. Add a join here to include the Expediente who made the Solicitud
    db.Solicitud.findOne({
      include: db.Expediente,
      where: {
        id: req.params.id
      }
    }).then(function(dbSolicitud) {
      console.log(dbSolicitud);
      res.json(dbSolicitud);
    });
  });

  // POST route for saving a new post
  app.post("/api/solicitudes", function(req, res) {
    db.Solicitud.create(req.body).then(function(dbSolicitud) {
      res.json(dbSolicitud);
    });
  });

  // DELETE route for deleting solicitudes
  app.delete("/api/solicitudes/:id", function(req, res) {
    db.Solicitud.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSolicitud) {
      res.json(dbSolicitud);
    });
  });

  // PUT route for updating solicitudes
  app.put("/api/solicitudes", function(req, res) {
    db.Solicitud.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbSolicitud) {
      res.json(dbSolicitud);
    });
  });
};
