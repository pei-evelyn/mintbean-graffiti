const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementById('colors');
const reticles = document.getElementById('reticles');
const reticleColor = document.querySelectorAll('.reticle-color');
let isPainting = false;
const saveBtn = document.getElementById('save-btn');
const red = 'rgb(252, 34, 43)';
const green = 'rgb(62, 178, 78)';
const purple = 'rgb(79, 33, 138)';
const yellow = 'rgb(254, 203, 47)';

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', paint);
colors.addEventListener('click', changeColor);
saveBtn.addEventListener('click', saveImg);
reticles.addEventListener('click', setReticleSize);

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
}

function saveImg() {
  const dataURL = canvas.toDataURL('image/png');
  saveBtn.setAttribute('href', dataURL);
}


start();

/*
(function() {

	var canvas = document.querySelector('#paint');
	var ctx = canvas.getContext('2d');

	var sketch = document.querySelector('#sketch');
	var sketch_style = getComputedStyle(sketch);
	canvas.width = parseInt(sketch_style.getPropertyValue('width'));
	canvas.height = parseInt(sketch_style.getPropertyValue('height'));


	// Creating a tmp canvas
	var tmp_canvas = document.createElement('canvas');
	var tmp_ctx = tmp_canvas.getContext('2d');
	tmp_canvas.id = 'tmp_canvas';
	tmp_canvas.width = canvas.width;
	tmp_canvas.height = canvas.height;

	sketch.appendChild(tmp_canvas);

	var mouse = {x: 0, y: 0};
	var start_mouse = {x: 0, y: 0};
	var last_mouse = {x: 0, y: 0};

	var sprayIntervalID;


	/* Mouse Capturing Work */
	// tmp_canvas.addEventListener('mousemove', function(e) {
	// 	mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
	// 	mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
	// }, false);


	/*
	tmp_ctx.lineWidth = 5;
	tmp_ctx.lineJoin = 'round';
	tmp_ctx.lineCap = 'round';
	tmp_ctx.strokeStyle = 'blue';
	tmp_ctx.fillStyle = 'blue';

	tmp_canvas.addEventListener('mousedown', function(e) {
		tmp_canvas.addEventListener('mousemove', onPaint, false);

		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

		start_mouse.x = mouse.x;
		start_mouse.y = mouse.y;

		onPaint();
		sprayIntervalID = setInterval(onPaint, 50);
	}, false);

	tmp_canvas.addEventListener('mouseup', function() {
		tmp_canvas.removeEventListener('mousemove', onPaint, false);

		// Writing down to real canvas now
		ctx.drawImage(tmp_canvas, 0, 0);
		// Clearing tmp canvas
		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);

		clearInterval(sprayIntervalID);
	}, false);

	var onPaint = function() {

		// Tmp canvas is always cleared up before drawing.
		// tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);

		var x = mouse.x;
		var y = mouse.y;

		generateSprayParticles();
	};

	var getRandomOffset = function(radius) {
		var random_angle = Math.random() * (2*Math.PI);
		var random_radius = Math.random() * radius;

		// console.log(random_angle, random_radius, Math.cos(random_angle), Math.sin(random_angle));

		return {
			x: Math.cos(random_angle) * random_radius,
			y: Math.sin(random_angle) * random_radius
		};
	};

	var generateSprayParticles = function() {
		// Particle count, or, density
		var density = 50;

		for (var i = 0; i < density; i++) {
			var offset = getRandomOffset(10);

			var x = mouse.x + offset.x;
			var y = mouse.y + offset.y;

			tmp_ctx.fillRect(x, y, 1, 1);
		}
	};

}());
*/
