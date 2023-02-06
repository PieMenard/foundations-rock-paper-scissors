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

//compare both plays and determine winner or tie

function playRound(playerSelection)
{
    const computerSelection = getComputerChoice();
    console.log("The computer chose "+computerSelection);
    console.log("You chose "+playerSelection);
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
        return "You lose, scissors cut paper";
    }
    if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore += 1;
        return "You win, paper beats rock"; 
    }
    if (playerSelection == "scissors" && computerSelection == "rock")
    {
        pcScore += 1;
        return "You lose, rock beats scissors"; 
    }
    if (playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore += 1;
        return "You win, scissors cut paper"; 
    }
}

function playerPlay(){
    let clickedButton = "";

    const buttons = Array.from(document.querySelectorAll('button'));
    console.log(buttons);
    
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clickedButton = button.id.toString();
        console.log(playRound(clickedButton));
      
    });
    });
}
function game()
{
    
    
        playerPlay();
        if (pcScore > playerScore)
            console.log("PC WINS");
        else if (pcScore < playerScore)
            console.log("PLAYER WINS");
        else
            console.log("It's not possible, but it's a tie");
    
    

}//ask to play again





game();


