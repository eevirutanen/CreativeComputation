//Calligraphic Drawing Tool
//Eevi Rutanen 5.10.2020
function setup(){
    createCanvas(500,500);
    //draw background only in setup, not in draw
    background(255, 192, 3);
    strokeWeight(8);
    stroke(0);
    //make a square stroke
    strokeCap(SQUARE);
}
function draw(){
    //draw a diagonal line at cursor coordinates
    line(mouseX,mouseY,mouseX+50,mouseY+50);
}