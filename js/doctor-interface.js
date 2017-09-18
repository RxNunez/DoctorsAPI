var ApplicationModule = require('./../js/doctor.js').applicationModule;
let applicationModule = new ApplicationModule();
let displayData = function(response) {
  // results.forEach(function(result) {
let index = 0;
console.log(Array.isArray(response.data));
let doctorData = response.data;
for(let index in doctorData){
  console.log(response.data[index].profile);
  let Name = doctorData[index].profile.name;
  let title = doctorData[index].profile.title;
  let street;
  let city;
  let state;
  let zip;
  let phoneIndex = 0;
  let phoneData;
  let phoneNumber;
  let website;
  let practiceIndex=0;
  let prac = data[index].practices;
for(let pracIndex in prac){
       street = prac[pracIndex].visit_address.street;
       city = prac[pracIndex].visit_address.city;
       state = prac[pracIndex].visit_address.state;
       zip = prac[pracIndex].visit_address.zip;
       $('#solutions').append(`<li>Name: ${Name}, ${title}  <br> ${street} <br> ${city}, ${state},  <br> ${zip}</li>`);
  index++;
   }
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
    applicationModule.getData(inputIssue, issueError, displayData);
    applicationModule.getName(inputName, nameError, displayDocs);
 });
});
