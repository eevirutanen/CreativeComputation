//Looping roses
//Eevi Rutanen
//18.11.2020

var rows = 8; //number of rows
var columns = 8; //number of columns
var margin = 40; //margin size
var cellW; //variable for cell width
var cellH; //variable for cell height

function setup(){
    createCanvas(windowWidth,windowHeight);
    noFill();
    stroke(255,0,0);
    strokeWeight(2);
}
function draw(){
    //calculate the width and height of each cell
    //taking into account the margings
    cellW = (width-(2*margin)) / columns;
    cellH = (height-(2*margin)) / rows;
    
    background(255,200,255);
    
    //nested loops for drawing cells
    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            push();
                //calculate the x and y coordinate of
                //the middle point of each cell
                var x = i*cellW+cellW/2+margin;
                var y = j*cellH+cellH/2+margin;
                //move to center of cell
                translate(x,y);
                //modulate the number of loops with frameCount and i and j
                var loops = map(sin(frameCount/100),-1,1,1,i-j+1);
                //draw rose
                rose(200,cellW/4,loops,cellW/7);
            pop();
        }
    }
    
}

function rose(points, rad, loops, rad2){
    beginShape();
    for(var i=0; i <= points; i++ ){
        var angle = TWO_PI/points*i;
        var y = sin(angle)*rad+sin(angle*loops)*rad2;
        var x = cos(angle)*rad+cos(angle*loops)*rad2;
        vertex(x,y);
    }
    endShape();
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}


