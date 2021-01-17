//This example demonstrates how to load a font and different ways to align text relative to window size.
//Try changing the values for rectMode, textSize, and text box coordinates and size, and see how they affect the result.
//Typeface is Press Start 2P by CodeMan38. It's downloaded from Google Fonts under Open Font licence. https://fonts.google.com/

var myFont; //global variable for font
//store the strings to varibales
var sentence1 = "The quick brown fox jumps over the lazy dog.";
var sentence2 = "Waxy and quivering, jocks fumble the pizza.";
//load font in preload
function preload(){
    myFont = loadFont("fonts/PressStart.ttf")
}
function setup(){
    //fit canvas to window
    createCanvas(windowWidth, windowHeight);
    textFont(myFont); //set font
    noStroke();
}
function draw(){ 
    background(0,0,255);
    //make variables for divisions
    var w = width/2;
    var h = height/3;
    
    //rectMode affects text and rect
    rectMode(CORNER);
    
    //draw red rectangle in upper left corner
    fill(255,0,0);
    rect(0,0,w,h);
    
    //draw brown rectangle in upper right corner
    fill(168, 82, 2);
    rect(w,0,w,h);
    
    fill(255,200,255); //pink fill color for text
    //set text size relative to window size
    textSize(height/25);
    
    //align text horizontally to left and vertically top
    textAlign(LEFT,TOP);
    //draw text in the upper left corner
    text(sentence1,10,10,w);
    
    //align text horizontally and vertically center
    textAlign(CENTER,CENTER);
    text(sentence2,w,0,w,h);
    
    //set bigger text size relative to window size
    textSize(width/3);
    //ANOTHER WAY OF ALIGNING:
    //set rectMode to center and keep textAlign(CENTER,CENTER)
    rectMode(CENTER);
    text(second(),w,2*h);
    
    //keep same text alignment to draw text at mouse point
    fill(255,0,0); //red fill
    textSize(width/10); //set font size
    text("#",mouseX,mouseY); //draw character at cursor coordinates
}

//resize canvas to window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


