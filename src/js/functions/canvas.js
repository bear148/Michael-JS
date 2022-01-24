export function init_canvas(canvas, size) {
  var canvas=document.getElementById(canvas);
  canvas.width=size[0];
  canvas.height=size[1];
  return canvas;
}

export function get_canvas(canvas) {
  return canvas;
}