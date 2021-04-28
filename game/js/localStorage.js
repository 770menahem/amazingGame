function loadFromLocalStorage() {
  playerCount =
    localStorage.getItem("playerCount") || Player.allInstances.length;

  walls = JSON.parse(localStorage.getItem("walls")) || randomWall();

  Player.allInstances =
    JSON.parse(localStorage.getItem("players")) || Player.allInstances;

  const jsonArr = JSON.parse(localStorage.getItem("playableCellsArr"));

  jsonArr
    ? jsonArr.forEach((c) => playableCells.add(c))
    : (playableCells = getPlayableCells(canvas, unit));
}

function saveToLocalStorage() {
  const players = JSON.parse(JSON.stringify(Player.allInstances));
  players.forEach((p) => (p.key = ""));
  localStorage.players = JSON.stringify(players);

  localStorage.playerCount = playerCount;

  const playableCellsArr = [];
  playableCells.forEach((c) => playableCellsArr.push(c));
  localStorage.playableCellsArr = JSON.stringify(playableCellsArr);
}

function saveWallsToLocalStorage(walls) {
  localStorage.walls = JSON.stringify(walls);
}
