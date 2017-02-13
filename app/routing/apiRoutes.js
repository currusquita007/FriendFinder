// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // This will be require for the API Friend List button
  app.get("api/all", function(req, res) {

    var dbQuery = "SELECT * FROM surveyAnswers";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

  // Add a user
  app.post("api/survey", function(req, res) {

    console.log("User data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO surveyAnswers (name, photo, scores) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.name, req.body.photo, req.body.scores], function(err, result) {
      console.log("User Successfully Saved!");
      res.end();
    });

  });

};