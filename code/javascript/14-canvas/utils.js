const colors = ['#227c9d', '#17c3b2', '#ffcb77', '#fef9ef', '#fe6d73', '#118ab2', '#06d6a0', '#ef476f', '#f9844a', '#90be6d', '#00b4d8', '#caf0f8', '#e76f51', '#457b9d'];


function getRandomColor() {
  return colors[getRandomNumber(0, colors.length)];
}

function getRandomNumber(start, end) {
  return Math.floor(Math.random() * end) + start;
}



function toWindowPosition(canvas, x, y) {
  const { left, top, width, height } = canvas.getBoundingClientRect();
  return {
    x: x - left * (canvas.width / width),
    y: y - top * (canvas.height / height)
  }
}


function getDistance(x1, y1, x2, y2) {
  const { dx, dy } = getDxy(x1, y1, x2, y2);
  return Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
}



function getDxy(x1, y1, x2, y2) {
  return {
    dx: x1 - x2,
    dy: y1 - y2
  };
}


function Ball(canvas, x, y, r, color = '#e76f51') {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.isSelected = false;
  this.lastLocation = { x, y };
}

Ball.prototype.draw = function () {
  this.ctx.save();
  this.ctx.beginPath();
  this.ctx.fillStyle = this.color;
  this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();
}


Ball.prototype.selected = function (x, y) {
  this.isSelected = true;
  this.lastLocation = { x, y };
}

Ball.prototype.unSelected = function () {
  this.lastLocation = { x: this.x, y: this.y };
  this.isSelected = false;
}


Ball.prototype.updateLocation = function (x, y) {
  this.x = x;
  this.y = y;
}


Ball.prototype.setLastLocation = function (lx, ly) {
  this.lastLocation = { x: lx, y: ly };
}


function drawLine(ctx, x1, y1, x2, y2, color = '#264653') {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}