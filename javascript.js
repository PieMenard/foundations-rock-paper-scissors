let pcScore = 0;
let playerScore = 0;


//generate computer choice
function getComputerChoice()
{
    let pcChoice = Math.floor(Math.random() * 3) + 1;
    switch (pcChoice)
    {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

//ask player for choice
function getPlayerChoice()
{
    let playerChoice = prompt("Input rock, paper or scissors");
    let result = playerChoice.toLowerCase();
    if ( result!="rock"&&result!="paper"&&result!="scissors" )
        alert("Illegal move, informing the FBI");
    else
        return result;
    
}

//compare both plays and determine winner or tie

function playRound(playerSelection,computerSelection)
{
    if (playerSelection === computerSelection)
    {
            return "It's a tie";
    }
    if (playerSelection == "rock" && computerSelection == "paper")
    {
        pcScore += 1;
        return "You lose, paper beats rock";
    }
    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        playerScore += 1;
        return "You win, rock beats scissors";
    }
    if (playerSelection == "paper" && computerSelection == "scissors")
    {
        pcScore += 1;
        return "You lose, scissors beats paper";
    }
    if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore += 1;
        return "You win, paper beats rock"; 
    }
}

function game()
{
    
    for (let i = 0; i < 5; i++) {
        console.log( "Round " + (i + 1) +'\n' + "Score: " + '\n' +  "PC: " + pcScore + " Player: " + playerScore);
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log("The computer played " + computerSelection + '\n' + playRound(playerSelection, computerSelection));
    }
    
   
    if (pcScore > playerScore)
        console.log("PC WINS");
    else if (pcScore < playerScore)
        console.log("PLAYER WINS");
    else
        console.log("It's not possible, but it's a tie");
    

}//ask to play again


game();
