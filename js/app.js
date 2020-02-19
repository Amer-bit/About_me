'use strict'
// rightAnswer var is for counting the right answers
var rightAnswer = 0;
var clientName = prompt('hey, I would like to know your name');
console.log(clientName);

alert('Welcome ' + clientName + ' in this page which made for adventurous');
/*do you like traveling to space
  do you like climbing mountains
  do you like skydiving
  do you like diving deep in the sea */
function guessingGame1(){
//Question 1
var spaceTravelingQuestion;
spaceTravelingQuestion = prompt('Am I a space man').toUpperCase();
console.log(spaceTravelingQuestion);
if (spaceTravelingQuestion === 'YES' || spaceTravelingQuestion === 'Y') {
  alert('No but i would like to be one');
}
else if (spaceTravelingQuestion == 'NO' || spaceTravelingQuestion === 'N') {
  alert('That\'s correct this is sad i wanted to try the 0 GForce feeling');
  rightAnswer++;
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}
//Question 2
var climbingMountaingQuestion = prompt('Do i love Mountain Climbing').toUpperCase();
console.log(climbingMountaingQuestion);
if (climbingMountaingQuestion === 'YES' || climbingMountaingQuestion === 'Y') {
  alert('Hell Yeah');
  rightAnswer++;
}
else if (climbingMountaingQuestion === 'NO' || climbingMountaingQuestion === 'N') {
  alert('Im not a puss dude');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}
//Question 3
var skydivingQuestion = prompt('Am i a Skydiver').toUpperCase();
console.log(skydivingQuestion);
if (skydivingQuestion === 'YES' || skydivingQuestion === 'Y') {
  alert('Yes i dreamed about Skydiving and this count');
  rightAnswer++;
}
else if (skydivingQuestion === 'NO' || skydivingQuestion === 'N') {
  alert('You are wrong OBVIOUSLY');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}
//Question 4
var mountainBiking = prompt('Is Mountain Biking my favourrite sport').toUpperCase();
console.log(mountainBiking);
if (mountainBiking === 'Y' || mountainBiking === 'YES') {
  alert('That\'s Correct !!');
  rightAnswer++;
}
else if (mountainBiking === 'NO' || mountainBiking === 'N') {
  prompt('You are wrong Bruh');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}

//Question 5
var seaDiving = prompt('Do i like Seadiving').toUpperCase();
console.log(seaDiving);
console.log(typeof seaDiving);
if (seaDiving === 'YES' || seaDiving === 'Y') {
  alert('You are correct Daaaamn. Do you know me Bruh');
  rightAnswer++;
}
else if (seaDiving === 'NO' || seaDiving === 'N') {
  alert('No thats wrong');
}
else {
  alert('Please submit one of the following: y/n or yes/no');
}}
//Added two new Questions for lab03 and the 8th one uses array function
function Guessinggame2(){
//Qusetion 6
var correctGuess = 8;
var guessAnumber = prompt('Guess a number between 0 and 10');
var i;
for (i = 0; i < 3; i++) {
  if (guessAnumber == correctGuess) {
    alert('You\'ve guessed Right');
    rightAnswer++;
    break;
  }
  else if (guessAnumber < correctGuess) {
    alert('Your answer is on the low side');
    guessAnumber = prompt('Guess a number between 0 and 10');
  }
  else {
    alert('your answer is on the high side');
    guessAnumber = prompt('Guess a number between 0 and 10');
  }
  
}

//Question 7
var favGame = ['ori', 'hollow knight', 'battlefield1', 'rainbow six siege', 'tombraider']
var maincounter;
var counter;
alert('Now guess my favourite game');
var guessAgame = prompt('Guess one of my favorite game').toLowerCase();

for (maincounter = 0; maincounter < 5; maincounter++) {

  for (counter = 0; counter < favGame.length; counter++) {

    if (guessAgame === favGame[counter]) {
      alert('this is the right answer');
      break;
    }

  }
  if (guessAgame === favGame[counter]) {
    rightAnswer++;
    break;
w
  }
  else {
    alert('Not one of my favourite games');
    guessAgame = prompt('Guess one of my favorite game').toLowerCase();

  }
}
}
guessingGame1();
Guessinggame2(); 

alert('These are my favourite games ' + JSON.stringify(favGame));

alert(rightAnswer + ' Right answer out of Seven total That\'s Cool ;)');