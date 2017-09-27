var ApplicationModule = require('./../js/doctor.js').applicationModule;
let applicationModule = new ApplicationModule();
let displayData = function(response) {

let index = 0;
console.log((response.data));
let doctorData = response.data;
if(response.meta.length === 0){
  $('#retry').append("Search request not found. Please try again.");
} else {
for(let index in doctorData){
  console.log(response.data[index].profile);
  // let name = doctorData[index].profile.name;
  let lastName = doctorData[index].profile.last_name;
  let firstName = doctorData[index].profile.first_name;
  let title = doctorData[index].profile.title;
  let street;
  let city;
  let state;
  let zip;
  let phoneIndex = 0;
  let phoneData;
  let phoneNumber;
  let accepting;
  let website;
  let practiceIndex=0;
  let prac = data[index].practices;
for(let practiceIndex in prac){
       street = prac[practiceIndex].visit_address.street;
       city = prac[practiceIndex].visit_address.city;
       state = prac[practiceIndex].visit_address.state;
       zip = prac[practiceIndex].visit_address.zip;
       phoneNumber = prac[practiceIndex].phones.number;
       accepting = prac[practiceIndex].accepts_new_patients;
       if(accepting === true){
         accepting = "Yes";
       } else {
         accepting = "No";
       }
       $('#solutions').append(`<li>Name: ${firstName} ${lastName}, ${title}  <br> ${street} <br> ${city}, ${state}, ${zip} <br> ${phoneNumber} <br>Accepting New Patients: ${accepting}</li>`);
  index++;
   }
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
    applicationModule.getData(inputIssue, displayData);
   });
});
