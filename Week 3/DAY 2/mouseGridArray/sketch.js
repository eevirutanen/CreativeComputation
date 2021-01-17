//Mouse Grid Array
//Eevi Rutanen
//20.11.2020
//Changing the colour of shapes with mouse click and adding new shapes with mouse click.
//This example uses simple arrays in stead of a more advanced object-oriented solution.

var columns = 8;
var rows = 10;
var cellW, cellH;
var shapeRad = 40; //size of shape
var cornerRad = 10;
//empty arrays for storing the coordinates and colour values of shapes
var xcoord = [];
var ycoord = [];
var col = [];
var palette; //array for color palette

function setup(){
    createCanvas(500,500);
    //calculate width and height for each cell
    cellW = width / columns;
    cellH = height / rows;
    stroke(255);
    //fill coordinate arrays with initial coordinates for shapes
    //also store a color value for each shape
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            var x = i * cellW + cellW/2;
            var y = j * cellH + cellH/2;
            xcoord.push(x);
            ycoord.push(y);
            col.push(0);
        }
    }
    //store color values to the palette array (color values can not be created before setup)
    palette = [color(235, 158, 52), color(244, 200, 255), color(176, 174, 74)];
    rectMode(CENTER);
}
function draw(){
    background(0);
    //loop through coordinates and draw shapes
    for(var i = 0; i < xcoord.length; i++){
        fill(col[i]);
        rect(xcoord[i],ycoord[i],shapeRad,shapeRad/2,cornerRad);
    }
}
    
function mouseClicked(){
    var closest = false;
    var closeIndex;
    //loop through shapes
    for(var i = 0; i < xcoord.length; i++){
        var thisx = xcoord[i];
        var thisy = ycoord[i];
        //check if mouse is clicked inside an existing shape
        if(dist(mouseX,mouseY,thisx,thisy)<shapeRad/2){
            //if true, save the index of the shape
            closest = true;
            closeIndex = i;
        }
    }
    //if mouse was clicked inside an existing shape, give the shape a random color from the color palette
    if(closest){
        col[closeIndex] = random(palette);
    }
    //if mouse was clicked outside existing shapes, create a new shape by pushing new values to the arrays
    else {
        xcoord.push(mouseX);
        ycoord.push(mouseY);
        col.push(0);
    }
}
