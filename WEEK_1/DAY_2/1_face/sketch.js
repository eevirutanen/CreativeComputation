//This sketch demonstrates how to draw basic shapes!

function setup(){
    //set canvas size 500*500px
    createCanvas(500,500);
    background(255,0,0); //red background
    strokeWeight(4); //set stroke thickness to 4px
    stroke(0); //set stroke color to black
    angleMode(DEGREES);
}
function draw(){
    fill(255); //set fill colour white
    ellipse(width/2,height/2,350,350); //draw head
    fill(0); //set fill colour black
    ellipse(200,200,50,100); //draw eye
    ellipse(300,200,50,100); // draw eye
    fill(255,100,250); //set fill colour pink
    ellipse(250,250,40,40); //draw nose
    fill(255,100,250); //set fill colour pink
    noFill();
    //arc: x , y, width, height, start angle, end angle
    //use angleMode(DEGREES) in setup
    arc(250, 300, 100, 100, 0, 180); //draw mouth
}
