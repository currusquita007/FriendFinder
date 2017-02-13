// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


module.exports = function(app) {

  // Index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });

    // Index route loads survey.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/survey.html"));
  });

};