//THE ULTIMATE GRID
//Eevi Rutanen 10.10.2020
//Helper code for drawing adjustable grids with margins. Also calculates the index number of each grid cell in order.

var rows = 6; //number of rows
var columns = 8; //number of columns
var margin = 40; //margin size
var cellW; //variable for cell width
var cellH; //variable for cell height

function setup(){
    createCanvas(500,500);
    textAlign(CENTER,CENTER);
    //calculate the width and height of each cell
    //taking into account the margings
    cellW = (width-(2*margin)) / columns;
    cellH = (height-(2*margin)) / rows;
    stroke(255);
    noFill();
    strokeWeight(1);
}
function draw(){
    background(0);
    //nested loops for drawing cells
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            //push and pop for each cell
            push();
                //calculate the x and y coordinate of
                //the middle point of each cell
                var x = i*cellW+cellW/2+margin;
                var y = j*cellH+cellH/2+margin;
                //calculate the index number of each cell
                var index = j*columns+i;
                //move to center of cell
                translate(x,y);
                ellipse(0,0,40,40);
                fill(255);
                noStroke();
                //draw index number
                text(index,0,0);
            pop();
        }
    }
    //draw grid lines in two separate loops
    for(var i = 0; i <= columns; i++){
        var x = i*cellW+margin;
        line(x,0,x,height);
    }
    for(var j = 0; j <= rows; j++){
        var y = j*cellH+margin;
        line(0,y,width,y);
    }
    
    

}
