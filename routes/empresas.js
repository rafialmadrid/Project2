var db = require("../models");

module.exports = function(app) {
  app.get("/api/empresas", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Empresa.findAll({}).then(function(dbEmpresas) {
      res.json(dbEmpresas);
    });
  });

  app.get("/api/empresas/:id", function(req, res) {
    
    db.Empresa.findOne({
      where: {
        clave: req.params.id
      }
    }).then(function(dbEmpresas) {
      res.json(dbEmpresas);
    });
  });

  app.post("/api/empresas", function(req, res) {
    db.Empresa.create(req.body).then(function(dbEmpresas) {
      console.log(req.body);
      res.json(dbEmpresas);
    });
  });

  app.delete("/api/empresas/:id", function(req, res) {
    db.Empresa.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmpresas) {
      res.json(dbEmpresas);
    });
  });

};
