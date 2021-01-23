var db = require("../models");

module.exports = function(app) {
  app.get("/api/catalogoestudios", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.catalogoEstudio.findAll({}).then(function(dbCatalogoEstudios) {
      res.json(dbCatalogoEstudios);
    });
  });

  app.get("/api/catalogoestudios/:clave", function(req, res) {
    
    db.catalogoEstudio.findOne({
      where: {
        clave: req.params.clave
      }
    }).then(function(dbCatalogoEstudios) {
      res.json(dbCatalogoEstudios);
    });
  });

  app.post("/api/catalogoestudios", function(req, res) {
    db.catalogoEstudio.create(req.body).then(function(dbCatalogoEstudios) {
      console.log(req.body);
      res.json(dbCatalogoEstudios);
    });
  });

  app.delete("/api/catalogoestudios/:id", function(req, res) {
    db.catalogoEstudio.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCatalogoEstudios) {
      res.json(dbCatalogoEstudios);
    });
  });

};
