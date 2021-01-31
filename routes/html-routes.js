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
  app.get("/orders1", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index1.html"));
  });

  app.get("/expedientes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/expediente-manager.html"));
  });

  app.get("/solicitudes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/solicitudes.html"));
  });

  app.get("/orders", function(req, res){
    res.sendFile(path.join(__dirname, "../public/orders.html"))
  });
  
};
