//SOLAR SYSTEM
//Eevi Rutanen
//Creative Computation for Visual Communication Design
//18.10.2020
//This exercise demonstrates how to use translations and rotations with push() and pop() commands

var a = 0; //variable for angle of rotation
function setup(){
    createCanvas(500,500);
    angleMode(DEGREES); //set angle mode
}
function draw(){
    background(0);
    translate(width/2,height/2); //move to center
    fill(255,255,0); //yellow
    ellipse(0,0,60,60); //draw the sun
    noFill();
    stroke(255);
    ellipse(0,0,200,200); //draw the orbit
    push();
        rotate(a); //rotate around the sun
        translate(100, 0); //translate to orbit
        fill(255,100,200); 
        ellipse(0,0,40,40); //draw planet at orbit
        rotate(a*2); //rotate around planet
        fill(255);
        ellipse(30,0,10,10); //draw moon 30px away from the planet
    pop();
    //revert to previous coordinate system (translated to center)
    push();
        rotate(a/3); //rotate around sun (3 times slower)
        stroke(255);
        ellipse(0,0,300,300); //draw outer orbit
        translate(150,0); //translate to orbit
        fill(255,0,0);
       
        ellipse(0,0,30,30); //draw planet at orbit
        rotate(a/2); //rotate around planet
        fill(255);
        ellipse(25,0,10,10); //draw the moon 25px away from the planet
    pop();
    //revert to previous coordinate system (translated to center)

    //add more orbiting planets and their moons!
    
    a++; // increment angle
    
}

