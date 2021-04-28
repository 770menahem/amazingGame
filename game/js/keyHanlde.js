function setKey(player, key, up, down, left, right) {
  switch (key) {
    case up:
      if (player.dir !== "DOWN") player.key = "UP";

      break;
    case down:
      if (player.dir !== "UP") player.key = "DOWN";

      break;
    case left:
      if (player.dir !== "RIGHT") player.key = "LEFT";

      break;
    case right:
      if (player.dir !== "LEFT") player.key = "RIGHT";

      break;
    default:
      break;
  }
}

function handleKeyPress(event) {
  if (keysOne.includes(event.keyCode)) event.preventDefault();

  Player.allInstances.map((p) => {
    setKey(p, event.keyCode, ...p.keys);
  });
}
