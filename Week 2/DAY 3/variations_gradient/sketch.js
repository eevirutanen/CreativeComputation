//This example demonstrates how to make a linear gradient with map() and for-loop
    
function setup(){
    createCanvas(500,500);
    noFill();
}
function draw(){
    //loop from 0 to height
    for(var y=0; y < height; y++){
        //map height to red color value
        var r = map(y,0,height,0,255);
        //set stroke color
        stroke(r,100,100);
        //draw horizontal line at y
        line(0,y,width,y);
    }
}
