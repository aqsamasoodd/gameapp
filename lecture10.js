let userScore= 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msgparah=document.querySelector("#msg");

const userScoreNum= document.querySelector("#user-score");
const compScoreNum= document.querySelector("#comp-score");


const genCompChoice= () =>{
    const options = ["stone", "paper", "scissor"];
   const randomIdx = Math.floor(Math.random() * 3);
   return options[randomIdx];
};

const drawGame= () =>{
   // console.log("game was draw.");
    msgparah.innerText = "Game was draw. Play again.";
    msgparah.style.backgroundColor ="#3B060A";
};

const showWinner = (userWin , compChoice, userChoice) => {
    if (userWin) {
        //console.log("You Win!");
        userScore++;
        userScoreNum.innerText= userScore;
        msgparah.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msgparah.style.backgroundColor ="green";
    } else{
       // console.log("You Lose.");
        compScore++;
        compScoreNum.innerText= compScore;
        msgparah.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msgparah.style.backgroundColor ="red";
    }
};


const playGame =(userChoice) =>{
    console.log("user choice =" ,userChoice);
    //Generate computer choice -> moduler means functions
    const compChoice = genCompChoice ();
    console.log(" comp choice =" ,compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "stone") {
            // paper, scissor
            userWin = compChoice ==="paper" ? false :true;
        } else if (userChoice === "paper") {
            //stone, scissor
            userWin = compChoice ==="scissor" ? false: true;
        } else if (userChoice === "scissor"){
            //paper,stone
            userWin= compChoice ==="stone" ?  false: true;
        }

        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});
