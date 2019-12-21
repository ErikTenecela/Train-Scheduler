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
});
