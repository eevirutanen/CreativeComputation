var phase, amplitude, frequency, spacing;
function setup(){
    createCanvas(500,500);
    frequency = 2; //frequency defines how often the wave repeats
    amplitude = 100; //amplitude defines the range
    phase = 0; //phase defines the starting position
    spacing = 10; //spacing between dots
}
function draw(){
    background(0);
    stroke(255);
    translate(0, height/2);
    for(var x = 0; x < width; x+=spacing){
        //calculate the angle based on x position
        var angle = map(x, 0, width, 0, TWO_PI);
        //calculate y position
        var y = sin(angle*frequency+phase)*amplitude;
        ellipse(x,y,10);
    }
    //move the wave along by changing phase
    phase+=0.01;
}
