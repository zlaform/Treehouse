const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess = prompt('Please Guess a number from 1 to 10:');
let attempts = 0;
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number

console.log(randomNumber);
while (guess != randomNumber){
  guess = prompt('Sorry that was incorrect please try again:');
  attempts ++;
}

main.innerHTML = `Congrats you guessed ${guess} and it was ${randomNumber}. Only took you ${attempts} time[s]`;
