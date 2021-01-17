//Random Walker
//This example demonstrates a random walk system which exhibits elements of complexity

var x, y; //variables for x and y coordinates
var w = 20; //width of random walker
function setup(){
    createCanvas(500,500);
    x = width / 2; //start from middle
    y = height / 2; //start from middle
    noStroke();
    background(0,255,0);
}
function draw(){
    var ran1 = random(4); //get random number between 0 and 4
    //use an else-if-statement to have 25% chance for moving to each direction
    if(ran1 < 1) x+=w; //if number is between 0-1 move right
    else if(ran1 < 2) x-=w; //if number is between 1-2 move left
    else if(ran1 < 3) y+=w; //if number is between 2-3 move down
    else y-=w; //if number is between 3-4 move up
    fill(0);
    ellipse(x,y,w,w);
    
}
