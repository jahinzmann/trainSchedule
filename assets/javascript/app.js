
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCEoU2DeTWr0pfS7LOs4Uxg4rrmXdr9jLY",
    authDomain: "trainschedule-d5443.firebaseapp.com",
    databaseURL: "https://trainschedule-d5443.firebaseio.com",
    projectId: "trainschedule-d5443",
    storageBucket: "",
    messagingSenderId: "226312768861"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();


   // database.ref().on("value", function(snapshot) {
//
   // }

$("#submit").on("click", function() {
  event.preventDefault();
  var name = $("#name").val()
  var destination = $("#destination").val()
  var times = $("#times").val()
  var frequency = $("#frequency").val()
  var newTrain = {name: name,
    destination: destination,
    times: times,
    frequency: frequency
  } 
  database.ref().push(newTrain)
})
