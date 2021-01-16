//Self-portrait
//Eevi Rutanen
//5.10.2020
function setup(){
    //set canvas size 500*500px
    createCanvas(500,500);
    background(255,150,240);
    rectMode(CENTER);
}
function draw(){
    noStroke();
    fill(255); //set fill colour white
    ellipse(250,250,350,350); //draw face
    fill(158, 89, 16); // brown fill colour
    //draw hair with 3 rectangles
    rect(250,100,350,100);
    rect(100,250,100,200);
    rect(400,250,100,200);
    fill(0); //fill black
    //draw eyes
    ellipse(200,200,20,50); 
    ellipse(300,200,20,50); 
    fill(255,150,240); //fill pink
    //draw nose
    ellipse(250,250,40,20); 
    fill(255,0,0); //fill red
    //draw mouth
    ellipse(250,300,40,40); 
    
    //draw eyeglasses
    noFill();
    strokeWeight(7);
    stroke(90, 143, 40);
    ellipse(200,220,70,70); 
    ellipse(300,220,70,70);
    line(235,220,260,220);
  
}




