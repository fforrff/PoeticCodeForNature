let t = 0;

var rw = 2;
var rh = 100;
var ry = 230;
var cy = 180;
var cd = 100;
var f = 300;
var fd = 1;


function setup() {
  pixelDensity(1);
  createCanvas(600, 300);
  background(200);

}

function balloon() {
  for (var x = 75; x <= width; x += 150) {
    fill(random(255), random(128), random(255));
    ellipse(x, cy, cd, cd);
  }
  for (var y = 75; y <= width; y += 150) {
    rect(y, ry, rw, rh);
  }
}

function draw() {
  loadPixels();

  let s = map(mouseX, 0, width, 0, 0.01);

  for (let j=0; j<height; j++) {
    for (let i=0; i<width; i++) {
      let idx = (width*j+i)*4;

      let c = map(noise((i+t)*s, j*s), 0,1,0,255);
      let c2 = random ((j+t)*s, i+s, 0.1, 0, 255);

      pixels[idx+0] = c;

      pixels[idx+3] = 255;
      pixels[idx+4] = c2;

    }

  t = t + 0.1;
  updatePixels();
  stroke(255);
  strokeWeight(5);
  balloon();

 for (var g = 0; g <= width; g += 10) {
ellipse(random(g), random(f), fd, fd);

  }

  }
}
  
