export function get_mouse_location(event){
	var rect = event.target.getBoundingClientRect();
	var loc = [
		Math.floor(1600*(event.clientX-rect.left)/(rect.right-rect.left)),
		Math.floor(791*(event.clientY-rect.top)/(rect.bottom-rect.top))
	]
	return loc;
}