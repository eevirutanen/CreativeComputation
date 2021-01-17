//This example demonstrates how to make a radial gradient with map() and for-loop
    
function setup(){
    createCanvas(500,500);
    noFill();
}
function draw(){
    for(var r=0; r < height*1.5; r++){
        var c = map(r,0,height*1.5,0,255);
        stroke(c,100,100);
        ellipse(width/2,height/2,r);
    }
}
