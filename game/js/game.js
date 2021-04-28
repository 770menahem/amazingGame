function gameRun() {
  if (playerCount <= 1) finishGame();

  if (Player.allInstances.every((p) => p.key)) {
    Player.allInstances.forEach((p) => {
      p.dir = p.key;

      drawPlayer(p);

      if (!playableCells.has(`${p.x}x${p.y}y`) && !p.dead) {
        p.dead = true;
        p.dir = "";
        playerCount--;
      }

      p.positions.push({ lastX: p.x, lastY: p.y });
      playableCells.delete(`${p.x}x${p.y}y`);

      if (!p.dead) {
        p.lastX = p.x;
        p.lastY = p.y;

        if (p.dir == "LEFT") p.x -= unit;
        if (p.dir == "UP") p.y -= unit;
        if (p.dir == "RIGHT") p.x += unit;
        if (p.dir == "DOWN") p.y += unit;
      }
    });

    saveToLocalStorage();
  }
}

function resetGame() {
  clearCanvas();

  playableCells = getPlayableCells(canvas, unit);

  Player.allInstances.forEach((p) => reset(p));

  playerCount = Player.allInstances.length;

  walls = randomWall();
  walls.forEach((w) => drawWall(w));

  Player.allInstances.forEach((p) => drawPlayer(p));

  updatePoint();

  clearInterval(game);

  game = setInterval(gameRun, 100);
}
