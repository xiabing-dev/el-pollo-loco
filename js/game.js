let contextPath = "/";
let canvas;
let ctx;
let world;

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d"); 
  world = new World(canvas);
}

function fullScreen() {
  canvas.requestFullscreen();
}

function restart() {
  location.reload();
  return false;
}