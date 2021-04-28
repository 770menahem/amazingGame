function hasDistance(wall) {
  return (
    Player.allInstances.filter(
      (p) =>
        p.x + wallLength * unit < wall.lastX ||
        p.y + wallLength * unit < wall.lastY ||
        p.x - wallLength * unit > wall.lastX ||
        p.y - wallLength * unit > wall.lastY
    ).length === 2
  );
}

function randomWall() {
  const walls = [];

  // Generate start point of wall
  while (walls.length < 10) {
    const wall = {};
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    wall.lastX = parseInt(x - (x % unit));
    wall.lastY = parseInt(y - (y % unit));

    if (hasDistance(wall)) {
      walls.push(wall);
    }
  }

  // Draw wall from start pont to wallLength points
  walls.map((wall) => {
    let dir = parseInt(Math.random() * 100) % 2 === 0;

    for (let i = 0; i < wallLength; i++) {
      walls.push({ lastX: wall.lastX, lastY: wall.lastY, color: "black" });

      playableCells.delete(`${wall.lastX}x${wall.lastY}y`);

      if (i % 3 === 0) dir = parseInt(Math.random() * 100) % 2 === 0;
      dir ? (wall.lastX += unit) : (wall.lastY += unit);
    }
  });

  saveWallsToLocalStorage(walls);

  return walls;
}
