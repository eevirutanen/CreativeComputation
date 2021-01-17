function setup(){
    createCanvas(500,500);
    background(0);
    noFill();
}
function draw(){
    stroke(255);
    strokeWeight(0.5);
    line(mouseX-50,mouseY,mouseX+50,mouseY);
    line(mouseX,mouseY-50,mouseX,mouseY+50);
}
