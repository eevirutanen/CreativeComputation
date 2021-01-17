//Text Grid
//Eevi Rutanen
//17.11.2020
//Drawing individual characters from a text one by one in a grid.
//Replacing letters with shapes.

var rows = 20; //number of rows
var columns = 30; //number of columns
var margin = 20; //margin size
var cellW; //variable for cell width
var cellH; //variable for cell height
var myText;

function preload(){
    myText = loadStrings("data/sample.txt");
}

function setup(){
    createCanvas(700,700);
    textAlign(CENTER,CENTER);
    //calculate the width and height of each cell
    //taking into account the margings
    cellW = (width-(2*margin)) / columns;
    cellH = (height-(2*margin)) / rows;
    background(0);
    textSize(cellW);
    myText = myText.join(" ");
    rectMode(CENTER);
}
function draw(){
    background(0);
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
                noStroke();
                //calculate the index number of each cell
                var index = j*columns+i;
                //get current character from text based on index
                var currentChar = myText.charAt(index);
                //check if current character matches conditions
                if(currentChar === "a"){
                    fill(0,255,0);
                    triangle(0,-cellH/2,cellW/2,cellH/2,-cellW/2,cellH/2);
                }
                else if(currentChar === "e"){
                    fill(255,200,255);
                    ellipse(0,0,cellW);
                }
                else if(currentChar === "i"){
                    fill(0,0,255);
                    rect(0,0,cellW/2,cellH*0.75,cellW/4);
                }
                //otherwise draw character
                else {
                    //draw current character
                    fill(255);
                    text(currentChar,0,0);
                }
                stroke(255);
                strokeWeight(0.5);
                noFill();
                rect(0,0,cellW,cellH);
            pop();
        }
    }

}
