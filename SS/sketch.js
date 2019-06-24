var stars = [];
var shootingStar;

function setup() {
  shootingStar = new ShootingStar();

  createCanvas(windowWidth, windowHeight);
  frameRate(10);

  for (var i = 0; i < 50; i++) {
    stars.push(new Star());
}
}


function draw() {

  background(220);

  var color1 = color(0, 0, 153);
  var color2 = color(204, 51, 0);

  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

 for (var i = 0; i < 50; i++) {
    stars[i].draw();
}

  var x = random(windowWidth);
  var y = random(windowHeight-200);

   shootingStar.draw();

  noStroke();
  fill(255, 255, 0);
  ellipse(this.x, this.y, this.w, this.h);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  else if (axis == "X") {
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}

  function Star() {
   this.w = 2;
   this.h = 2;
   this.x = random(windowWidth);
   this.y = random(windowHeight-200);

}

Star.prototype.draw = function() {
 noStroke();
 fill(255, 255, 0);
 ellipse(this.x, this.y, 2, 2);

  this.x += (random(10) - 5);
  this.y += (random(10) - 5);

  if (this.w == 2) {
    this.w = 3;
    this.h = 3;
} else {
    this.w = 2;
    this.h = 2;
}
}

function ShootingStar() {
  this.x = random(windowWidth-200);
  this.y = random(windowHeight-400);
  this.w = 6;
  this.h = 4;
}

ShootingStar.prototype.draw = function() {
  noStroke();
  fill(255, 255, 0);
  ellipse(this.x, this.y, this.w, this.h);

  if (this.h > 0) {
    this.h -= 0.5;
  }

  this.w += 7;
  this.x += 5;
}
