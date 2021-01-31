var db = require("../models");

module.exports = function(app) {
  app.get("/api/catalogoestudiosgrupos", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.catalogoEstudiosGrupo.findAll({}).then(function(dbCatalogoEstudiosGrupo) {
      res.json(dbCatalogoEstudiosGrupo);
    });
  });

  app.get("/api/catalogoestudiosgrupos/:id", function(req, res) {
    
    db.catalogoEstudiosGrupo.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCatalogoEstudiosGrupo) {
      res.json(dbCatalogoEstudiosGrupo);
    });
  });

  app.post("/api/catalogoestudiosgrupos", function(req, res) {
    db.catalogoEstudiosGrupo.create(req.body).then(function(dbCatalogoEstudiosGrupo) {
      console.log(req.body);
      res.json(dbCatalogoEstudiosGrupo);
    });
  });

  app.delete("/api/catalogoestudiosgrupos/:id", function(req, res) {
    db.catalogoEstudiosGrupo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCatalogoEstudiosGrupo) {
      res.json(dbCatalogoEstudiosGrupo);
    });
  });

};
