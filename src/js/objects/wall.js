export default class Wall {
	constructor(game) {
		this.image = document.getElementById("wall");
		this.position = {
			x: 400,
			y: 400,
			w: 64,
			h: 64
		};
		this.game =  game;
		this.width = 64;
		this.height = 64;
	}

	update(delta_time) {
		// foo
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}
}