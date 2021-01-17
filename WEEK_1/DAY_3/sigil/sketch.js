var ballW;
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    stroke(0);
    strokeWeight(5);
    ballW = width/3;
    background(0);
    fill(255,200,250);
    ellipse(ballW/2,ballW/2,ballW);
    ellipse(width/2,ballW/2,ballW);
    ellipse(width-ballW/2,ballW/2,ballW);
    fill(0);
    rect(0,ballW/2,width,height-ballW/2);
    fill(255,200,250)
    triangle(0,ballW/2,width,ballW/2,width/2,height);
    line(width/2, 0.75*ballW, width/2, height-ballW/2);
    line(width/2-30, 0.75*ballW, width/2+30, 0.75*ballW);
    line(width/2-30, height-ballW/2, width/2+30, height-ballW/2);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}