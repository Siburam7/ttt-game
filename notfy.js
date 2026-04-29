let boxes = document.querySelectorAll(".box0");
let boxgroup = document.querySelector(".main-box");
let winnerName = document.querySelector(".winner-name");
let option = document.querySelector(".option");
let resetIcon = document.querySelector(".fa-arrow-rotate-left");
let turnBox = document.querySelector(".turn-box");
let againYes = document.querySelector(".yes1");
let againNo = document.querySelector(".no1");
let resetGame = document.querySelector(".reset-game");
let countX = document.querySelector(".count-x");
let countTie = document.querySelector(".count-tie");
let countO = document.querySelector(".count-o");
let optionNo = document.querySelector(".option-no");


let turnX = true;
let count = 0;
console.log(count);
let cX = 0;
let cTie = 0;
let cO = 0;




let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {

        if (box.innerText !== "") return;

        if (turnX === true) {
            box.innerText = "X";
            turnX = false;
            turnBox.innerText = "O Turn";
            box.style.color = "#FF653F";

        } else {
            box.innerText = "O";
            turnX = true;
            turnBox.innerText = "X Turn";
            box.style.color = "aqua";
        }


        count++;
        console.log(count);


        if (!checkWiner()) {
            countWin();
}
    });
});

const checkWiner = () => {
    for (let winer of winPatterns) {
         let winVal1  = (boxes[winer[0]].innerText);
         let winVal2 = (boxes[winer[1]].innerText);
         let winVal3 = (boxes[winer[2]].innerText);
        
         

        if (winVal1 != "" && winVal2 != ""&& winVal3 != "") {
            if (winVal1 === winVal2 && winVal2 === winVal3) {
            
                winnerName.innerText = (`Winner ${winVal1}`);
                boxgroup.style.display = "none";
                option.style.display = "flex";
                turnBox.style.display = "none";
                

                if (winVal1 === "X") {
                    cX++;
                    countX.innerText = cX;

                    winnerName.style.color = "#FF653F";

                } else if (winVal1 === "O") {
                    cO++;
                    countO.innerText = cO;

                    winnerName.style.color = "aqua";

                }

            


            };
        };
    };

   
};

// icon rotate

resetIcon.addEventListener("click", () => {
    resetIcon.classList.remove("reset-rotate");

    void resetIcon.offsetWidth;

    
    resetIcon.classList.add("reset-rotate");
    
});


// play again (yes)

againYes.addEventListener("click", () => {
    boxgroup.style.display = "flex";
    option.style.display = "none";
    turnBox.style.display = "flex";
    count = 0;
    resetGameX();
});

// play again NO

againNo.addEventListener("click", () => {
    boxgroup.style.display = "none";
    option.style.display = "none";
    optionNo.style.display = "flex";
    count = 0;
    resetGameX();
});


// reset game
const resetGameX = () => {
    for (let box of boxes) {
        box.innerText = "";
        turnX = true;
        gameOver = false;
        turnBox.innerText = "X Turn";
        count = 0;
    }

};


resetGame.addEventListener("click", () => {
    resetGameX();
    optionNo.style.display = "none";
    boxgroup.style.display = "flex";
})




// game TIE display

const countWin = () => {
    if (count === 9) {
    winnerName.innerText = ("TIE!");
    boxgroup.style.display = "none";
    option.style.display = "flex";
    turnBox.style.display = "none";
    count = 0;
    console.log(count);
    cTie++;
    countTie.innerText = cTie;


   };
};

console.log(count);





































