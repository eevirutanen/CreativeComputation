//This exercise demonstrates two common ways to use a simple for-loop to draw circles across the canvas

function setup(){
    createCanvas(500,500);
    noStroke();
    background(0);
}
function draw(){
    //start with x=0
    //repeat loop if x <= width
    //add 100 to x every time the loop is repeated
    for(var x=0; x<= width; x+=100){
        ellipse(x,100,50); //draw ellipse at x coordinate
    }
    
    //start with i=0
    //repeat loop six times ( i goes from 0 to 5)
    //calculate the x positions:
    //distance between each ellipse is width/5
    //i.e. first ellipse at 0, second at 1/5 width, third at 2/5 width etc.
    
    for(var i=0; i<6; i++){
        ellipse(i*width/5,400,50);
    }

    
}
