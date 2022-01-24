export default class Button {
	constructor(name,location,width,height,color){
		this.location=location;
		this.width=width;
		this.height=height;
		this.color=color;
		this.name=name;
	}

	draw(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.lineWidth=10;
		ctx.fillStyle=this.color;
		ctx.translate(this.location[0],this.location[1]);
		ctx.rect(-this.width/2,-this.height/2,this.width,this.height);
		ctx.stroke();
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle="black";
		ctx.font=(this.height*0.5)+"px Arial";
		ctx.textAlign="center";
		ctx.textBaseline="middle";
		ctx.fillText(this.name,0,0);
		ctx.restore();
	}
	
	draw_hit_area(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle=this.color;
		ctx.translate(this.location[0],this.location[1]);
		ctx.rect(-this.width/2,-this.height/2,this.width,this.height);
		ctx.fill();
		ctx.restore();
	}
}