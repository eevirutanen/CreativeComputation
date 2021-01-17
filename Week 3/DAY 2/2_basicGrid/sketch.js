//The Basic Grid
//This program creates a proportionate grid, where the number of rows and columns can be easily adapted
var columns = 10;
var rows = 10;
var cellW, cellH;

var columns2 = 6;
var rows2 = 6;
var cellW2, cellH2;

function setup(){
    createCanvas(500,500);
    //calculate width and height for each cell
    cellW = width / columns;
    cellH = height / rows;
    
    cellW2 = width / columns2;
    cellH2 = height / rows2;
    
    background(0);
    noFill();
    stroke(255);
}
function draw(){
    //nested loop
    for(var i = 0; i < columns; i+=2){
        for(var j = 0; j < rows; j+=2){
            //calculate coordinates for upper left corner of each cell

            //calculate coordinates for center of each cell
            var xc = i * cellW + cellW2/2;
            var yc = j * cellH + cellH/2;
            fill(255,0,0);
            rect(xc,yc,50,100);
        }
    }
    
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            //calculate coordinates for upper left corner of each cell

            //calculate coordinates for center of each cell
            var xc = i * cellW + cellW/2;
            var yc = j * cellH + cellH/2;
            fill(0);
            rect(xc,yc,20,20);
        }
    }

}
