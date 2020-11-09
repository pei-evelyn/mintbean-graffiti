const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementById('colors');
const reticles = document.getElementById('reticles');
let isPainting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', paint);
colors.addEventListener('click', changeColor);
reticles.addEventListener('click', changeReticle);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
  ctx.lineCap = 'round';
  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
}

function changeColor() {
  switch (event.target.id) {
    case 'red':
    ctx.strokeStyle = 'rgb(252, 34, 43)';
    break;
    case 'green':
    ctx.strokeStyle = 'rgb(62, 178, 78)';
    break;
    case 'purple':
    ctx.strokeStyle = 'rgb(79, 33, 138)';
    break;
    case 'yellow':
    ctx.strokeStyle = 'rgb(254, 203, 47)';
    break;
  }
}

function changeReticle() {
  switch (event.target.id) {
    case 'reticle-1':
      ctx.lineWidth = 10;
      break;
    case 'reticle-2':
      ctx.lineWidth = 20;
      break;
    case 'reticle-3':
      ctx.lineWidth = 30;
      break;
  }
}

function start() {
  ctx.strokeStyle = 'rgb(252, 34, 43)';
  ctx.lineWidth = 20;
}

start();
