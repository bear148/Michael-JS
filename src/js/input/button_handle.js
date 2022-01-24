import Button from './../classes/button.js';
import { get_mouse_location } from './mouse.js';
import { get_color } from './../functions/colors.js';
import { start_stuff, config_gamestate, reset_player_data } from '../main.js';

var SIZE = 1000;
var CANVAS = document.getElementById("game_canvas");

export default class ButtonHandler {
	static buttons=[];
	static hitTestCanvas = document.getElementById("this.game_canvas");// = createElement.... ("canvas");

	static createButton(name,location,width,height,color){
		ButtonHandler.buttons.push(new Button(name,location,width,height,color));
	}
	
	static drawButtons(ctx){
		for(var i=0;i<ButtonHandler.buttons.length;i++){
			ButtonHandler.buttons[i].draw(ctx);
		}
	}
	
	static addEventListeners(canvas){
		canvas.addEventListener("mousedown",ButtonHandler.onMouseDown);
		canvas.addEventListener("mousemove",ButtonHandler.onMouseMove);
	}
	
	static onMouseDown(event){
		var location=get_mouse_location(event);
		var color=get_color(game_canvas.getContext("2d"),location);
		var button=ButtonHandler.isHovering(color);
		if(button.name == "Start"){
			start_stuff();
		} else if (button.name == "Back") {
			reset_player_data();
			config_gamestate(2);
		} else if (button.name == "Credits") {
			config_gamestate(6);
		}
	}

	static onMouseMove(event){
		var location=get_mouse_location(event);
		var color=get_color(game_canvas.getContext("2d"),location);
		
		if(ButtonHandler.isHovering(color)){
			CANVAS.style.cursor="pointer";
		}else{
			CANVAS.style.cursor="auto";
		}
	}
	
	static isHovering(color){
		for(var i=0;i<ButtonHandler.buttons.length;i++){
			if(ButtonHandler.buttons[i].color==color){
				return ButtonHandler.buttons[i];
			}
		}
		return false;
	}

	static clearButtons() {
		ButtonHandler.buttons = [];
	}
}