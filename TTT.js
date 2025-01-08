let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper,scissors
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = ".....Draw Game.....";
    msg.style.backgroundColor = "blue";

}

const showWinner = (userwin, userchoice, compchoice) => {
    if(userwin == true)
    {
        userscore++;
        userscorepara.innerText = userscore;
        //console.log("You Win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        //console.log("You Lose.");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose. ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
    //generate computer choice -> modular programming
    const compchoice = genCompChoice();
    console.log("comp choice =", compchoice);

    if(userchoice === compchoice){
        //draw game
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "Rock"){
            userwin = compchoice === "Scissors" ? true : false;
        }
        else if(userchoice === "Paper"){
            userwin = compchoice === "Rock" ? true : false
        }
        else {
            userwin = compchoice === "Paper" ? true : false
        }
        showWinner(userwin, userchoice, compchoice);
        }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})