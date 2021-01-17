//Drawing the sine waveform
//Change the values for amplitude, phase, frequency and spacing to see how that affect the waveform.

var phase, amplitude, frequency, spacing, dotSize;
function setup(){
    createCanvas(500,500);
    frequency = 4; //frequency defines how often the wave repeats
    amplitude = 100; //amplitude defines the range
    phase = PI; //phase defines the starting position
    spacing = 5; //spacing between dots
    dotSize = 5;
}
function draw(){
    background(0);
    stroke(255);
    //move y to center of screen
    translate(0, height/2);
    for(var x = 0; x < width; x+=spacing){
        //calculate the angle based on x position
        var angle = map(x, 0, width, 0, TWO_PI);
        //calculate y position
        var y = sin(angle*frequency+phase)*amplitude;
        ellipse(x,y,dotSize);
    }
}
