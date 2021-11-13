// Tutorial from https://daily-dev-tips.com/posts/javascript-mouse-drawing-on-the-canvas/

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

function resize() {
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
}

resize();

function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}

function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function draw(event) {
  context.beginPath();
  context.lineWidth = 10;
  context.lineCap = "round";

  let gradient = context.createLinearGradient(100, 0, canvas.width - 50, 0);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.2, "magenta");
  gradient.addColorStop(0.4, "blue");
  gradient.addColorStop(0.6, "green");
  gradient.addColorStop(1, "yellow");
  context.shadowBlur = 30;
  context.shadowColor = "grey";
  context.fillStyle = gradient;
  context.strokeStyle = gradient;

  context.moveTo(coord.x, coord.y);
  reposition(event);
  context.lineTo(coord.x, coord.y);
  context.stroke();
}
