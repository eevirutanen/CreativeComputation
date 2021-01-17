//This exercise demonstrates how create a probability distribution for different colours. Make the circles red with 25% probability, blue with 25% probability and green with 50% probability

var size = 50; //size of circle

function setup(){
    createCanvas(500,500);
    noStroke();
    background(0);
    frameRate(1); //slow down framerate
}
function draw(){
    print(frameRate());
    var ran = random(4); //random number between 0-4
    //random value is between 0-1 with 25% probability
    if(ran < 1) fill(255,0,0); //make red fill
    //random value is between 1-2 with 25% probability
    else if(ran < 2) fill(0,0,255); //make fill blue
    //random value is between 2-4 with 50% probability
    else fill(0,255,0); //make fill green
    //draw ellipse in random location
    ellipse(random(width),random(height),size,size);
}

//
