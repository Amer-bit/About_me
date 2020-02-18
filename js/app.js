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
if (spaceTravelingQuestion === 'YES' || 'Y') {
  alert('No but i would like to be one');
}
else if (spaceTravelingQuestion === 'NO' || 'N') {
  alert('That\'s correct this is sad i wanted to try 0 GForce');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}

var climbingMountaingQuestion = prompt('Am i mountain climber').toUpperCase();
console.log(climbingMountaingQuestion);
if (climbingMountaingQuestion === 'YES' || 'Y') {
  alert('No this is too scary');
}
else if (climbingMountaingQuestion === 'NO' || 'N') {
  alert('You are right');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}

var skydivingQuestion = prompt('Am i a skydiver').toUpperCase();
console.log(skydivingQuestion);
if (skydivingQuestion === 'YES' || 'Y') {
  alert('Yes i dreamed about skydiving and this count');
} else if (skydivingQuestion === 'NO' || 'N') {
  alert('You are wrong OBVIOUSLY');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}

var seaDiving = prompt('Do i like sea diving');
seaDiving.toUpperCase();
console.log(seaDiving);
if (seaDiving === 'YES' || 'Y') {
  alert('You are correct Damn do you know me Bruh');
} else if (seaDiving === 'NO' || 'N') {
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

