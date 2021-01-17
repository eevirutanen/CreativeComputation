function setup(){
    createCanvas(500,500);
    noStroke(); //don't use stroke
}
function draw(){
    background(255,0,0); //set to red
    //draw circles 50px apart until x > width
    for(var x = 0; x <= width; x+= 50){
        for(var y = 0; y <= height; y+=50){
           ellipse(x,y,40,40); 
        }
    }
}