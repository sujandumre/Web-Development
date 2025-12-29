let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "yellow", "orange"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start game on keypress
document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

// Button flash animation
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

// Increase level and generate next sequence
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level + ${level}`;

  let randInx = Math.floor(Math.random() * btns.length);
  let randColor = btns[randInx];
  let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);

  console.log("Game sequence:", gameSeq);

  btnFlash(randbtn);
}

// Button clicks by user
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", function () {
    let userColor = this.classList[1]; // second class = color
    userSeq.push(userColor);
    btnFlash(this);

    checkAns(userSeq.length - 1);
  });
}

// Check user answer
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 250);
    }
  } else {
    h2.innerText = "Game Over! Press any key to Restart";
    resetGame();
  }
}

// Reset game after failure
function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}