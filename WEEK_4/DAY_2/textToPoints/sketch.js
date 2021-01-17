//Text to Points
//Eevi Rutanen
//17.11.2020
//Convertung text outline to points and moving each point a random amount to create a wiggle effect.

var myFont, points;
var w = "CUTE"; //word
var wiggle = 1; //amount of movement
var fSize = 130; //font size
var dotSize = 10;
function preload(){
    myFont = loadFont("fonts/CooperBlackStd.otf");
}
function setup(){
    createCanvas(500,500);
    noStroke();
    fill(255,0,0);
    //convert text to points
    //arguments are (string, x, y, fontSize)
    points = myFont.textToPoints(w, 0, 0, fSize);
    
}
function draw(){
    background(255,200,255);
    //move to center
    translate(40, 0.6*height);
    //loop through points up to the current point, and draw ellipse at point
    for(var i=0; i<points.length; i++){
        var x = points[i].x+random(-wiggle, wiggle);
        var y = points[i].y+random(-wiggle, wiggle);
        ellipse(x,y,dotSize);
    }
}
