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
  
  
  
  function game(rounds) {
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 1; i <= rounds; i++) {
      const playerSelection = prompt(`Round ${i}, Rock, Paper, Scissors?`);
      const computerSelection = getComputerChoice();
      const result = gameRound(playerSelection, computerSelection);

      console.log(result);

      if (result.startsWith("You win")) {
        playerWins++;
      } else if (result.startsWith("You lose")) {
        computerWins++; 
      }
    }

    if (playerWins > computerWins) {
      console.log("Congratulations, you are the winner");
    } else if (playerWins < computerWins) {
      console.log("You have lost the game");
    } else {
      console.log("It's a draw. No one won the game");
    }
  }
  
  game(5);
  