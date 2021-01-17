//This exercise demonstrates how to use a simple while-loop to draw circles across the canvas

function setup(){
    createCanvas(500,500);
    noStroke();
    background(0);
}
function draw(){
    var x = 0; //declare variable for x coordinate
    //repeat loop until x > width
    while(x <= width){
        ellipse(x,height/2,50); //draw ellipse at x coordinate
        x+=100; //increase x by 100
    }
    
}
