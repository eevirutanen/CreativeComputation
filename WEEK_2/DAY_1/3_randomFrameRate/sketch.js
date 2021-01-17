//This exercise demonstrates how to use frameRate to change random values approximately every second.

var size = 200;

function setup(){
    createCanvas(500,500);
    noStroke();
    frameRate(1); //framerate tells how many times per second the draw loop is updated. The default is 60fps.
}
function draw(){
    //Now draw() is executed only ~ once every second, so the random values change every second.
    background(0);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),size,size);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),size,size);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),size,size);
}
