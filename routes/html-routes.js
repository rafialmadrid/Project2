var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("index2", {});
});


router.get("/Nueva/:id", function(req, res) {
  res.render("index", {});
});


router.get("/Existente", function(req, res) {
  res.render("index3", {});
});

router.get("/Busqueda", function(req, res) {
  res.render("index4", {});
});



module.exports = router;