//This exercise demonstrates how to set random values in setup() to avoid "flickering" values

var size = 200;
var x1, x2, x3, y1, y2, y3;

function setup(){
    createCanvas(500,500);
    noStroke();
    fill(random(255),random(255),random(255));
    x1 = random(width);
    x2 = random(width);
    x3 = random(width);
    y1 = random(height);
    y2 = random(height);
    y3 = random(height);
    
}
function draw(){
    background(0);
    ellipse(x1,y1,size,size);
    ellipse(x2,y2,size,size);
    ellipse(x3,y3,size,size);
}
