const choice = ["rock" , "paper" , "scissors"];
let computerSelection ;


function getComputerSelection(arr){
    return  arr[Math.floor(Math.random() * arr.length)];
   }            
             
function playRound(playerChoice, computerSelection){
               
    if(playerChoice === computerSelection){
        console.log("That's a draw!!!");
        return '-1';
    }
    
    else if ((playerChoice === 'rock' && computerSelection === "paper") ||
            (playerChoice === 'paper' && computerSelection === "scissors") ||
            (playerChoice === 'scissors' && computerSelection === "rock"  )  ) {
        console.log(`You Lose! ${computerSelection} beats ${playerChoice}`);
        return '0'; 
    }

    else if ((playerChoice === 'paper' && computerSelection === "rock" )||
            (playerChoice === 'scissors' && computerSelection === "paper" )||
            (playerChoice === 'rock' && computerSelection === "scissors") ){
        console.log(`You Won! ${playerChoice} beats ${computerSelection}`);
        return '1';
    }

}       
let playerScore = 0;
let compScore = 0;
const p = document.querySelector('p');
console.log(p);
function calculateScore(num){
        if(playerScore ===5 || compScore === 5){
            
            if(playerScore === 5 ){
            p.textContent = "YOU WON!!!";
           }else{ 
            p.textContent = "YOU LOST!!!";
           }
            playerScore = 0;
            compScore = 0;
            x = false;
        }
        else{
            p.textContent = "";
            if(result === '1') return playerScore += 1;
            else if(result === '0') return compScore += 1; 
            else if( result === '-1') return null;
        }
        
    
    
}   

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const div = document.querySelector('div');
div.innerHTML = `Player Score: ${playerScore} - Computer Score: ${compScore}`;


let result;

rockBtn.addEventListener("click", (e)=>{
    result = playRound('paper',getComputerSelection(choice));
    console.log(calculateScore(result));
    div.innerHTML = `Player Score: ${playerScore} - Computer Score: ${compScore}`;
});

paperBtn.addEventListener("click", (e)=>{
      result = playRound('paper',getComputerSelection(choice));
      console.log(calculateScore(result));
      div.innerHTML = `Player Score: ${playerScore} - Computer Score: ${compScore}`;
});

scissorsBtn.addEventListener("click", (e)=>{
    result = playRound('paper',getComputerSelection(choice));
    console.log(calculateScore(result));
    div.innerHTML = `Player Score: ${playerScore} - Computer Score: ${compScore}`;
});

                        

                    

            