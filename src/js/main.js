import Game from './game.js';

let game_canvas = document.getElementById("game_canvas");
let bound_rect = document.getElementById("container");
let context = game_canvas.getContext("2d");
let game_overlay_ = document.getElementById("overlay")

const GAME_WIDTH = 1600;
const GAME_HEIGHT = 791;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, game_canvas, game_overlay_);
let lastTime = 0;

// Exports
export function get_game_class() {
  return new Game(GAME_WIDTH, GAME_HEIGHT, game_canvas, game_overlay_);
}

export function start_stuff() {
	game.start();
}

export function config_gamestate(gamestate_int) {
  game.change_gamestate(gamestate_int);
}

export function game_function(function_to_run) {
  game.function_to_run();
}

export function reset_player_data() {
  game.player.position.x = GAME_WIDTH / 2;
  game.player.position.y = GAME_HEIGHT / 2;
}

// Other Stuff
function init_stuff(overlay) {
  overlay.style.display = "none";
}

function get_game_canvas() {
 return game_canvas;
}

function game_loop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime, game_canvas);
  game.draw(context);
  requestAnimationFrame(game_loop);
}

requestAnimationFrame(game_loop);
init_stuff(game_overlay_);