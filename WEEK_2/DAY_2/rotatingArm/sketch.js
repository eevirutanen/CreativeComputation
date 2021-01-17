//Rotating arm
function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
}
function draw(){
    background(0,0,255);
    strokeWeight(20);
    stroke(255,200);
    translate(width/2, height/2); //move origin point to center
    rotate(mouseX); //rotate around first joint with mouseX
    line(0, 0, 100, 0); //draw first section of arm from the origin point
    translate(100,0); //move to the end of first section
    rotate(mouseY); //rotate around second joint with mouseY
    line(0, 0, 100, 0); //draw second section of arm from new origin point
    translate(100,0); //move to the end of second section
    noStroke();
    fill(255,200);
    ellipse(0,0,50,50); //draw circle at new origin point
    
}

