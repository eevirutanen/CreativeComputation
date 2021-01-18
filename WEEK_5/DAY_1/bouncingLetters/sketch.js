//Bouncing letters
//Eevi Rutanen
//20.11.2020
//Variation of the bouncing balls sketch with added mouse and keyboard interaction.
//Add more letters by clicking the mouse.
//Change the letters by typing a key.

//Modify this to make each letter different or to spell out a sentence!

var num = 20; //number of letters in the beginning
//make two empty arrays for x and y coordinates 
var posY = [];
var posX = [];
var rot = [];
//make two empty arrays for x and y directions
var directionX = [];
var directionY = [];
var size = 60; //letter size
var letter = "K"; //letter to be drawn
function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    //push random values to empty arrays for coordinates and directions
    for(var i=0; i<num; i++){
        posX.push(random(100, 200));
        posY.push(random(100,200));
        directionX.push(random(0.5,1.5));
        directionY.push(random(0.5,1.5));
        rot.push(random(0,360));
    }
    textFont("Helvetica");
    fill(255,200,255);
    stroke(255,0,0);
}
function draw(){
    background(255,0,0);
    textSize(10);
    textAlign(LEFT,TOP);
    text("Click mouse or type a letter!",0,0);
    textSize(size);
    textAlign(CENTER,CENTER);
    //loop through all letters
    for(var i=0; i<posX.length; i++){
        //translate to corresponding coordinates, rotate and draw letter
        push();
            translate(posX[i],posY[i]);
            rotate(rot[i]);
            text(letter,0,0);
        pop();
        //move each letter to the corresponding direction
        posY[i] += directionY[i];
        posX[i] += directionX[i];
        //increase rotation
        rot[i]++;
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
}

//make more letters when mouse is pressed
//new values for the new letter are pushed to each array
function mousePressed(){
    posX.push(mouseX);
    posY.push(mouseY);
    directionX.push(random(1,2));
    directionY.push(random(1,2));
    rot.push(random(-45,45));
}
//change the letter when key is typed
//convert letter to uppercase
function keyTyped(){
    letter = key;
    letter = letter.toUpperCase();
}
