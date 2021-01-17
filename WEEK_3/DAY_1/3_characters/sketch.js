//This example demonstrates how to draw unicode characters based on their character code.
//Use of char() to display unicode characters is from p5.js example https://p5js.org/examples/typography-letters.html
//List of unicode characters:
//https://en.wikipedia.org/wiki/List_of_Unicode_characters

var counter = 33; //start unicode numbers from the beginning of latin character set
var w = 25; //width of text box
//variables for x and y coordinates, set starting values so that the center of the text box is inside canvas
var x = w/2;
var y = w/2;
function setup(){
    createCanvas(500,500);
    frameRate(20); //slow down frame rate
    textFont("Courier");
    textSize(15);
    textAlign(CENTER,CENTER);
    background(0,0,255);
    rectMode(CENTER);
}
function draw(){
    var letter = char(counter); //convert unicode number to string
    fill(0,0,255);
    stroke(255);
    rect(x,y,w,w); //draw rectangle with fill 
    
    noStroke();
    fill(255);
    text(letter,x,y); //draw letter
    
    counter++; //increment counter
    x+=w; //move x-coordinate
    //if x gets bigger than width, move one row down
    if(x > width) {
        x = w/2;
        y += w;
    }
    //if y get bigger than height, update background and start from first row
    if(y > height){
        y = w/2;
        background(0,0,255);
    }
    
    //when counter reaches the end of unicode latin characters, stop program
    if (counter > 591){
        noLoop();
    }
}
