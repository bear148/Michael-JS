import { testCollide } from "../functions/detect_collision.js";

export default class Player {
  constructor(game) {
    this.game_width = game.game_width;
    this.game_height = game.game_height;
    this.game = game
    this.position = {
      x: this.game_width / 2,
      y: this.game_height / 2,
      w: 64,
      h: 64
    }
    this.sprite = document.getElementById("player_sprite");
    this.sprite_width = 64;
    this.sprite_height = 64;
    this.speedx = 0;
    this.speedy = 0;
    this.maxspeed = 5;
    this.collision = false;
  }

  move_left() {
    if (!this.collision) {
      this.speedx = -this.maxspeed;
    }
  }

  move_right() {
    if (!this.collision) {
      this.speedx = this.maxspeed; 
    }
  }

  move_down() {
    if (!this.collision) {
      this.speedy = this.maxspeed; 
    }
  }

  move_up() {
    if (!this.collision) {
      this.speedy = -this.maxspeed;      
    }
  }

  stop() {
    this.speedx = 0;
    this.speedy = 0;
  }

  draw(context) {
    context.drawImage(this.sprite, this.position.x, this.position.y, this.sprite_width, this.sprite_height);
  }

  update(delta_time) {
    this.position.x += this.speedx;
    this.position.y += this.speedy;

    // Left and Right wall collision
    if(this.position.x < 0) this.position.x = 0;
    if(this.position.x + this.sprite_width > this.game_width) this.position.x = this.game_width - this.sprite_width;

    // Top and bottom wall collision
    if(this.position.y < 0) this.position.y = 0;
    if(this.position.y + this.sprite_height > this.game_height) this.position.y = this.game_height - this.sprite_height;

    if (this.speedy >= 5 || this.speedx >= 5) {
      this.speedy == 5;
      this.speedx == 5;
    }

    if(testCollide(this, this.game.wall)) {
      this.speedy = 0;
      this.speedx = 0;
      this.collision = true;
		} else {
      this.collision = false;
    }
  }
}