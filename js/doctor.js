var apiKey = require('./../.env').apiKey;
var ApplicationModule = function() {
};
ApplicationModule.prototype.getData = function(inputIssue, displayData) {
$.ajax({
  url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputIssue}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`,
  type: 'GET',
  data: {
    format: 'json'
  },
  success: function(response) {
    // if (response.data.length != 0) {
            displayData(response);
          // } else {
          //   searchError("Medical issue not found. Please try again.");
          // }

  },
  error: function() {
    console.log("failure");
    $('.errors').text("There was an error processing your request. Please try again.");
  }
});
};
// ApplicationModule.prototype.getName = function(inputName, displayData){
//    $.ajax({
//      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${inputName}&location=45.5231%2C%20122.6765%2C50&user_location=45.5231%2C%20122.6765&skip=0&limit=5&user_key=bf6b1a1b1d604ef7453c206ae9aa0101`,
//      type: 'GET',
//      data: {
//        format: 'json'
//      },
//      success: function(response) {
//       //  if (response.data.length != 0) {
//           displayData(response);
//         // } else {
//         //   nameError("No doctors found with that name. Please try again.");
//         // }
//      },
//      error: function() {
//        console.log("failure");
//        $('.errors').text("There was an error processing your request. Please try again.");
//      }
//    });
//
//  };

exports.applicationModule = ApplicationModule;
