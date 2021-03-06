var apiKey = require('./../.env').apiKey;
var ApplicationModule = function() {
};
ApplicationModule.prototype.getData = function(inputIssue, displayData) {
$.ajax({
  url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputIssue}&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`,
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
