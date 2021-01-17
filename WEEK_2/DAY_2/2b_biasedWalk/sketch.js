//Biased Walker
//This example demonstrates a random walk system that is biased to favour one direction of progression over others

var x, y; //variables for x and y coordinates
var w = 10; //width of random walker
function setup(){
    createCanvas(500,500);
    x = width / 2; //start from middle
    y = height / 2; //start from middle
    background(0,0,255);
    noStroke();
    fill(0);
}
function draw(){
    var ran = random(5); //get random number between 0 and 4
    //use an else-if-statement to have 25% chance for moving to each direction
    if(ran < 1) x+=w; //if number is between 0-1 move right
    else if(ran < 2) x-=w; //if number is between 1-2 move left
    else if(ran < 3) y+=w; //if number is between 2-3 move down
    else y-=w; //if number is between 3-5 move up
    ellipse(x,y,w); //draw random walker
    
}
