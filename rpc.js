let rock = document.querySelector("#rock-img");
let paper = document.querySelector("#paper-img");
let scissors = document.querySelector("#scissors-img");

let round = document.querySelector("#Round-text");

let humanCount = document.querySelector("#human-win-count");
let aiCount = document.querySelector("#ai-win-count");

let ChoiceImage = document.querySelector("#cir-comp-y");

let aiChoiceImage = document.querySelector("#cir-comp-x");

// History Add Start

let hisMain = document.querySelector(".history");

let box = document.querySelectorAll(".round-1");

let winColor = document.querySelectorAll(".bord-1-his");
let winOrLoss = document.querySelectorAll(".win-or-loss-1");
let yourImg = document.querySelectorAll(".img1-his-you");
let aiImg = document.querySelectorAll(".img-his-ai");
let scoreColor0 = document.querySelectorAll(".score-color");
let bordHis = document.querySelectorAll(".bord-1-hisX");




// History End Here

let buttomText = document.querySelector("#made-button");

let aiText = document.querySelector("#cir-comp-x-text");
let yourText = document.querySelector("#cir-comp-y-text");

let optionMain = document.querySelector(".option-main");
let clickMain = document.querySelector(".cir-main");
let winLossMain = document.querySelector("#win-loss-main");
let nextBtn = document.querySelector(".play-next-button");
let countDownText = document.querySelector("#count-down");

let gameRound = 0;
let lastRound = 5;
let win = 0;
let loss = 0;
let winLoss = "";
let countX = -1;
let canClick = true;

let thinkingAnimation;

const aiClasses = [
  "human-choice-rock",
  "human-choice-paper",
  "human-choice-scissors",
];


function randomNum() {
  return Math.floor(Math.random() * 3) + 1;
}

function checkResult(player, ai) {
  if (player === ai) {
    // lastRound++;
    gameRound--;
    winLoss = "draw";
  } else if (
    (player === 1 && ai === 3) ||
    (player === 2 && ai === 1) ||
    (player === 3 && ai === 2)
  ) {
    win++;
    countX++;
    humanCount.innerText = win;
    winLoss = "win";
  } else {
    loss++;
    countX++;
    aiCount.innerText = loss;
    winLoss = "loss";
  }

  if (winLoss === "win") {
    winColor[countX].style.backgroundColor = "#00FF9D";
    winOrLoss[countX].innerText = "WIN";
    bordHis[countX].style.backgroundColor = "#00FF9D";
    bordHis[countX].innerText = "+1";
    box[countX].style.display = "flex";
  } else if (winLoss === "loss") {
    winColor[countX].style.backgroundColor = "#FF5C7A";
    winOrLoss[countX].innerText = "LOSS";
    bordHis[countX].style.backgroundColor = "#FF5C7A";
    bordHis[countX].innerText = "-1";
    box[countX].style.display = "flex";
  }
}

function setChoice(element, choice) {

    element.classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors"
    );

    element.classList.add(aiClasses[choice - 1]);
}

function playGame(player) {
  if (!canClick) return;
  canClick = false;

  if (gameRound > lastRound) {
    round.innerText = `GameOver`;
    return;
  }

  if (gameRound === 0) {
    gameRound++;

    round.innerText = `Round ${gameRound}`;
  }

  

  let ai = randomNum();

  console.log(ai);
  spinAnimation(ai);

  if (player === 1) {

    setChoice(ChoiceImage, player);

    yourText.innerText = "Rock";
  } else if (player === 2) {

    setChoice(ChoiceImage, player);

    yourText.innerText = "Paper";
  } else {
    
   setChoice(ChoiceImage, player);

    yourText.innerText = "Scissors";
  }

  let countXX = 0;

  thinkingAnimation = setInterval(() => {
    aiText.innerText = "AI is thinking" + ".".repeat(countXX);

    countXX++;

    if (countXX > 3) {
      countXX = 0;
    }
  }, 200);

  setTimeout(() => {
    

    clickMain.style.display = "none";
    optionMain.style.display = "flex";

    clearInterval(thinkingAnimation);

    checkResult(player, ai);

    if (winLoss === "win") {
      winLossMain.innerText = "VICTORY";
      console.log("Win");
    } else if (winLoss === "loss") {
      winLossMain.innerText = "DEFEAT";
      console.log("Loss");
    } else {
      winLossMain.innerText = "DRAW";
    }

   
    


    if (player === 1) {
      yourImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      yourImg[countX].classList.add("human-choice-rock");
    } else if (player === 2) {
      yourImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      yourImg[countX].classList.add("human-choice-paper");
    } else {
      yourImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      yourImg[countX].classList.add("human-choice-scissors");
    }

    if (ai === 1) {
      aiImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      aiImg[countX].classList.add("human-choice-rock");

      aiText.innerText = "Rock";
    } else if (ai === 2) {
      aiImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      aiImg[countX].classList.add("human-choice-paper");

      aiText.innerText = "Paper";
    } else {
      aiImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      aiImg[countX].classList.add("human-choice-scissors");

      aiText.innerText = "Scissors";
    }

    canClick = true;
  }, 1500);
}


nextBtn.addEventListener("click", () => {
  clickMain.style.display = "flex";
  optionMain.style.display = "none";

  gameRound++;
  round.innerText = `Round ${gameRound}`;
});


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
      "human-choice-scissors",
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
      "human-choice-scissors",
    );

    aiChoiceImage.classList.add(aiClasses[finalChoice - 1]);
  }, 1500);
}
