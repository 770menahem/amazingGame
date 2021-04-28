class Player {
  constructor(x, y, color, name, keys, img) {
    this.name = name;
    this.color = color || "#fff";
    this.keys = keys;
    this.x = x;
    this.y = y;
    this.lastY = y;
    this.lastX = x;
    this.startX = x;
    this.startY = y;
    this.dir = "";
    this.key = "";
    this.dead = false;
    this.img = img;
    this.win = 0;
    this.positions = [{ lastX: x, lastY: y }];

    this.constructor.count = (this.constructor.count || 0) + 1;
    this._id = this.constructor.count;

    Player.allInstances.push(this);
  }
}

function reset(player) {
  player.x = player.startX;
  player.y = player.startY;
  player.lastX = player.x;
  player.lastY = player.y;
  player.dead = false;
  player.dir = "";
  player.key = "";
  player.positions = [{ lastX: player.startX, lastY: player.startY }];
}

Player.allInstances = [];
