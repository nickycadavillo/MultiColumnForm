//pseudocode:
// for testing, add an alert event listener to check if targeting correct element

// declare variables for all input elements and use input event
// declare variables for all select (drop-down) elements and use change event
// declare variables for all textarea elemeents and use input event
// declare variable for the send your data button and use submit event

var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var phone = document.getElementById("number");
var pet = document.getElementById("dog");
var gadget = document.getElementById("gadget");
var favDrink = document.getElementById("drink");
var superPower = document.getElementById("power");
var weapon = document.getElementById("weapon");

var country = document.getElementById("countries");
var job = document.getElementById("occupations");
var talent = document.getElementById("talents");

var biography = document.getElementById("bio");
var affil = document.getElementById("affiliations");
var comment = document.getElementById("comments");

var submitData = document.getElementById("submit-form");

firstName.addEventListener('input', function(prevDefault) {
  //alert("Hi");
  prevDefault.preventDefault(); //don't submit form yet
  console.log(firstName.value);
});

lastName.addEventListener('input', function(prevDefault) {
  //alert("Hi");
  prevDefault.preventDefault(); //don't submit form yet
  console.log(lastName.value);
});

email.addEventListener('input', function(prevDefault) {
  //alert("Hi");
  prevDefault.preventDefault(); //don't submit form yet
  console.log(email.value);
});

phone.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(phone.value);
});

pet.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(pet.value);
});

gadget.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(gadget.value);
});

favDrink.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(favDrink.value);
});

superPower.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(superPower.value);
});

weapon.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(weapon.value);
});

bio.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(bio.value);
});

affil.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(affil.value);
});

comment.addEventListener('input', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(comment.value);
});

country.addEventListener('change', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(country.value);
});

job.addEventListener('change', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(job.value);
});

talent.addEventListener('change', function(prevDefault) {
  prevDefault.preventDefault(); //don't submit form yet
  console.log(talent.value);
});
