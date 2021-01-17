//Simple animation example

var y = 0; //declare variable y with value 0

function setup(){
    createCanvas(500,500);
    noStroke();
}

function draw(){
    background(255,0,0); // redraw background every frame
    fill(255,255,0);
    ellipse(width/2, y, 100, 100); //draw ellipse at coordinate y
    y++; //increase y by 1 every frame

}
