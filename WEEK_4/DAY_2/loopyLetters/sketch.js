//Loopy Letters
//Eevi Rutanen
//This sketch demonstrates how to use the text to points function and how to draw custom shapes with beginShape.

var myFont, points;
var w = "E"; //word
var fSize = 400;
function preload(){
    myFont = loadFont("fonts/Cheee.otf");
}
function setup(){
    createCanvas(500,500); 
    //convert text to points
    //arguments are (string, x, y, fontSize)
    points = myFont.textToPoints(w, 0, 0, fSize);
}
function draw(){
    background(0,0,255);
    noStroke();
    fill(255);
    text("Type a character.", 5,10);
    noFill();
    stroke(255);
    //move to center
    translate(140, 480);
    //map mouse coordinates
    var mx = map(mouseX,0,width,-5,5);
    var my = map(mouseY,0,height,-5,5);
    //get first and last point
    var first = points[0];
    var last = points[points.length-1];
    //draw shape, repeat first and last points
    beginShape();
    curveVertex(first.x,first.y);
    //loop through points, move each point with mouse
    for(var i=0; i<points.length; i++){
        var x = points[i].x + i*mx;
        var y = points[i].y + i*my;
        curveVertex(x,y);
    }
    curveVertex(last.x,last.y);
    endShape();
}

//calculate new points if key is pressed
//use key value as input
function keyTyped(){
    points = myFont.textToPoints(key, 0, 0, fSize);
}
