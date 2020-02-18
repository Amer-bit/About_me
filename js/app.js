'use strict'


var clientName = prompt('hey, I would like to know your name');
console.log(clientName);

alert('Welcome ' + clientName + ' in this page which made for adventurous');
/*do you like traveling to space
  do you like climbing mountains
  do you like skydiving
  do you like diving deep in the sea */
var spaceTravelingQuestion;
spaceTravelingQuestion = prompt('Am I a space man').toUpperCase();
console.log(spaceTravelingQuestion);
if (spaceTravelingQuestion === 'YES' || spaceTravelingQuestion === 'Y') {
  alert('No but i would like to be one');
}
else if (spaceTravelingQuestion == 'NO' || spaceTravelingQuestion === 'N') {
  alert('That\'s correct this is sad i wanted to try the 0 GForce feeling');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}

var climbingMountaingQuestion = prompt('Do i love Mountain Climbing').toUpperCase();
console.log(climbingMountaingQuestion);
if (climbingMountaingQuestion === 'YES' || climbingMountaingQuestion === 'Y') {
  alert('Hell Yeah');
}
else if (climbingMountaingQuestion === 'NO' || climbingMountaingQuestion === 'N') {
  alert('Im not a puss dude');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}

var skydivingQuestion = prompt('Am i a Skydiver').toUpperCase();
console.log(skydivingQuestion);
if (skydivingQuestion === 'YES' || skydivingQuestion === 'Y') {
  alert('Yes i dreamed about Skydiving and this count');
}
else if (skydivingQuestion === 'NO' || skydivingQuestion === 'N') {
  alert('You are wrong OBVIOUSLY');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}

var mountainBiking = prompt('Is Mountain Biking my favourrite sport').toUpperCase();
console.log(mountainClimbing);
if(mountainBiking ==='Y' || mountainBiking === 'YES'){
prompt('Hell Yeah');
}
else if(mountainBiking ==='NO' || mountainBiking ==='N')
{
  prompt('You are wrong Bruh');
}
else{
  alert('Please submit one of the following: y/n or yes/no');
}


var seaDiving = prompt('Do i like Seadiving').toUpperCase();
console.log(seaDiving);
console.log(typeof seaDiving);
if (seaDiving === 'YES' || seaDiving === 'Y') {
  alert('You are correct Damn do you know me Bruh');
}
else if (seaDiving === 'NO' || seaDiving === 'N') {
  alert('No thats wrong');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}







// while (spaceTravelingQuestion !== 'yes' || spaceTravelingQuestion !== 'y' || spaceTravelingQuestion !== 'no' || spaceTravelingQuestion !== 'n')
//     alert('Please type yes/no or y/n');


// while ((spaceTravelingQuestion = 'yes' || spaceTravelingQuestion == 'y') && (spaceTravelingQuestion != 'no' || spaceTravelingQuestion != 'n'))
// {alert('Please type yes/no or y/n');
// spaceTravelingQuestion = prompt('Do you like traveling to space');}
//while ((spaceTravelingQuestion !== 'y' || spaceTravelingQuestion !== 'n') || (spaceTravelingQuestion !== 'yes' || spaceTravelingQuestion !== 'no')) {
  // alert("please enter yes/no or y/n");
  // spaceTravelingQuestion = prompt('dp');
  // }

