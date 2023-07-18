var board = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));
const player1 = document.querySelector("#player1").value;
const player2 = document.querySelector("#player2").value;
var currentPlayer = "X";
var players = {
  X: player1,
  O: player2,
};
var gameActive = true;

window.onload = function () {
  var cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      var row = Math.floor(i / 3);
      var col = i % 3;
      if (board[row][col] || !gameActive) {
        return;
      }
      board[row][col] = currentPlayer;
      cells[i].innerText = currentPlayer;
      checkGameStatus();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("message").innerText =
        "Turno de " + players[currentPlayer];
    });
  }

  document.getElementById("reset").addEventListener("click", function () {
    board = Array(3)
      .fill(null)
      .map(() => Array(3).fill(null));
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("message").innerText = "";
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
    }
  });
};

function checkGameStatus() {
  var lines = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  for (let i = 0; i < lines.length; i++) {
    var val = board[lines[i][0][0]][lines[i][0][1]];
    if (
      val &&
      val === board[lines[i][1][0]][lines[i][1][1]] &&
      val === board[lines[i][2][0]][lines[i][2][1]]
    ) {
      document.getElementById("message").innerText = players[val] + " ganhou!";
      gameActive = false;
      return;
    }
  }
  if (
    board.reduce(
      (acc, row) => acc + row.filter((cell) => cell === null).length,
      0
    ) === 0
  ) {
    document.getElementById("message").innerText = "Empate!";
    gameActive = false;
  }
}
