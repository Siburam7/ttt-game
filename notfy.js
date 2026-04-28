let boxes = document.querySelectorAll(".box0");
let boxgroup = document.querySelector(".main-box");
let winnerName = document.querySelector(".winner-name");
let option = document.querySelector(".option");

let turnX = true;





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
        } else {
            box.innerText = "O";
            turnX = true;
        }

        box.disabled = true;

        checkWiner();
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
            


            };
        };
    };

   
};






























