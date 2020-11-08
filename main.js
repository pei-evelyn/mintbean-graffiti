const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementById('colors');
let isPainting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', paint);
colors.addEventListener('click', changeColor);

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

function start() {
  ctx.strokeStyle = 'rgb(252, 34, 43)';
}

start();
