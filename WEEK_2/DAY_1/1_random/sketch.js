//This exercise demonstrates how to draw a circle with random coordinates and colours, and also the problem of calling random() inside draw

var size = 200;

function setup(){
    createCanvas(500,500);
    noStroke();
    background(0);
}
function draw(){
    
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),size,size);
}
