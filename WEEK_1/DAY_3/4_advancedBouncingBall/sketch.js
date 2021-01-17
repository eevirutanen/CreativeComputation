//Advanced Bouncing Ball
//Using conditional statements to animate a bouncing ball

var y; //declare a global variable for y-coodinate
var x; //declare a global variable for x-coordinate
//Declare global variables for y-direction and x-direction and assign values to them.
//Negative value for the direction moves the ball backwards,
//positive value moves the ball forwards.
//The larger the number, the faster the ball moves.
var yDirection = 2;
var xDirection = 1;
//Declare variable for the size of the ball and assign a value for it
var ballSize = 100;

function setup(){
    createCanvas(500,500);
    //We want our ball to start from the center of the screen
    //so we assign these values for the x and y coordinates
    y = height/2;
    x = width/2;
}
function draw(){
    noStroke(); //draw without stroke
    background(255,255,0); //set background black
    fill(255,0,0); //set fill to red
    //draw an ellipse at x and y coordinates
    //define the size of the ellipse with ballSize
    ellipse(x,y,ballSize,ballSize);
    y += yDirection;
    x += xDirection;
    //Check boundaries for y-coordinate:
    //If the ball is going outside the canvas from top (y<0) or bottom, reverse the direction. Because y is the coordinate of the center of the ball, we want to use the ballSize too: 
    //We want  the ball to change direction when the side of the ball hits the wall, not when the center of the ball hits the wall.
    if(y  > height-ballSize/2 || y < ballSize/2){
        yDirection = yDirection * (-1);
    }
    //Check boundaries for x-coordinate:
    //If the ball is going outside the canvas from left (x<0) or right side (x>width), reverse the direction. Also here we want the ball to bounce when the side of the ball hits the wall, not when the center of the ball hits the wall, so we use the ballSize.  
    if(x  > width-ballSize/2 || x < ballSize/2){
        xDirection = xDirection * (-1);
    }
    
}
