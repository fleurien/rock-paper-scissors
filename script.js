  const computerPlay = () => {
    const rPS = ['rock', 'paper', 'scissors'];
    return rPS[Math.floor(Math.random()*rPS.length)];
  }

  const userPlay = userInput => {
    userInput = prompt('Rock, paper, or scissors?');
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log(`We're playing rock, paper, scissors, here! Not rock, paper, "${userInput}"". Try again.`);
    }
  }

  let userScore = 0;
  let cpuScore = 0;
  
  let playRound = (playerSelection,computerSelection) => {
    if(playerSelection === computerSelection){
        cpuScore = ++cpuScore;
        userScore = ++userScore;
      return `It's a tie!`;
    } else if (playerSelection = 'rock'){
      if (computerSelection = 'paper'){
        cpuScore = ++cpuScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      } else {
        userScore = ++userScore;
        return `You won! ${playerSelection} beats ${computerSelection}.`
      }
    } else if (playerSelection = 'paper'){
      if(computerSelection = 'scissors'){
        cpuScore = ++cpuScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      } else {
        userScore = ++userScore;
        return `You won! ${playerSelection} beats ${computerSelection}.`
      }
    } else if (playerSelection = 'scissors'){
      if(computerSelection = 'rock'){
        cpuScore = ++cpuScore;
        eturn `You lose! ${computerSelection} beats ${playerSelection}`;
      } else {
        userScore = ++userScore;
        return `You won! ${playerSelection} beats ${computerSelection}.`
      }
    }
  }

  let showResults = () => console.log(`User score: ${userScore} vs CPU score: ${cpuScore}`);
  
  function game(){
    let playerSelection = userPlay();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(showResults());
  }
  
  game();
  game();
  game();
  game();
  game();