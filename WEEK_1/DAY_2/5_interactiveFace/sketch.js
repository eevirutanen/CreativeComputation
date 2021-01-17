//Interactive Face
//Eevi Rutanen
//5.10.2020
//Using mouse intraction to change shape attributes.
function setup(){
    //set canvas size 500*500px
    createCanvas(500,500);
    background(255,0,0); //red background
    strokeWeight(4); //set strokeWeight
    stroke(0); //set stroke color to black
}
function draw(){
    strokeWeight(4); //set strokeWeight
    fill(255); //set fill colour white
    ellipse(250,250,350,350); //draw face
    fill(0); //set fill colour black
    //use mouseX to change eye size
    ellipse(200,200,mouseX/8, mouseX/4); //draw eye
    ellipse(300,200,mouseX/8, mouseX/4); // draw eye
    fill(255,100,250); //set fill colour pink
    ellipse(250,250,40,40); //draw nose
    //use mouseY to change the stroke width for the mouth
    strokeWeight(mouseY/20);
    line(200, 300, 300, 300); //draw mouth
}
