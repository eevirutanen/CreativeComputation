//This example demonstrates how to use scale() to stretch type.
//Typeface is Press Start 2P by CodeMan38. It's downloaded from Google Fonts under Open Font licence. https://fonts.google.com/
//Try using incrementation and conditional statements (similar to the bounding ball example) to animate the scaling!

var myFont; //global variable for font

//load font in preload
function preload(){
    myFont = loadFont("fonts/PressStart.ttf")
}
function setup(){
    //fit canvas to window
    createCanvas(500,500);
    textFont(myFont); //set font
    //center text
    textAlign(CENTER,CENTER);
    rectMode(CENTER,CENTER);
    strokeWeight(2);
    stroke(255,200,255);
    fill(255,0,0);
}
function draw(){ 
    background(0,120,80);
    translate(width/2,height/2);
    var sx = map(mouseX,0,width,-60,60);
    var sy = map(mouseY,0,height,-60,60);
    scale(sx,sy);
    text("A",0,0);
}


