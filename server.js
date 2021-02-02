// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

var routes = require("./routes/html-routes.js");

app.use(routes);


require("./routes/expediente-api-routes.js")(app);
require("./routes/solicitudes-api-routes.js")(app);

require("./routes/catalogo-estudios-api-routes.js")(app);
require("./routes/catalogo-precios-api-routes.js")(app);
require("./routes/estudio-precio-api-routes.js")(app);
require("./routes/catalogo-estudios-grupos-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});