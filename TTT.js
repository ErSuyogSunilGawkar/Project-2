let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");



let turnO = true; 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    count =0;
    enableboxes();
    msgcontainer.classList.add("hide");

}

const drawgame = () => {
    msg.innerText = "The match is draw";
    msgcontainer.classList.remove("hide");
    }


let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turnO){
            box.innerText = "O";
            turnO = false;
            
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        let iswinner = checkWinner();
        if(count === 9 && !iswinner)
            {
                drawgame();
            }
    })
})

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
}
}

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (pos1val) => {
    msg.innerText = `Congratulations, Winner is ${pos1val}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
} 
const checkWinner = () => {
    for(pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("Winner!!",pos1val);
                showWinner(pos1val);
            }
        } 
    }
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);












            /*console.log(pattern[0], pattern[1], pattern[2]);
                console.log(
                boxes[pattern[0]].innerText,
                boxes[pattern[1]].innerText,
                boxes[pattern[2]].innerText,
            )*/

