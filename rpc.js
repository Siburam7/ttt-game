let rock = document.querySelector("#rock-img");
let paper = document.querySelector("#paper-img");
let scissors = document.querySelector("#scissors-img");

let round = document.querySelector("#Round-text");

let humanCount = document.querySelector("#human-win-count");
let aiCount = document.querySelector("#ai-win-count");

let ChoiceImage = document.querySelector("#cir-comp-y");

let aiChoiceImage = document.querySelector("#cir-comp-x");

let gameRound = 0;
let lastRound = 5;
let win = 0;
let loss = 0;

const aiClasses = [
    "human-choice-rock",
    "human-choice-paper",
    "human-choice-scissors"
];

function randomNum() {
    return Math.floor(Math.random() * 3) + 1;
}

function checkResult(player, ai) {

    if (player === ai) {
        lastRound++;
        console.log("Draw");

    } else if (
        (player === 1 && ai === 3) ||
        (player === 2 && ai === 1) ||
        (player === 3 && ai === 2)
        ) {

        win++;
        humanCount.innerText = win;
        console.log("Win");

    } else {
 
        loss++;
        aiCount.innerText = loss;
        console.log("Loss");

    };



};



function playGame(player) {
    if (gameRound >= lastRound) {
        round.innerText = `GameOver`;
        return;
    }

    gameRound++;

    round.innerText = `Round ${gameRound}`;

    let ai = randomNum();

    console.log(ai);
    spinAnimation(ai);

    checkResult(player, ai);

    if (player===1) {
        ChoiceImage.classList.remove("human-choice-scissors");
        ChoiceImage.classList.remove("human-choice-paper");
        ChoiceImage.classList.add("human-choice-rock");
    } else if (player===2) {
        ChoiceImage.classList.remove("human-choice-rock");
        ChoiceImage.classList.remove("human-choice-scissors");
        ChoiceImage.classList.add("human-choice-paper");
    } else {
        ChoiceImage.classList.remove("human-choice-rock");
        ChoiceImage.classList.remove("human-choice-paper");
        ChoiceImage.classList.add("human-choice-scissors");
    }
} 

rock.addEventListener("click", () => {
    playGame(1);
});

paper.addEventListener("click", () => {
    playGame(2);
});

scissors.addEventListener("click", () => {
    playGame(3);
});












function spinAnimation(finalChoice) {

    let index = 0;

    let spin = setInterval(() => {

        aiChoiceImage.classList.remove(
            "human-choice-rock",
            "human-choice-paper",
            "human-choice-scissors"
        );

        aiChoiceImage.classList.add(aiClasses[index]);

        index++;

        if (index >= aiClasses.length) {
            index = 0;
        }

    }, 100);



    setTimeout(() => {

        clearInterval(spin);

        aiChoiceImage.classList.remove(
            "human-choice-rock",
            "human-choice-paper",
            "human-choice-scissors"
        );

        aiChoiceImage.classList.add(aiClasses[finalChoice - 1]);

    }, 1500);

}

