// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
// =============================================================
app.use(express.static("app/public"));


// Routes
// =============================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// =============================================================


// add user into the database and his/her answers

//if you try to visit this in the browser, it will not work cause this is POST
app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newreservation = req.body;

    console.log(newreservation);

    // We then add the json the user sent to the character array
    characters.push(newreservation);

    // We then display the JSON to the users
    res.json(newreservation);
});


// retrieve information from the database

connection.query("SELECT * FROM newUser",function(err, res) {
    if (err) throw err;
    // If we log that user as a JSON, we can see how it looks.
    console.log(JSON.stringify(res, null, 2));
});


// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:reservation?", function(req, res) {
    var chosen = req.params.reservation;

    if (chosen) {
        console.log("we are here" + chosen);

        for (var i = 0; i < reservation.length; i++) {
            if (chosen === reservation[i].name) {
                res.json(reservation[i]);
                return;
            }
        }

        res.json(false);
    } else {
        res.json(reservation);
    }
});





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});