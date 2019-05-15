function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 지구에 UFO가 나타났다");
  title.position(20, 0);

  canvas = createCanvas(300, 300);
  canvas.position(20, 60);
  canvas.class("artwork");

  description = "\
  산을 배경으로 UFO가 날아다니는 모습을 그려봤습니다.\
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "11pt");

}

let x, y;
let x2, y2;
let xoff;

function setup() {
  createCanvas(500, 500);
  background(0,10,200,20);
  rectMode(CENTER);
  xoff = 5;
  x = 4;
  x2 = 500;

  y = height;
  y2 = 360;

}


function draw() {
  fill(0);
  rect(x, y, 6, 6);
  rect(x2, y2, 6, 6);

  fill(20, 30, 50, 20);
  ellipse(mouseX, mouseY, 50, 50);
  ellipse(mouseX, mouseY, 191, 20);

  x = x + 1;
  x2 = x2 - 1;

 y = y + random(-1, 1);
  y2 = y2 + random(1, -1);

 y = noise (xoff)*90;
  y2 = noise (xoff)*40;

  xoff = xoff + 0.01;



}
