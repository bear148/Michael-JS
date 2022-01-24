function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
	// Check x and y for overlap
	if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
			return false;
	}
	return true;
}

export function testCollide(obj1, obj2) {
	if (rectIntersect(obj1.position.x, obj1.position.y, obj1.position.w, obj1.position.h, obj2.position.x, obj2.position.y, obj2.position.w, obj2.position.h)){
		return true;
	} else {
		return false;
	}
}