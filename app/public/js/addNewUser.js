// Code here handles what happens when a user submits a new user on the form.
// Takes form inputs and store them in the database

// when user clicks add-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  //store the results of the answers of the user

  var answers = [];

  // for (i=1; i<11; i++) {}

 var st1 = document.getElementById("statement1");
 var value1 = st1.options[st1.selectedIndex].value;

  var st2 = document.getElementById("statement1");
 var value2 = st2.options[st2.selectedIndex].value;

  var st3 = document.getElementById("statement1");
 var value3 = st3.options[st3.selectedIndex].value;

  var st4 = document.getElementById("statement1");
 var value4 = st4.options[st4.selectedIndex].value;

  var st5 = document.getElementById("statement1");
 var value5 = st5.options[st5.selectedIndex].value;

  var st6 = document.getElementById("statement1");
 var value6 = st6.options[st6.selectedIndex].value;

  var st7 = document.getElementById("statement1");
 var value7 = st7.options[st7.selectedIndex].value;

  var st8 = document.getElementById("statement1");
 var value8 = st8.options[st8.selectedIndex].value;

   var st9 = document.getElementById("statement1");
 var value9 = st9.options[st9.selectedIndex].value;

   var st10 = document.getElementById("statement1");
 var value10 = st10.options[st10.selectedIndex].value;

 answers = [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10];

 console.log(answers);


  // make a user obj
  var newUser = {
    // name from name input
    name: $("#name").val().trim(),
    // picture from picture url request
    photo: $("#picture").val().trim(),
    // scores from survey input
    scores: answers,
  };

 console.log(newUser);

  // send an AJAX POST-request with jQuery
  $.post("api/new", newUser)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding user...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#picture").val("");

});