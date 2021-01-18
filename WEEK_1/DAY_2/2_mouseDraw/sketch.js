//This sketch demonstrates how to make a simple drawing tool with mouse interaction.
//Try drawing with different shapes, colors and strokes. Try updating the background in the draw() function.
//Eevi Rutanen 15.10.2020
function setup(){
    //set canvas size 500*500px
    createCanvas(500,500);
    strokeWeight(1); //set stroke weight to 1px
    background(255,0,0); //draw red background
    stroke(255,0,0); //set red stroke color
}
function draw(){
    fill(255,200,255); //set pink fill color
    ellipse(mouseX,mouseY,60); //draw 60px circle at cursor position
}
