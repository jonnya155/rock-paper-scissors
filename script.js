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
    let win = 'You win that round, well done!';
    let lose = 'The computer wins that round, try again!';
    let draw = 'That round was a draw';

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        return win;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return lose;
    }
     else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
        return draw;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        return win;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return lose;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper') {
        return draw;
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        return win;
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return lose;
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors') {
        return draw;
    }
    
}

   // Plays one round of the game and returns a message to the player depending on the outcome

function score (roundResult) {

    if (roundResult === 'You win that round, well done!') {
        playerScore++;
        let totalScore = playerScore + ' - ' + computerScore;
        return totalScore;
    }

    else if (roundResult === 'The computer wins that round, try again!') {
        computerScore++;
        let totalScore = playerScore + ' - ' + computerScore;
        return totalScore;
    }

    else {
        let totalScore = playerScore + ' - ' + computerScore;
        return totalScore;
    }
}

// Uses the result of playRound to increment the score of either the player or the computer, depending who wins the round.

function game () {
    for (let i=0;i<5;i++) {
        const playerSelection = window.prompt('Enter either rock, paper or scissors!');
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        const roundScore = score(roundResult);
        console.log(roundResult);
        console.log(roundScore);
    }
}

// A loop that runs five times, takes the player & computer selections, the result of the round & the score at the end of the round. The result of the round and the score is displayed in the console log after each iteration.

function finalResult (playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log('Congrats, you have beat the computer!');
    }
    
    else if (computerScore > playerScore) {
        console.log('You lose, better luck next time!');
    }

    else {
        console.log('The game has ended a tie.');
    }
}

// Declares the overall result after 5 rounds of the game.

let playerScore = 0;
let computerScore = 0;
game();
finalResult (playerScore, computerScore);
