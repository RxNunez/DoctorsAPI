var ApplicationModule = require('./../js/doctor.js').applicationModule;

var displayData = function(response) {
  // results.forEach(function(result) {
let index = 0;
console.log(Array.isArray(response.data));
let doctorData = response.data;
for(let index in doctorData){
  console.log(response.data[index].profile);
  $('ul#solutions').append(`<li>Name: ${response.data[index].profile} <br> Web: ${response.data[index].media.url} <br> Address:${response.data[index].practices.visit_address}</li>`);
  index++;
   }
};
$(document).ready(function(){
  var applicationModule = new ApplicationModule();
  $("#doctor").click(function(evt){
    evt.preventDefault();
    evt.stopImmediatePropagation();
    evt.stopPropagation();

    let inputName = $("#name").val();
    let inputIssue = $("#issue").val();
    applicationModule.getData(inputName, inputIssue, displayData);
 });
});
