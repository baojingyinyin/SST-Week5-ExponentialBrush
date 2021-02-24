let d=1;
let x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color('#0F4C81'));
}

function draw() {
  x = pow(2, d);
  if(mouseIsPressed){
    strokeWeight(1);
    stroke(254, 197, 208);
    noFill();
     // fill(254, 197, 208, 0.5,0.5);
  ellipse(mouseX, mouseY, x, x);
  // prevent default
  return false;
  }
if (x>windowWidth){
  d=1;
}
  
  }

function mousePressed() {
  d = d+1; 
}
  
