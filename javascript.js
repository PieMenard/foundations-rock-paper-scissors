let pcScore = 0;
let playerScore = 0;
const winScore = 5;

//creating DOM elements
const resultsBox = document.querySelector('.results');
const plays = document.createElement('p');
const score = document.createElement('p');
const roundDetails = document.createElement('p');
const winner = document.createElement('h1');
const restart = document.createElement('button');

resultsBox.appendChild(plays);
resultsBox.appendChild(roundDetails);
resultsBox.appendChild(score);
resultsBox.appendChild(winner);

const buttons = document.querySelectorAll('button');


//generate computer choice
function getComputerChoice(){

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

//compare player choice with computer choice and update the score
function playRound(playerSelection){

    const computerSelection = getComputerChoice();
    plays.textContent = "The computer chose "+computerSelection + '\n' + ", you chose "+playerSelection;
    
    updateScore();

    if (playerSelection === computerSelection)
    {
        roundDetails.textContent = "It's a tie"
    }
    if (playerSelection == "rock" && computerSelection == "paper")
    {
        pcScore += 1;
        roundDetails.textContent =  "You lose, paper beats rock";
    }
    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        playerScore += 1;
        roundDetails.textContent =  "You win, rock beats scissors";
    }
    if (playerSelection == "paper" && computerSelection == "scissors")
    {
        pcScore += 1;
        roundDetails.textContent =  "You lose, scissors cut paper";
    }
    if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore += 1;
        roundDetails.textContent =  "You win, paper beats rock"; 
    }
    if (playerSelection == "scissors" && computerSelection == "rock")
    {
        pcScore += 1;
        roundDetails.textContent =  "You lose, rock beats scissors"; 
    }
    if (playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore += 1;
        roundDetails.textContent =  "You win, scissors cut paper"; 
    }
    
}

//get player choice from button input, play round wth that input
function game(){
    let clickedButton = "";
  
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clickedButton = button.id;
        playRound(clickedButton);
      
    });
    });
}

//end the game and ask to replay
function gameOver() {
    buttons.forEach(button => {
        button.disabled = true;
    });
    resultsBox.appendChild(restart);
    restart.textContent = "Play again";
    restart.addEventListener('click', () => {
        window.location.reload();
    });
}


//keep info on the current score, end the game if someone wins
function updateScore (){
    
    score.textContent = "PC: "+ pcScore + " Player: " + playerScore; 
    
    if ((pcScore == winScore)||(playerScore == winScore)) {
        if (pcScore == winScore) 
            winner.textContent = "PC WINS";
        else if (playerScore == winScore) 
            winner.textContent = "PLAYER WINS";
       gameOver();
    }

}

game();


