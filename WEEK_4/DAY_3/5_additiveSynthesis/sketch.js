//Additive synthesis
//Change the values for frequencies, amplitudes and phases and see how the waveform changes!
var phase1, amplitude1, frequency1;
var phase2, amplitude2, frequency2;
function setup(){
    createCanvas(500,500);
    frequency1 = 2; //frequency defines how often the wave repeats
    amplitude1 = 50; //amplitude defines the range
    phase1 = PI; //phase defines the starting position
    //values for the additional waveform
    frequency2 = 30;
    amplitude2 = 5;
    phase2 = PI;
}
function draw(){
    background(0);
    stroke(255);
    noFill();
    //move to center of screen
    translate(0, height/2);
    beginShape();
    for(var x = 0; x < width; x++){
        //calculate the input angle based on x position
        var angle = map(x, 0, width, 0, TWO_PI);
        //calculate y position
        var wave1 = sin(angle*frequency1+phase1)*amplitude1;
        var wave2 = sin(angle*frequency2+phase2)*amplitude2;
        var y = wave1 + wave2;
        vertex(x,y);
    }
    endShape();
}
