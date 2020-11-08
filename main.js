const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const red = document.getElementById('red');
const green = document.getElementById('green');
const purple = document.getElementById('purple');
const yellow = document.getElementById('yellow');
let isPainting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', paint);
red.addEventListener('click', changeToRed);
green.addEventListener('click', changeToGreen);
purple.addEventListener('click', changeTopPurple);
yellow.addEventListener('click', changeToYellow);

function startPosition() {
  isPainting = true;
  paint(event);
}

function finishedPosition() {
  isPainting = false;
  ctx.beginPath();
}

function paint() {
  if (!isPainting) return;
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
}

function changeToRed() {
  ctx.strokeStyle = 'rgb(252, 34, 43)';
}

function changeToGreen() {
  ctx.strokeStyle = 'rgb(62, 178, 78)';
}
function changeTopPurple() {
  ctx.strokeStyle = 'rgb(79, 33, 138)';
}
function changeToYellow() {
  ctx.strokeStyle = 'rgb(254, 203, 47)';
}

function start() {
  ctx.strokeStyle = 'rgb(252, 34, 43)';
}

start();
