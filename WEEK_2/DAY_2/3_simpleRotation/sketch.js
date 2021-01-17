//Simple Rotation
//This example demonstrates how to use transformation functions to rotate shapes

var a = 0; //variable for angle of rotation
function setup(){
    createCanvas(500,500);
    noStroke();
    fill(255);
    angleMode(DEGREES); //set angle unit to degrees
    //rectMode(CENTER);
    //uncomment the rectMode function to make the rectangle rotate around its center 
}
function draw(){
    background(0);
    //translate(width/2,height/2); //move origin point to center
    rotate(a); //rotate around the origin point
    rect(0,0,100,100); //draw a rectangle at origin point
    a++; //increase the angle of rotation
}
