//Mouse Grid
//Using mouse interaction to change the colour of grid cells.
//Eevi Rutanen
//Creative Computation for Visual Communication Design
var columns = 20;
var rows = 20;
var cellW, cellH;
var dotSize = 15; //size of grid dot
var mouseRadius = 100; //the area around mouse to change ellipse colour
function setup(){
    createCanvas(500,500);
    //calculate width and height for each cell
    cellW = width / columns;
    cellH = height / rows;
    noFill();
    stroke(255);
}
function draw(){
    background(0);
    //nested loop
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            //calculate coordinates for center of each cell
            var x = i * cellW + cellW/2;
            var y = j * cellH + cellH/2;
            //The dist() function calculates the distance between two points on the canvas.
            //For every circle in the grid, we check if the distance between the circle and the mouse is smaller than the value of mouseRadius.
            //If it is, we colour the cirle white.
            //Otherwise, we don't fill the circle.
            if(dist(mouseX,mouseY,x,y)<mouseRadius){
                fill(255);
            }
            else {
                noFill();
            }
            ellipse(x,y,dotSize,dotSize);
        }
    }
}
