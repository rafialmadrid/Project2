var db = require("../models");

module.exports = function(app) {
  app.get("/api/catalogoprecios", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.catalogoPrecio.findAll({}).then(function(dbCatalogoPrecios) {
      res.json(dbCatalogoPrecios);
    });
  });

  app.get("/api/catalogoprecios/:id", function(req, res) {
    
    db.catalogoPrecio.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCatalogoPrecios) {
      res.json(dbCatalogoPrecios);
    });
  });

  app.post("/api/catalogoprecios", function(req, res) {
    db.catalogoPrecio.create(req.body).then(function(dbCatalogoPrecios) {
      console.log(req.body);
      res.json(dbCatalogoPrecios);
    });
  });

  app.delete("/api/catalogoprecios/:id", function(req, res) {
    db.catalogoPrecio.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCatalogoPrecios) {
      res.json(dbCatalogoPrecios);
    });
  });

};
