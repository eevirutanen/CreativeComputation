//Character walk
//This example demonstrates how to draw unicode characters based on their character code, combined with the random walk exercise.
//Use of char() to display unicode characters is from p5.js example https://p5js.org/examples/typography-letters.html
//List of unicode characters:
//https://en.wikipedia.org/wiki/List_of_Unicode_characters


var x1, y1; //variables for x and y coordinates
var x2, y2; //variables for x and y coordinates
var w = 25; //width of random walker
var counter = 33;
function setup(){
    createCanvas(500,500);
    x1 = width / 2; //start from middle
    y1 = height / 2; //start from middle
    rectMode(CENTER);
    noStroke();
    textSize(20);
    textAlign(CENTER,CENTER);
    textFont("Courier");
    background(255,200,255);
}
function draw(){
    var ran1 = random(4); //get random number between 0 and 4
    //use an else-if-statement to have 25% chance for moving to each direction
    if(ran1 < 1) x1+=w; //if number is between 0-1 move right
    else if(ran1 < 2) x1-=w; //if number is between 1-2 move left
    else if(ran1 < 3) y1+=w; //if number is between 2-3 move down
    else y1-=w; //if number is between 3-4 move up
    
    stroke(255);
    fill(0,0,255);
    rect(x1,y1,w,w);
    
    var letter = char(counter); //get letter based on character code
    noStroke();
    fill(255);
    text(letter,x1,y1); //draw random walker
    if (counter > 591) counter = 33; //loop character code back to the beginning of latin character set
    counter++; //increase counter
    
}
