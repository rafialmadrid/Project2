var db = require("../models");

module.exports = function(app) {
  
  
  app.get("/api/estudioprecio/:clave", function(req, res) {
    
    db.catalogoEstudio.findOne({
      where: {
        clave: req.params.clave
      },
      include: db.catalogoPrecio
    }).then(function(dbCatalogoEstudios) {
      res.json(dbCatalogoEstudios);
    });
  });

};
