//The waveform doesn't have to be made of ellipses or vertices! Try drawing rectangles, lines or other shapes!
var phase, amplitude, frequency, spacing;
function setup(){
    createCanvas(500,500);
    frequency = 1; //frequency defines how often the wave repeats
    amplitude = 100; //amplitude defines the range
    phase = 0; //phase defines the starting position
    spacing = 20; //spacing between blocks
    noFill();
    stroke(255);
}
function draw(){
    background(0);
    stroke(255);
    //move to center
    translate(0, height/2);
    for(var x = 0; x < width; x+=spacing){
        //calculate the angle based on x position
        var angle = map(x, 0, width, 0, TWO_PI);
        //calculate height of block
        var h = sin(angle*frequency+phase)*amplitude;
        rect(x,0,spacing,h);
    }
    //move the wave along by changing phase
    phase+=0.01;
}
