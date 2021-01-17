//Grid Game
//Eevi Rutanen
//17.11.2020
//Using probability distributions to draw random shapes in a grid.
//Using custom functions.
//Using frameRate() to get new random values every second.

var rows = 6;
var columns = 6;
var w; //cell width
var h; //cell height
var margin = 40; //margin size in pixels
var colors = []; //create empty color array
//colors can not be saved in the array before the setup

function setup(){
    createCanvas(500,500);
    //calculate cell size for grid and margin dimensions
    w = (width-(2*margin)) / columns;
    h = (height-(2*margin)) / rows;
    angleMode(DEGREES);
    rectMode(CENTER);
    noStroke();
    //strore three colors in the color array
    colors = [color(181, 134, 40),color(255, 201, 254),
              color(0, 26,255)];
    background(0);
    drawGrid();
    frameRate(1); //lower framerate so that new grid is drawn every second
}

function draw(){
    background(0);
    drawGrid();
}

//function for drawing a random shape
//function takes in a (random) number between 0-12 and using an if-else statement draws different shapes or no shape
//By changing the statements we can change the probability of different shapes. Now every shape is drawn with the same probability
function pickShape(ran){
    if(ran < 1) ellipse(0,0,w,h);
    else if (ran < 2) arc(w/2,0,w,h,90,270);
    else if (ran < 3) arc(-w/2,h/2,w*2,h*2,270,360);
    else if (ran < 4) arc(0,h/2,w,h,180,360);
    else if (ran < 5) arc(-w/2,-h/2,w*2,h*2,0,90);
    else if (ran < 6) arc(w/2,h/2,2*w,2*h,180,270);
    else if (ran < 7) arc(-w/2,h/2,2*w,2*h,270,360);
    else if (ran < 8) arc(0,-h/2,w,h,0,180);
    else if (ran < 9) triangle(-w/2,-h/2,w/2, -h/2, w/2,h/2);
    else if (ran < 10) triangle(-w/2,h/2,-w/2,-h/2, w/2,h/2);
    else if (ran < 11) rect(0,0,w,h);
    //if ran > 11 no shape is drawn
}
//Function for drawing the entire grid with random shapes.
//This function refreshes the background and draws a grid of random shapes with random colors using the color array and pickShape function.
function drawGrid(){
    background(0);
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            push();
                var x = i*w+w/2+margin;
                var y = j*h+h/2+margin;
                translate(x,y);
                fill(random(colors));
                //call the pickShape function with a random value between 0 and 12
                //the random number determines which shape is drawn
                pickShape(random(12));
            pop();
        }
    }
}
