function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
	// Check x and y for overlap
	if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
			return false;
	}
	return true;
}

export function detectCollision(game_obj1, game_obj2) {
	// Collision Calculation
	let bottom_obj = game_obj1.position.y + game_obj1.size;
	let top_obj = game_obj1.position.y;

	let top_of_object = game_obj2.position.y;
	let left_object = game_obj2.position.x;
	let right_object = game_obj2.position.x + game_obj2.width;
	let bottom_object = game_obj2.position.y + game_obj2.height;

	if(bottom_obj >= top_of_object && top_obj <= bottom_object && game_obj1.position.x >= left_object && game_obj1.position.x + game_obj1.size <= right_object) {
		return true;
	} else {
		return false;
	}
}

export function testCollide(obj1, obj2) {
	if (rectIntersect(obj1.position.x, obj1.position.y, obj1.position.w, obj1.position.h, obj2.position.x, obj2.position.y, obj2.position.w, obj2.position.h)){
		return true;
	} else {
		return false;
	}
}

export function isCollide(a, b) {
	var aRect = a.getBoundingClientRect();
	var bRect = b.getBoundingClientRect();

	return !(
			((aRect.top + aRect.height) < (bRect.top)) ||
			(aRect.top > (bRect.top + bRect.height)) ||
			((aRect.left + aRect.width) < bRect.left) ||
			(aRect.left > (bRect.left + bRect.width))
	);
}