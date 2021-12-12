// computer's play
let rPS = ['Rock', 'Paper', 'Scissors'];
function computerPlay(){
    return rPS[Math.floor(Math.random()*rPS.length)];
}

let computerSelection = computerPlay();
let playerSelection = prompt('Rock, paper, or scissors?');

function playRound(computerSelection, playerSelection){
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound());