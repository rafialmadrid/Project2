/*var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("index2", {});
});


router.get("/Nueva", function(req, res) {
console.log(req.params.id);
  res.render("index", {});
});


router.get("/Existente", function(req, res) {
  res.render("index3", {});
});

router.get("/Busqueda", function(req, res) {
  res.render("index4", {});
});



module.exports = router;*/



// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index2", {});
  });

  app.get("/nueva/:id?", function(req, res) {
    //res.sendFile(path.join(__dirname, "../views/index1.handlebars"));
    res.render("index");
  });

  app.get("/existente", function(req, res) {
    //res.sendFile(path.join(__dirname, "../views/index3.handlebars"));
    res.render("index3", {});
  });

  app.get("/busqueda", function(req, res) {
    //res.sendFile(path.join(__dirname, "../views/index4.handlebars"));
    res.render("index4", {});
  });

};
