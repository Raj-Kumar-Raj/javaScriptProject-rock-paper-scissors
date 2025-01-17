let userScore =0;
let compScore=0;
let msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const choices= document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
    const userChoice = choice.getAttribute("id"); 
    playGame(userChoice);
    });
});

const genComputerChoice =()=>{
   const options = ["rock","paper","scissors"]; 
  let n = Math.floor(Math.random()*3);
  return options[n];
};

const playGame=(userChoice)=>{
    // generate coimputer choice 
    const compChoice = genComputerChoice();
    if(userChoice==compChoice){
        // draw 
        drawGame();
    }else{
        let userWin= true;
        if(userChoice=="rock"){
            userWin = compChoice == "paper"? false: true 
        }else if(userChoice =="paper"){
            userWin = compChoice == "scissors"? false: true 
        }else{
            userWin = compChoice == "rock"? false: true 
        }

        showWinner(userWin, userChoice , compChoice);
    }
};

     const showWinner=(userWin, userChoice, compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }else{
            compScore++;
            compScorePara.innerText=compScore;
            msg.innerText=`You Lost.  ${userChoice} beats Your  ${compChoice}`;
            msg.style.backgroundColor = "red";
        }
     };


const drawGame=()=>{
    msg.innerText="Game was Draw, Play Again!";
    msg.style.backgroundColor = "#081b31";
}
