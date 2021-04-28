// get the mouse position
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

// check whether a point is inside a rectangle
function isInside(pos, rect) {
  return (
    pos.x > rect.x &&
    pos.x < rect.x + rect.width &&
    pos.y < rect.y + rect.height &&
    pos.y > rect.y
  );
}

const btn = {
  x: canvas.width / 2 - 155,
  y: canvas.height / 2 - 35,
  width: 355,
  height: 80,
};

function finishGame() {
  const left = Player.allInstances.filter((p) => !p.dead);
  let winner =
    left[0] || Player.allInstances[parseInt((Math.random() * 10) % 2)];

  winner.win++;

  const winMsg = `Game Over, winner is: ${winner.name}`;

  drawEndGameBtn(winner, winMsg);

  canvas.addEventListener("click", (event) => {
    if (isInside(getMousePos(canvas, event), btn)) resetGame();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key == "Enter" && playerCount <= 1) resetGame();
  });

  clearInterval(game);
}
