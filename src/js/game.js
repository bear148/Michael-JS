
import InputHandler from './input/input_handle.js';
import Player from './objects/player.js';
import Button from './classes/button.js';
import ButtonHandler from './input/button_handle.js';
import { init_canvas } from './functions/canvas.js';
import { get_random_color } from '../js/functions/colors.js';
import Wall from './objects/wall.js';

// All classes that use the input handler for movement must have
// moveleft, moveright, and stop functions

const GAMESTATE = {
	PAUSED: 0,
	RUNNING: 1,
	MENU: 2,
	GAMEOVER: 3,
	NEWLEVEL: 4,
	WIN: 5,
  CREDITS_MENU: 6
}

var test_wall = {
  x: 600,
  y: 600
}

var menu_start_button = {
  x: 250,
  y: 250,
  width: 200,
  height: 100
};

export default class Game {
  constructor(game_width, game_height, game_canvas, overlay) {
    this.game_width = game_width;
    this.game_height = game_height;
    this.game_objects = [];
    this.gamestate = GAMESTATE.MENU;
    this.player = new Player(this);
    this.wall = new Wall(this);
    this.game_canvas = game_canvas;
    this.overlay = overlay;
    this.menu_start_button = menu_start_button;
    new InputHandler(this.player, this);
    this.start_button = new Button("Start", [this.game_width / 2, 250], 300, 50, "blue");
    this.color = get_random_color();
    this.color2 = get_random_color();
  }

  start() {
    // init game objects
    if(this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return;
    this.game_objects = [
      this.player,
      this.wall
    ];
    this.gamestate = GAMESTATE.RUNNING;
  }

  update(delta_time) {
    this.game_objects.forEach(object => object.update(delta_time));
  }

  draw(context) {
    this.game_objects.forEach(object => object.draw(context));
    switch (this.gamestate) {
      case GAMESTATE.MENU:
        context.rect(0,0,this.game_width, this.game_height);
        context.fillStyle = "rgba(100,0,0,1)";
        context.fill();
        context.font = "64px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText("? Michael ?", this.game_width / 2, 191);
        context.font = "24px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText("v1.0.0", 33, 789);
        ButtonHandler.clearButtons();
        let hit_test_canvas2 = init_canvas("hitTestCanvas", [this.width, this.height])
        ButtonHandler.hitTestCanvas = hit_test_canvas2;
        ButtonHandler.createButton("Start",[this.game_width/2,300],200,100,"rgb(0,255,0)");
        ButtonHandler.createButton("Credits",[this.game_width/2,450],200,100,"rgb(0,0,255)");
        ButtonHandler.addEventListeners(this.game_canvas);
        var ctx = this.game_canvas.getContext("2d");
        ButtonHandler.drawButtons(ctx);
        break;
      case GAMESTATE.RUNNING:
        ButtonHandler.clearButtons();
        let hit_test_canvas1 = init_canvas("hitTestCanvas", [this.width, this.height])
        ButtonHandler.hitTestCanvas = hit_test_canvas1;
        ButtonHandler.createButton("Back",[1525,50],100,50,"rgb(132,0,0)");
        ButtonHandler.addEventListeners(this.game_canvas);
        var ctx = this.game_canvas.getContext("2d");
        ButtonHandler.drawButtons(ctx);
        break;
      case GAMESTATE.CREDITS_MENU:
        context.rect(0,0,this.game_width, this.game_height);
        context.fillStyle = "rgba(100,0,0,1)";
        context.fill();
        context.font = "64px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText("? Michael ?", this.game_width / 2, 191);
        context.fillText("- Credits -", this.game_width / 2, 260);
        ButtonHandler.clearButtons();
        let hit_test_canvas3 = init_canvas("hitTestCanvas", [this.width, this.height])
        ButtonHandler.hitTestCanvas = hit_test_canvas3;
        ButtonHandler.createButton("Back",[1525,50],100,50,"rgb(132,0,0)");
        ButtonHandler.addEventListeners(this.game_canvas);
        var ctx = this.game_canvas.getContext("2d");
        ButtonHandler.drawButtons(ctx);  
        break
    }
  }

  remove_overlay(overlay) {
    overlay.style.display = "none";
  }

  get_canvas() {
    return this.game_canvas;
  }

  static start_game() {
    Game.start();
  }

  change_gamestate(gamestate) {
    if (gamestate === 2) {
      this.gamestate = GAMESTATE.MENU;
    } else if (gamestate === 6) {
      this.gamestate = GAMESTATE.CREDITS_MENU;
    }
  }
}