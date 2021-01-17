//This sketch demonstrates how to make a simple drawing tool with mouse interaction
//Eevi Rutanen
function setup(){
    //set canvas size 500*500px
    createCanvas(500,500);
    strokeWeight(1); //set stroke weight to 1px
    background(0); //draw black background
    angleMode(DEGREES);
}
function draw(){
    background(0); //draw black background
    //draw ellipse at cursor position
    noStroke();
    //fill(width-mouseX,100,100);
    fill(height-mouseY,100,100);
    ellipse(mouseX,mouseY,100,100);
}
