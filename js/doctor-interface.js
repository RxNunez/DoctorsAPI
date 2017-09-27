var ApplicationModule = require('./../js/doctor.js').applicationModule;
let applicationModule = new ApplicationModule();
let displayData = function(response) {

let index = 0;
console.log((response.data));
let doctorData = response.data;
if(response.data.length === 0){
  $('#retry').append("Search request not found. Please try again.");
} else {
for(let index in doctorData){
  console.log(response.data[index].practices);
  // let name = doctorData[index].profile.name;
  let lastName = doctorData[index].profile.last_name;
  let firstName = doctorData[index].profile.first_name;
  let title = doctorData[index].profile.title;
  let street = doctorData[index].practices[0].visit_address.street;
  let city = doctorData[index].practices[0].visit_address.city;
  let state = doctorData[index].practices[0].visit_address.state;
  let zip = doctorData[index].practices[0].visit_address.zip;
  let phoneNumber = doctorData[index].practices[0].phones[0].number;
  let accepting= doctorData[index].practices[0].accepts_new_patients;
    if(accepting === true){
      accepting = "Yes";
    } else {
      accepting = "No";
    }
  let website = doctorData[index].practices[0].website;
    if(website === undefined){
      website = "Not available";
    }   
       $('#solutions').append(`<li>Name: ${firstName} ${lastName}, ${title}  <br> ${street} <br> ${city}, ${state}, ${zip} <br> Phone: ${phoneNumber} <br> Accepting New Patients: ${accepting} <br> Website: ${website}</li>`);
  index++;
   }
  }
};

$(document).ready(function(){
  $("#doctor").click(function(evt){
    evt.preventDefault();
    evt.stopImmediatePropagation();
    evt.stopPropagation();

    let inputIssue = $("#issue").val();
    $("#issue").val("");
    $("#retry").empty();
    $("#solutions").empty();
    applicationModule.getData(inputIssue, displayData);
   });
});
