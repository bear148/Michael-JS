export default class InputHandler {
	constructor(obj, game) {
		document.addEventListener('keydown', (event) => {
			switch(event.keyCode){
				case 37:
					obj.move_left();
					break;
        case 38:
          obj.move_up();
          break;
				case 39:
					obj.move_right();
					break;
        case 40:
          obj.move_down();
          break;
				case 27:
					game.toggle_pause();
					break;
				/*case 32:
					game.start();*/
			}
		});
		document.addEventListener('keyup', (event) => {
			switch(event.keyCode){
				case 37:
					if(obj.speedx < 0)
            obj.stop();
					break;
				case 39:
					if (obj.speedx > 0)
					  obj.stop();
					break;
        case 38:
          if(obj.speedy < 0)
            obj.stop();
          break;
        case 40:
          if(obj.speedy > 0)
            obj.stop();
          break;
			}
		});
	}
}