function computerPlay() {
let one = 'Rock';
let two = 'Paper';
let three = 'Scissors';
randomNumber = Math.ceil(Math.random()*3);

if (randomNumber > 2) {
    return three;
}
else if (randomNumber > 1) {
    return two;
}
else if (randomNumber <= 1) {
    return one;
}
}
console.log(computerPlay())

// Picks either rock, paper or scissors for the computer