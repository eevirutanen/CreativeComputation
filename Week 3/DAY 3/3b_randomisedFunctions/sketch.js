//Random mushrooms
//Eevi Rutanen
//This example demonstrates how to use the mushroom function from the previous example to draw multiple randomised mushrooms

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    noStroke();
    background(255,200,200);
    frameRate(1); //lower framerate so that new mushrooms are drawn every second
}
function draw(){
    background(255,200,200);
    //draw mushrooms with randomised values
    for(var i=0; i<random(5,30); i++){
        var xPos = random(0, width);
        var yPos = random(0, height);
        var mw = random(20,100);
        var mh = random(20,100);
        var red = random(0,255);
        mushroom(xPos,yPos,mw,mh,red);
    }
}
//custom function for drawing a mushroom
function mushroom(x, y, w, h, r){
    fill(255); //draw foot with white fill
    ellipse(x,y,w/3,h); //draw the foot of the mushroom
    fill(r,0,0); //set red fill colour with value r
    arc(x,y,w,h,180,0); //draw the cap of the mushroom
}

