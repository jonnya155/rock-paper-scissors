function computerPlay() {
randomNumber = Math.ceil(Math.random()*3);

if (randomNumber > 2) {
    return 'Scissors';
}
else if (randomNumber > 1) {
    return 'Paper';
}
else if (randomNumber <= 1) {
    return 'Rock';
}
}

// Randomly picks either rock, paper or scissors for the computer

function playRound (playerSelection, computerSelection) {
    let win = 'You win, well done!'
    let lose = 'You lose, better luck next time.'
    let draw = 'It\'s a draw!'

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return win;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return lose;
    }
     else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return draw;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return win;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return lose;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return draw;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return win;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return lose;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return draw;
    }
}

const playerSelection = 'Paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerPlay())

// Plays one round of the game and returns a message to the player depending on the outcome