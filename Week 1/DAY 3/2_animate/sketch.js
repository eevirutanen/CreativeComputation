var y = 0; //declare variable y with value 0

function setup(){
    createCanvas(500,500);
    frameRate(5);
}

function draw(){
    background(0); // redraw background every frame
    fill(255,0,0);
    ellipse(width/2, y, 100, 100); //draw ellipse using y
    y = frameCount;
    ellipse(mouseX,mouseY,100,100);

}
