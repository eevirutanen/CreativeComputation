//Fading mouse
//Eevi Rutanen
//5.10.2020
function setup(){
    //set canvas size 500*500px
    createCanvas(500,500);
    noStroke();
    background(0,0,255); //draw black background
    fill(255,200,255)
}
function draw(){
    background(0,0,255,20); //Draw background with low opacity in every frame.
    //Drawing a semi-transparent background over the mouse trail in every frame will accumulate to opaque. The older mouse trail will be eventually covered, but the newer mouse trail will remain visible through the background. This will appear as a fading trail.
    //Draw 50x50px ellipse at cursor position
    ellipse(mouseX,mouseY,50,50);
}
