//This exercise demonstrates how to use randomSeed to produce constant random values

var seed;
var size = 200;

function setup(){
    createCanvas(500,500);
    background(0);
    //set a random value for the randomseed in setup
    seed = random(1000);
    noStroke();
}
function draw(){
    //set the randomised value for randomSeed
    randomSeed(seed);
    //Now random values stay same every time the draw loop is executed BUT change every time setup() is executed
    background(0);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),size,size);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),size,size);
    fill(random(255),random(255),random(255));
    ellipse(random(width),random(height),size,size);
}
