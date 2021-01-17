var columns = 10;
var rows = 10;
var cellW, cellH;
function setup(){
    createCanvas(500,500);
    //calculate width and height for each cell
    cellW = width / columns;
    cellH = height / rows;
    angleMode(DEGREES);
    strokeWeight(3);
    stroke(255,200,200);
}
function draw(){
    background(0,80,80);
    //nested loop
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            push();
                //calculate coordinates
                var x = i * cellW + cellW/2;
                var y = j * cellH + cellH/2;
                //translate to the center of cell
                translate(x,y);
                //rotate
                rotate(frameCount/2);
                //draw two lines across the cell
                line(-cellW/2,0,cellW/2,0);
                line(0,-cellW/2,0,cellW/2);
            pop();
        }
    }
}

//Think how to use the values of x and y for the rotation: Every cell should have a slightly larger rotation than the previous cell.
//In stead of lines, try drawing a circle in each cell.
//Think, where to draw the circle if you want it to rotate inside the cell: Look at the coordinates of the line for example.
