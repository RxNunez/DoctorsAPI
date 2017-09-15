var apiKey = require('./../.env').apiKey;
var ApplicationModule = function() {

};

ApplicationModule.prototype.getData = function(inputName, inputIssue, displayData) {
$.ajax({
  url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${inputName}&query=${inputIssue}&location=45.5231%2C%20122.6765%2C50&user_location=45.5231%2C%20122.6765&skip=0&limit=5&user_key=bf6b1a1b1d604ef7453c206ae9aa0101`,
  type: 'GET',
  data: {
    format: 'json'
  },
  success: function(response) {
      displayData(response);

  },
  error: function() {
    console.log("failure");
    $('.errors').text("There was an error processing your request. Please try again.");
  }
});
};

exports.applicationModule = ApplicationModule;
