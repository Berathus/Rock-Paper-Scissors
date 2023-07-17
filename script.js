function getComputerChoice() {
    const computersChoice = ["rock" , "paper" , "scissors"];
    let randomIndex = Math.floor(Math.random() * computersChoice.length);
    return computersChoice[randomIndex];
  }
  
  function gameRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
      return "Its a draw";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
      return `You win, ${playerSelection} beats ${computerSelection}!`;
    }
   
    else if (!["rock", "paper", "scissors"].includes(playerSelection)) {
      return "Invalid input. Please enter either \"rock\", \"paper\" or \"scissors\" ";
    }
    else {
      return `You lose, ${computerSelection} beats ${playerSelection}!`;
    }
  }
  
  
  
  const playerSelection = prompt("Rock, Paper, Scissors?");
  const computerSelection = getComputerChoice();
  
  function game() {
    console.log(gameRound(playerSelection, computerSelection));
  }
  
  console.log(game());
  