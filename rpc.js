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

let box1 = document.querySelector("#round-1");
let box2 = document.querySelector("#round-2");
let box3 = document.querySelector("#round-3");
let box4 = document.querySelector("#round-4");
let box5 = document.querySelector("#round-5");

let winColor0 = document.querySelector(".bord-1-his");
let winOrLoss0 = document.querySelector("#win-or-loss-1");
let yourImg0 = document.querySelector(".img1-his-you");
let aiImg0 = document.querySelector(".img-his-ai");
let scoreColor0 = document.querySelector(".score-color");
let bordHis0 = document.querySelector(".bord-1-hisX");

let winColor1 = document.querySelector(".bord-2-his");
let winOrLoss1 = document.querySelector("#win-or-loss-2");
let yourImg1 = document.querySelector(".img1-his-you-2");
let aiImg1 = document.querySelector(".img-his-ai-2");
let scoreColor1 = document.querySelector(".score-color-2");
let bordHis1 = document.querySelector(".bord-2-hisX");

let winColor2 = document.querySelector(".bord-3-his");
let winOrLoss2 = document.querySelector("#win-or-loss-3");
let yourImg2 = document.querySelector(".img1-his-you-3");
let aiImg2 = document.querySelector(".img-his-ai-3");
let scoreColor2 = document.querySelector(".score-color-3");
let bordHis2 = document.querySelector(".bord-3-hisX");

let winColor3 = document.querySelector(".bord-4-his");
let winOrLoss3 = document.querySelector("#win-or-loss-4");
let yourImg3 = document.querySelector(".img1-his-you-4");
let aiImg3 = document.querySelector(".img-his-ai-4");
let scoreColor3 = document.querySelector(".score-color-4");
let bordHis3 = document.querySelector(".bord-4-hisX");

let winColor4 = document.querySelector(".bord-5-his");
let winOrLoss4 = document.querySelector("#win-or-loss-5");
let yourImg4 = document.querySelector(".img1-his-you-5");
let aiImg4 = document.querySelector(".img-his-ai-5");
// let scoreColor4 = document.querySelector(".score-color-5");
let bordHis4 = document.querySelector(".bord-5-hisX");

// History End Here

let buttomText = document.querySelector("#made-button");

let gameRound = 0;
let lastRound = 5;
let win = 0;
let loss = 0;
let winLoss = "";
let countX = -1;

const aiClasses = [
  "human-choice-rock",
  "human-choice-paper",
  "human-choice-scissors",
];

const winColor = [winColor0, winColor1, winColor2, winColor3, winColor4];

const winOrLoss = [winOrLoss0, winOrLoss1, winOrLoss2, winOrLoss3, winOrLoss4];

const yourImg = [yourImg0, yourImg1, yourImg2, yourImg3, yourImg4];

const aiImg = [aiImg0, aiImg1, aiImg2, aiImg3, aiImg4];

// const scoreColor = [
//     scoreColor0,
//     scoreColor1,
//     scoreColor2,
//     scoreColor3,
//     scoreColor4
// ];

const bordHis = [bordHis0, bordHis1, bordHis2, bordHis3, bordHis4];

const box = [box1, box2, box3, box4, box5];

function randomNum() {
  return Math.floor(Math.random() * 3) + 1;
}

function checkResult(player, ai) {
  if (player === ai) {
    lastRound++;
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

  setTimeout(() => {
    checkResult(player, ai);

    if (winLoss === "draw") {
      return;
    }

    if (player === 1) {
      ChoiceImage.classList.remove(
        "human-choice-scissors",
        "human-choice-paper",
      );

      ChoiceImage.classList.add("human-choice-rock");

      yourImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      yourImg[countX].classList.add("human-choice-rock");
    } else if (player === 2) {
      ChoiceImage.classList.remove("human-choice-rock");
      ChoiceImage.classList.remove("human-choice-scissors");
      ChoiceImage.classList.add("human-choice-paper");

      yourImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      yourImg[countX].classList.add("human-choice-paper");
    } else {
      ChoiceImage.classList.remove("human-choice-rock");
      ChoiceImage.classList.remove("human-choice-paper");
      ChoiceImage.classList.add("human-choice-scissors");

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
    } else if (ai === 2) {
      aiImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      aiImg[countX].classList.add("human-choice-paper");
    } else {
      aiImg[countX].classList.remove(
        "human-choice-rock",
        "human-choice-paper",
        "human-choice-scissors",
      );

      aiImg[countX].classList.add("human-choice-scissors");
    }
  }, 1500);
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
};
