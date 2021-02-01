
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


var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {

    res.render("index2", {});

});

router.get("/Nueva", function(req, res) {

  res.render("index", {});

});

router.get("/Existente", function(req, res) {

  res.render("index3", {});

});

router.get("/Busqueda", function(req, res) {

  res.render("index4", {});

});



module.exports = router;


