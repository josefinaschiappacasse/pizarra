let bx;
let by;
let ellipseSize = 35;
let overEllipse = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let sketch;

function setup() {
  sketch = createCanvas(500, 500);
  sketch.parent("p5");
  background(2);
  bx = width / 2.0;
  by = height / 2.0;
  strokeWeight(2);

}

function draw() {
  pincel();
  pincel2();
}

function pincel() {
  if (
    mouseX > bx - ellipseSize &&
    mouseX < bx + ellipseSize &&
    mouseY > by - ellipseSize &&
    mouseY < by + ellipseSize
  ) {
    overEllipse = true;
    if (!locked) {
      stroke(255);
      fill("white");
    }
  } else {
    stroke(255);
    fill("white");
    overEllipse = false;
  }

  ellipse(bx, by, ellipseSize, ellipseSize);

}

function pincel2() {
  if (
    mouseX > bx - ellipseSize &&
    mouseX < bx + ellipseSize &&
    mouseY > by - ellipseSize &&
    mouseY < by + ellipseSize
  ) {
    overEllipse = true;
    if (!locked) {
      stroke("blue");
      fill("white");
    }
  } else {
    stroke("blue");
    fill("white");
    overEllipse = false;
  }

  ellipse(by, bx, ellipseSize, ellipseSize);

}

function mousePressed() {
  if (overEllipse) {
    locked = true;
    fill(255, 255, 255, 90);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;

  background(0);
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
