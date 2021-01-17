//Advanced Bouncing Ball Variation
//Try changing the values for xDirection and yDirection or the size of the canvas, and look how that changes the patterns the bouncing ball makes.

var y;
var x;
var yDirection = 4;
var xDirection = -5;
var ballSize = 100;

function setup(){
    createCanvas(500,500);
    y = height/3;
    x = width/2;
    background(255,200,255);
}
function draw(){
    stroke(255,200,255);
    fill(0,0,255);
    ellipse(x,y,ballSize,ballSize);
    y += yDirection;
    x += xDirection;
    if(y  > height-ballSize/2 || y < ballSize/2){
        yDirection = yDirection * (-1);
    }
    if(x  > width-ballSize/2 || x < ballSize/2){
        xDirection = xDirection * (-1);
    }
    
}
