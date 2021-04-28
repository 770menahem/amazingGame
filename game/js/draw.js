const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const wallLength = 10;
let walls = [];

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPlayer(p) {
  drawPoint(p);
  drawHead(p);
}

function drawHead(p) {
  context.fillStyle = p.color;
  context.fillRect(p.x, p.y, unit, unit);

  const bang = new Image();
  bang.src = p.img;
  context.drawImage(bang, p.x, p.y, unit, unit);
}

function drawPoint(p) {
  context.fillStyle = p.color;
  context.fillRect(p.lastX, p.lastY, unit, unit);
}

function drawWall(wall) {
  context.fillStyle = "burlywood";
  context.fillRect(wall.lastX, wall.lastY, unit, unit);

  const wallImg = new Image();
  wallImg.src = "../img/1.png";
  context.drawImage(wallImg, wall.lastX, wall.lastY, unit, unit);
}

function drawEndGameBtn(winner, winMsg) {
  context.fillStyle = winner.color || "white";
  context.fillRect(btn.x, btn.y, btn.width, btn.height);

  context.font = "25px Georgia";
  context.fillStyle = "black";
  context.fillText(winMsg, canvas.width / 2 - 150, canvas.height / 2 - 10);

  context.fillRect(canvas.width / 2 - 75, canvas.height / 2 - 5, 165, 35);

  context.font = "25px Georgia";
  context.fillStyle = "white";
  context.fillText("playAgain", canvas.width / 2 - 45, canvas.height / 2 + 20);
}
