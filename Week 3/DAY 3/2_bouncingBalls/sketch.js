//Bouncing Balls
//Eevi Rutanen
//Varation of the simple bouncing ball sketch.
//Using conditional statements to check for boundaries
//Using arrays to save the coordinates and directions for multiple shapes
//Using mouse interaction to add more shapes

var num = 50; //number of balls in the beginning
//make two empty arrays for x and y coordinates 
var posY = [];
var posX = [];
//make two empty arrays for x and y directions
var directionX = [];
var directionY = [];
var size = 20; //ball size
function setup(){
    createCanvas(500,500);
    //push random values to empty arrays for coordinates and directions
    for(var i=0; i<num; i++){
        posX.push(random(100, 200));
        posY.push(random(100,200));
        directionX.push(random(2,3));
        directionY.push(random(2,3));
    }
}
function draw(){
    background(255,0,0);
    stroke(255,0,0);
    fill(255,200,255);
    //loop through all balls
    for(var i=0; i<posX.length; i++){
        //draw each ball at the corresponding coordinates
        ellipse(posX[i],posY[i],size);
        //move each ball to the corresponding direction
        posY[i] += directionY[i];
        posX[i] += directionX[i];
        //check boundaries for y-coordinates
        //if out of bounds, reverse direction
        if(posY[i] > height-size/2 || posY[i] < size/2){
            directionY[i] *= (-1);
        }
        //check boundaries for x-coordinates
        //if out of bounds, reverse direction
        if(posX[i] > width-size/2 || posX[i] < size/2){
            directionX[i] *= (-1);
        }
    }
    //push more balls when mouse is pressed
    if(mouseIsPressed){
        posX.push(mouseX);
        posY.push(mouseY);
        directionX.push(random(1,2));
        directionY.push(random(1,2));  
    }
}