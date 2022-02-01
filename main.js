const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'|| userInput==='paper'||userInput==='scissors') {
    return userInput;
  }else{
    console.log('error');
  }
};

console.log(getUserChoice('rock'));//ok

function getComputerChoice(){
  randomNumber = Math.floor(Math.random()*3);
  if (randomNumber===0){
    return 'paper';
  }else if (randomNumber===1){
    return 'scissors';
  }else{
    return 'rock';
  }
}

console.log(getComputerChoice());//ok

function determineWinner(userChoice,computerChoice){
  if (userChoice===computerChoice){
    return 'The game is a tie!';

  }else if (userChoice==="rock"){
    if(computerChoice==='paper'){
     return 'The computer won!';
    }else{
     return 'The user won!';
    }
     
  }else if(userChoice==='paper'){
    if(computerChoice==='scissors'){
     return 'The computer won!';
    }else{
    return 'The user won!';
  }
 
  }else if(userChoice==='scissors'){
    if(computerChoice==='paper'){
     return 'The user won!';
    }else{
    return 'The computer won!';
  }
 }
}

console.log(determineWinner('rock',getComputerChoice()));


function playGame(){
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('You threw: '+userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();