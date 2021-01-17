//MultiModulation
//Eevi Rutanen
//Using a nested loop to draw multiple waveforms, modulating the colour and amplitude with additional sine waves

var phase, spacing, dotSize, frequency;
var ampMod, colorMod;
function setup(){
    createCanvas(500,500);
    phase = 0;
    xSpacing = 20; //spacing between dots
    ySpacing = 40; //spacing between dots
    ampMod = 0;
    colorMod = 0;
    frequency = 2;
    dotSize = 20;
    noStroke();
}
function draw(){
    background(0,0,255);
    for(var y = -100; y <= height+100; y+=ySpacing){
        for(var x = 0; x <= width; x+=xSpacing){
            var angle = map(x, 0, width, 0, TWO_PI);
            var red = map(y, 0, height, 150, 255);
            var green = map(sin(colorMod), -1, 1, 50, 100);
            var amplitude = map(sin(ampMod), -1, 1, -100, 100);
            fill(red,green,0);
            //calculate y position
            var dy = y + sin(angle*frequency+phase)*amplitude;
            rect(x,dy,dotSize);
        }
    }
    //increment inputs for sine functions
    ampMod+=0.01;
    colorMod+=0.02;
    phase+=0.005;
}
