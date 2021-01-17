//ASCII GRID
//Eevi Rutanen
//25.11.2020

var rows = 30; //number of rows
var columns = 30; //number of columns
var margin = 20; //margin size
var cellW; //variable for cell width
var cellH; //variable for cell height
var rad = 150;
var phase = 0;
var points = 30;
var xCoord = Array(points);
var yCoord = Array(points);
var treshold = 20;

function setup(){
    createCanvas(500,500);
    textAlign(CENTER,CENTER);
    rectMode(CENTER);
    //calculate the width and height of each cell
    //taking into account the margings
    cellW = (width-(2*margin)) / columns;
    cellH = (height-(2*margin)) / rows;
    textFont("Courier");
    textSize(cellW);
    background(0);
    fill(255);
    noStroke();
}
function draw(){
    background(0);
    calcPoints();
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
                var close = false;
                var x = i*cellW+cellW/2+margin;
                var y = j*cellH+cellH/2+margin;
                for(var k=0; k<points; k++){
                    if(dist(x,y,xCoord[k],yCoord[k]) < treshold){
                        close = true;
                    }
                }
                if(close) text("#",x,y);
                else text(":)",x,y);

        }
    }
    print(frameRate());

}

function calcPoints(){
    for(var p=0; p< points; p++){
        var cw = map(sin(frameCount/300),-1,1,width/2-100, width/2+100);
        var ch = map(sin(frameCount/200),-1,1,height/2-100, height/2+100);
        var angle = TWO_PI/points*p;
        var freq = map(sin(frameCount/200),-1,1,2,4);
        var amp = map(sin(frameCount/100),-1,1,30,60);
        var r = rad + sin(freq*angle+phase)*amp;
        var y = sin(angle)*r+ch;
        var x = cos(angle)*r+cw;
        xCoord[p] = x;
        yCoord[p] = y;
    }
    phase+=0.01;
}
