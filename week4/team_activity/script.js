const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const alerts = document.querySelector("#alerts");
const closeBtn = document.querySelector("#close-alerts-btn");
const overlay = document.querySelector("#overlay");
const content = document.querySelector("#alerts-content");
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

console.log(board);

cells.forEach((cell) => {
  cell.addEventListener("click", clickHandler, { once: true });

  // if (click === 8) {
  //   alerts.classList.add("open");
  //   overlay.classList.add("open");
  //   content.innerHTML = "It is a tie game!";

  //   closeBtn.addEventListener("click", closeAlerts);

  //   overlay.addEventListener("click", closeAlerts);
  // }
});

resetBtn.addEventListener("click", reset);

document.addEventListener("keydown", (event) => {
  if (event.code == "Escape" || event.code == "Enter") {
    alerts.classList.remove("open");
    overlay.classList.remove("open");
    reset();
  }
});

function clickHandler(e) {
  const cell = e.target;
  cell.innerHTML = currentPlayer;
  currentPlayer === player1 ? (currentPlayer = player2) : (currentPlayer = player1);
  checkWinner();
}

function checkWinner(board) {
  for (let i = 0; i <= 2; i++) {
    console.log(board);
  }
}

function reset() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
}

function closeAlerts() {
  alerts.classList.remove("open");
  overlay.classList.remove("open");
  reset();
}
