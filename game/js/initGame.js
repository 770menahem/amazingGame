const keysOne = [38, 40, 37, 39];
const keysTwo = [87, 83, 65, 68];
const unit = 15;

const playerOne = new Player(
  unit * 3,
  unit * 3,
  "#75A4FF",
  "צוות היימן",
  keysOne,
  "../img/bang.png"
);

const playerTwo = new Player(
  unit * 25,
  unit * 25,
  "#754554",
  "צוות SDI",
  keysTwo,
  "../img/logo.png"
);

let playerCount;
let playableCells = new Set();

loadFromLocalStorage();

Player.allInstances.forEach((p) => {
  drawPlayer(p);
  p.positions.forEach((o) => drawPoint({ color: p.color, ...o }));
});

walls.forEach((w) => drawWall(w));

updatePoint();

window.addEventListener("keydown", handleKeyPress);

let game = setInterval(gameRun, 100);

if (playerCount <= 1) resetGame();

function getPlayableCells(canvas, unit) {
  const playable = new Set();

  for (let i = 0; i < canvas.width / unit; i++) {
    for (let y = 0; y < canvas.height / unit; y++) {
      playable.add(`${i * unit}x${y * unit}y`);
    }
  }

  return playable;
}
