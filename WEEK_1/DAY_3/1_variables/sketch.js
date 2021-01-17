var h = 150; //variable for rectangle height
var w = 250; //variable for rectangle width
function setup(){
    createCanvas(500,500); 
    noStroke(); //draw without stroke
    background(200); //draw grey background 
    ellipseMode(CORNER); //set coordinate to bounding box
}
function draw(){
    fill(0); //set fill to black
    rect(0,0,w,h); //draw rectangle
    fill(0,255,0); //set fill to green
    rect(w,h,width-w,height-h); //draw second rectangle
    fill(255,0,0); //set fill to red
    ellipse(w,0,width-w,h); //draw ellipse
}
