const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementById('colors');
const reticles = document.getElementById('reticles');
const reticleColor = document.querySelectorAll('.reticle-color');
const trash = document.getElementById('trash');
let isPainting = false;
const saveBtn = document.getElementById('save-btn');
const red = 'rgb(252, 34, 43)';
const green = 'rgb(62, 178, 78)';
const purple = 'rgb(79, 33, 138)';
const yellow = 'rgb(254, 203, 47)';
const modal = document.getElementById('instructions');

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', paint);
colors.addEventListener('click', changeColor);
saveBtn.addEventListener('click', saveImg);
reticles.addEventListener('click', setReticleSize);
trash.addEventListener('click', clearCanvas);
modal.addEventListener('load', openModal);


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
    ctx.strokeStyle = red;
    ctx.shadowColor = red;
    setReticleColor(red);
    break;
    case 'green':
    ctx.strokeStyle = green;
    ctx.shadowColor = green;
    setReticleColor(green);
    break;
    case 'purple':
    ctx.strokeStyle = purple;
    ctx.shadowColor = purple;
    setReticleColor(purple);
    break;
    case 'yellow':
    ctx.strokeStyle = yellow;
    ctx.shadowColor = yellow;
    setReticleColor(yellow);
    break;
  }
}

function setReticleSize() {
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

function setReticleColor(color) {
  for (let i = 0; i < reticleColor.length; i++) {
    reticleColor[i].style.backgroundColor = color;
  }
}

function start() {
  ctx.strokeStyle = red;
  ctx.shadowColor = red;
  ctx.shadowOffsetX= 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 10;
  ctx.lineWidth = 20;
  openModal();
}

function saveImg() {
  const dataURL = canvas.toDataURL('image/png');
  saveBtn.setAttribute('href', dataURL);
}

function clearCanvas() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
}

function openModal(){
  modal.showModal();
}

start();
