//This example demonstrates how to use scale() to stretch type.
//Typeface is Press Start 2P by CodeMan38. It's downloaded from Google Fonts under Open Font licence. https://fonts.google.com/

var myFont; //global variable for font
var w = 20; //letter width

//load font in preload
function preload(){
    myFont = loadFont("fonts/PressStart.ttf")
}
function setup(){
    //fit canvas to window
    createCanvas(windowWidth,windowHeight);
    textFont(myFont); //set font
    //center text
    textAlign(CENTER,CENTER);
    textSize(w);
    fill(0);
}
function draw(){ 
    background(255,0,0);
    //draw letters across width
    for(var i=0; i<width; i+=w){
        //push and pop between translations
        push();
            //translate across width of canvas
            translate(i+w/2,height/2);
            //scale y-axis
            scale(1,i/30+1);
            //draw text at new point of origin
            text("A",0,0);
        pop();
    }
}

//resize canvas to window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


