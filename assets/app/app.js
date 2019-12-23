const config = {
  apiKey: "AIzaSyCcPFcbAjIsgXGQwE-A3AcOXkeD40qypE8",
  authDomain: "train-times-93583.firebaseapp.com",
  databaseURL: "https://train-times-93583.firebaseio.com",
  storageBucket: "train-times-93583.appspot.com"
};

firebase.initializeApp(config);

const trainData = firebase.database();

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  const trainName = $("#train-name-input")
    .val()
    .trim();
  const destination = $("#destination-input")
    .val()
    .trim();
  const firstTrain = $("#first-train-input")
    .val()
    .trim();
  const frequency = $("#frequency-input")
    .val()
    .trim();

  const newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  trainData.ref().push(newTrain);

  alert("Train successfully added");

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  const tName = childSnapshot.val().name;
  const tDestination = childSnapshot.val().destination;
  const tFrequency = childSnapshot.val().frequency;
  const tFirstTrain = childSnapshot.val().firstTrain;

  const timeArr = tFirstTrain.split(":");
  const trainTime = moment()
    .hours(timeArr[0])
    .minutes(timeArr[1]);
  const maxMoment = moment.max(moment(), trainTime);
  const tMinutes;
  const tArrival;

});
