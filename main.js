const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementById('colors');
const reticles = document.getElementById('reticles');
const reticleColor = document.querySelectorAll('.reticle-color');
const trash = document.getElementById('trash');
const saveBtn = document.getElementById('save-btn');
const red = 'rgb(252, 34, 43)';
const green = 'rgb(62, 178, 78)';
const purple = 'rgb(79, 33, 138)';
const yellow = 'rgb(254, 203, 47)';
const colorInput = document.getElementById('color-input');
const colorModal = document.getElementById('color-modal');
const colorModalClose = document.getElementById('close-color');
let isPainting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', paint);
colors.addEventListener('click', handleColorClick);
saveBtn.addEventListener('click', saveImg);
reticles.addEventListener('click', setReticleSize);
trash.addEventListener('click', clearCanvas);
colorInput.addEventListener('focusout', handleColorClick);
colorModalClose.addEventListener('click', closeColorModal);

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

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

function handleColorClick() {
  switch (event.target.id) {
    case 'red':
      setColor(red);
    break;
    case 'green':
      setColor(green);
    break;
    case 'purple':
      setColor(purple);
    break;
    case 'yellow':
      setColor(yellow);
    break;
    default:
      openColorModal();
      setColor(colorInput.value);
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

function setColor(color) {
  ctx.strokeStyle = color;
  ctx.shadowColor = color;
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
}

function saveImg() {
  const dataURL = canvas.toDataURL('image/png');
  saveBtn.setAttribute('href', dataURL);
}

function clearCanvas() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
}

function openColorModal() {
  colorModal.classList.add('show', 'd-block');
}

function closeColorModal() {
  colorModal.classList.remove('show', 'd-block')
}

start();
