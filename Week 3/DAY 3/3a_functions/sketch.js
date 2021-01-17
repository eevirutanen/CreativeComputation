//This example demonstrates how to declare a function that draws a shape, and how to call that function with different values.

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    noStroke();
    background(255,200,200);
}
/*function draw(){
    //background(255,200,200);
    //draw a mushroom at mouse point with randomised values
    if(mouseIsPressed){
        mushroom(mouseX, mouseY, random(100,200), random(100,200), random(100));
    }
}*/
//declare a function for drawing mushrooms
//the arguments for the mushrooms are
// x is the x-coordinate of the mushroom's center
// y is the y-coordinate of the mushroom's center
// w is the width of the mushroom's cap
// h is the height of the mushroom
// r is the red value of the mushroom's color
function mushroom(x, y, w, h, r){
    fill(255); //draw foot with white fill
    ellipse(x,y,w/3,h); //draw the foot of the mushroom
    fill(r,0,0); //set red fill colour with value r
    arc(x,y,w,h,180,0); //draw the cap of the mushroom
}

function mouseClicked(){
    var mw = random(30,100);
    var mh = random(30,100);
    var red = random(0,255);
    mushroom(mouseX, mouseY, mw, mh, red);
}

