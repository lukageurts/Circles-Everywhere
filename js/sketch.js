function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(240);
  stroke(0);
  strokeWeight(1);
  fill(0, 45);

  for (let x = 50; x < width && x < height; x += 50) {
  	ellipse(width/2, height/2, x, x);
  }
  }
  
 