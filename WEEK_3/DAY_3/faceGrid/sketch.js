//Face Grid
//Eevi Rutanen
//This example demonstrates how to use the nested for-loop to draw a grid of faces.
//We are defining a function called drawFace, that doesn't take any arguments for the location of the face. The face is always drawn at the origin point (0,0).
//In the nested loop we are translating the origin point to the center of each cell (like in the animated grid example). This way we can draw the face in all the cells in the grid. In the nested loop we are using the cellW and cellH to define the size of the face to fit in the cell.

//Change the number of columns and rows to see how the face scales to the cell size.

var columns = 8;
var rows = 10;
var cellW, cellH;
function setup(){
    createCanvas(500,500);
    //calculate width and height for each cell
    cellW = width / columns;
    cellH = height / rows;
    angleMode(DEGREES);
    background(0);
}
function draw(){
    background(0);
    //nested loop
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            //use push and pop every time drawing a face to reset the translations 
            push();
                //calculate the coordinates of the center of each cell
                var x = i * cellW + cellW/2;
                var y = j * cellH + cellH/2;
                //translate the origin point to the center of the cell
                translate(x,y);
                //draw face at the new origin point at the center of the cell
                //use cellW and cellH to define the size of the face
                drawFace(cellW,cellH);
            pop();
        }
    }
    //Uncomment the line below to see the face drawn without any translations: It's drawn at the original origin point, so at the upper left corner of the canvas. The size of the face is defined by the argument values (200,200)
    
    //drawFace(200,200);
}
//declare drawFace function that has arguments for the width and height of the face
function drawFace(w,h){
    noStroke();
    fill(255,255,0);
    //draw head at origin point (0,0)
    // the size of the head is defined by arguments w and h
    ellipse(0,0,w,h);
    fill(0);
    //draw eyes around origin point based on the size of the head
    ellipse(-w/4,-h/4,w/6);
    ellipse(w/4,-h/4,w/6);
    stroke(0);
    noFill();
    //draw mouth at origin point, define the size with w and h
    arc(0,0,w*0.7,h*0.7,0,180);
}
