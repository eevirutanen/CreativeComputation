//This example demonstrates the use of map() function to map mouse coordinates to colour
    
function setup(){
    createCanvas(500,500);
    noStroke();
}
function draw(){
    //make a variable for the red color value of background
    //map the mouseX (ranging from 0 to width) to the range of 0-255
    var bgRed = map(mouseX,0,width,0,255);
    //use the mapped value to set background colour
    background(bgRed, 100, 100);
    //make a variable for the red color value of the shape
    //map the mouseX (ranging from 0 to width) to the range of 255-0
    var shapeRed = map(mouseX,0,width,255,0);
    //use the mapped value to set shape colour
    fill(shapeRed,100,100);
    //draw ellipse at center
    ellipse(width/2,height/2,400,400);
}
