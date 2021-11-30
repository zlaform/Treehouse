//variables
const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess = prompt('Please Guess a number from 1 to 10:');
let attempts = 0;
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
//This loop will check to see if the number that was entered is the same as the
//random number.  

console.log(randomNumber);
while (guess != randomNumber){
  guess = prompt('Sorry that was incorrect please try again:');
  attempts ++;
}

main.innerHTML = `Congrats you guessed ${guess} and it was ${randomNumber}. Only took you ${attempts} time[s]`;
