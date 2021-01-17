//Input & button
//Eevi Rutanen
//Input text and convert the text to points when clicking a button
//Also animating the text

var myFont, points, input, button;
var word = "Pizza"; //word
var speed = 5; //animation speed
var fSize = 100; //font size
var resolution = 2; //resolution of text outline
var dotSize = 3;
var currPoint = 0;
function preload(){
    myFont = loadFont("fonts/classiccobra.ttf");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    fill(255,0,0);
    noStroke();
    
    //create input
    input = createInput(word);
    input.position(20,20);
    input.size(100);
    //create button and attach event
    button = createButton("submit");
    button.mousePressed(submitWord)
    
    //convert to points
    submitWord(word);
    
}
function draw(){
    background(255,255,0);
    //move to center
    translate(20, height/2);
    button.position(width/2,20);
    //loop through points according to animation and draw ellipse at each point
    for(var i=0; i<currPoint; i++){
        var x = points[i].x;
        var y = points[i].y;
        ellipse(x,y,dotSize);
    }
    //move animation along
    currPoint+=speed;
    //if animation is finished, start over
    if(currPoint > points.length) currPoint=0;
}

function submitWord(){
    // read input value
    w = input.value();
    //restart animation
    currPoint = 0;
    //convert text to points
    //arguments are (string, x, y, fontSize)
    points = myFont.textToPoints(w, 0, 0, fSize,{sampleFactor: resolution});
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
