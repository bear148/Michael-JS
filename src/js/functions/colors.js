export function get_random_color() {
  return "rgb("+Math.floor(Math.random()*255)+","
    +Math.floor(Math.random()*255)+","
    +Math.floor(Math.random()*255)+")"
}

export function get_color(ctx,location){
	var data=ctx.getImageData(location[0],location[1],1,1);
	return "rgb("+data.data[0]+","
		+data.data[1]+","
		+data.data[2]+")"
}