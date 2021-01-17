//Looping animation using consitional statements.
//Modify the bouncing ball sketch so that the ball moves sideways in addition to up and down.
//1. Make a variable for x position
//2. Make different variables for vertical and horizontal speeds: call them xSpeed and ySpeed
//3. Check boundaries for the x coordinate in the same way as for y coordinate previously: Inverse xSpeed if x is smaller than 0 or larger than width. Inverse ySpeed if y is smaller than 0 or larger than height. Remember to take into account the size of the ball!
	
var y; //variable for y position 
var w = 100; //size of the ball
var speed = 2; //variable for speed

function setup(){
    createCanvas(500,500);
    y = height / 2;
}

function draw(){
    background(255,255,0); // redraw background every frame
    fill(255,200,255);
    ellipse(width/2, y, w, w); //draw ellipse using y and w
    y = y+speed; //increase y with speed
    //check boundaries:
    //reverse the speed if ball is out of bouds
    //also account for the size of the ball
    if((y > height-w/2) || y < w/2){
        speed = speed * (-1);
    }
}
