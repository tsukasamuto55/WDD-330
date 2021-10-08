const cells = Array.from(document.querySelectorAll(".cell"));
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const PLAYER1 = "x";
const PLAYER2 = "o";
let player2;
const resetBtn = document.querySelector(".reset");

startGame();

resetBtn.addEventListener("click", startGame);

function startGame() {
  player2 = false;
  cells.forEach((cell) => {
    cell.classList.remove(PLAYER1);
    cell.classList.remove(PLAYER2);
    cell.removeEventListener("click", clickHandler);
    cell.addEventListener("click", clickHandler, { once: true });
  });
}

function clickHandler(e) {
  const cell = e.target;
  const currentPlayer = player2 ? PLAYER2 : PLAYER1;

  cell.classList.add(currentPlayer);
  // change the value of boolean. true ==> false, false ==> true
  player2 = !player2;
}

function checkWinner(player) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(player);
    });
  });
}

function checkWinner(player) {}
