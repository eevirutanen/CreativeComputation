//Worm
//Saving mouse coordinates to an array using array method push()
//Removing values from array using array method shift()
//Using mouseMoved() event function
//Eevi Rutanen

var len = 50; //length of worm
//arrays for mouse coordinates
var posY = [];
var posX = [];
var size = 30; //worm diameter
function setup(){
    createCanvas(500,500);
    strokeWeight(size);
}
function draw(){
    background(255,0,0);
    stroke(50,200,100);
    //loop through the stored coordinates
    //and draw a line from each coordinate to the next coordinate
    //NOTE: only loop until the penultimate coordinate
    for(var i=0; i<len-1; i++){
        line(posX[i], posY[i], posX[i+1], posY[i+1]);
    }
    //if worm gets too long, remove the first coordinates in the array (the tail of the worm)
    if (posX.length > len){
        posX.shift();
        posY.shift();
    }
}
//if mouse moves, push new mouse coordinates (at the head of the worm) to the end of array 
function mouseMoved(){
    posY.push(mouseY); 
    posX.push(mouseX);
}
