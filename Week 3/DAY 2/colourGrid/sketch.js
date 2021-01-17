//The Sine animation Colour Grid
//The example is basically the same as the animated grid variation, but we use sine function to have a looping animation of color across the grid.
var columns = 20;
var rows =20;
var cellW, cellH;
function setup(){
    createCanvas(500,500);
    //calculate width and height for each cell
    cellW = width / columns;
    cellH = height / rows;
    background(0,100,100);
    noStroke();
    angleMode(DEGREES);
    rectMode(CENTER);
}
function draw(){
    background(255);
    //nested loop
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            push();
                //calculate coordinates for center of each cell
                var x = i * cellW + cellW/2;
                var y = j * cellH + cellH/2;
                translate(x,y);
                rotate(frameCount+x+y);
                //we are using the trigonometric sine function here to loop the animation of the colours. Sine always oscillates between values -1 and 1. We feed the x and y coordinates and the frameCount to the sine to get a different colour across the rows and columns and to have it change over time
                var r = map(sin(frameCount+x+y), -1, 1, 0, 255)
                fill(r,200,255);
                ellipse(cellW/2,0,20,20);
            pop();
        }
    }
}
