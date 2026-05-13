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
let darkNav = document.querySelector(".dark");
let lightNav = document.querySelector(".light");
let body = document.querySelector("body");
let backBtn = document.querySelector(".boox-a1");
let manuMain = document.querySelector(".manu-option");
let manuLogo = document.querySelector(".boox-a3");
let menuClass = document.querySelector(".fa-gear");

let leftAngular = document.querySelector(".fa-angle-left");
let doorOpen = document.querySelector(".fa-door-open");

let computer = document.querySelector(".select1");
let duo = document.querySelector(".select2");

let crazy = document.querySelector(".crazy");
let crazyH4 = document.querySelector(".crazy-h4");

let ulId = document.querySelector(".ul-id");
let brightness = document.querySelector("#brightness");
let volume = document.querySelector("#volume");


let turnX = true;
let gameMood = "duo";
let count = 0;
console.log(count);
let cX = 0;
let cTie = 0;
let cO = 0;
let light = "dark";




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

        checkWiner();
        countWin();

        if (gameMood === "computer" && turnX === false) {
            setTimeout(() => {
                computerMove();
            },500);
        }
    });
});



const computerMove = ()=> {
    let emptyBox = [];

    boxes.forEach((box,index) => {
        if (box.innerText === "") {
            emptyBox.push(index);
        }
    });


    if (emptyBox.length === 0) return;


    let randomIndex = emptyBox[Math.floor(Math.random()*emptyBox.length)];

    boxes[randomIndex].innerText = "O";
    boxes[randomIndex].style.color = "aqua";

    turnX = true;

    turnBox.innerText = "Your Turn";

    count++;

    checkWiner();
    countWin();

            
}




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

// light All background

lightNav.addEventListener("click", () => {

    body.classList.add("bodyx");

    resetGame.style.backgroundColor = "#FB3640";

    // old dark class remove
    computer.classList.remove("select-option");
    duo.classList.remove("select-option");

    // selected item ko light class do
    if (gameMood === "computer") {
        computer.classList.add("select-option2");
    } else {
        duo.classList.add("select-option2");
    }

    light = "light";

    crazy.classList.remove("h1-Adder");
    crazy.classList.add("h1-Adder2");

    crazyH4.classList.remove("h4-Adder");
    crazyH4.classList.add("h4-Adder2");

    

});

// dark all background

darkNav.addEventListener("click", () => {

    body.classList.remove("bodyx");

    resetGame.style.backgroundColor = "#89E900";

    // old light class remove
    computer.classList.remove("select-option2");
    duo.classList.remove("select-option2");

    // selected item ko dark class do
    if (gameMood === "computer") {
        computer.classList.add("select-option");
    } else {
        duo.classList.add("select-option");
    }

    light = "dark";

    crazy.classList.remove("h1-Adder2");
    crazy.classList.add("h1-Adder");

    crazyH4.classList.remove("h4-Adder2");
    crazyH4.classList.add("h4-Adder");


});





// back Button nav bar click Disign

backBtn.addEventListener("click",()=> {

    leftAngular.classList.remove("tr1");
    leftAngular.classList.remove("tr1-1");
    doorOpen.classList.remove("tr2");

    if (light === "light") {
        leftAngular.classList.add("tr1-1");
        doorOpen.classList.add("tr2");
    } else {
        leftAngular.classList.add("tr1");
        doorOpen.classList.add("tr2");
    }


    setTimeout(()=> {
        window.location.href = "index.html";
    },300);
    

});

// End here this box







manuLogo.addEventListener("click", ()=> {

    manuMain.classList.toggle("active");

    menuClass.classList.remove("manuLogo-rotate2");
    menuClass.classList.remove("manuLogo-rotate");

    if (light === "light") {

        void manuLogo.offsetWidth;

        menuClass.classList.add("manuLogo-rotate2");

    } else {

        void manuLogo.offsetWidth;

        menuClass.classList.add("manuLogo-rotate");

    }

    
});



//computer or duo selection hover 

duo.classList.add("select-option");


computer.addEventListener("click",()=> {

    computer.classList.remove("select-option","select-option2");
    duo.classList.remove("select-option","select-option2");

    if (light === "dark") {

        computer.classList.add("select-option");

    } else {
        computer.classList.add("select-option2");
    }


    resetGameX();
    gameMood = "computer";

});



duo.addEventListener("click",()=> {

    duo.classList.remove("select-option","select-option2");
    computer.classList.remove("select-option","select-option2");

    if (light === "dark") {

        duo.classList.add("select-option");

    } else {

        duo.classList.add("select-option2");

    }

    resetGameX();
    gameMood = "duo";
 
});
    



// End here computer or duo











let sum = {
    sibu:"ram",
    ramm:"sibu",
}


























