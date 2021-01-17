//Modulate amplitude, frequency, hue and dot size with additional sine functions!
//Try changing the mapped values for amplitude, freq, hue and dot soize.
//Also try changing the incrementation of inputs on the bottom of the code

var phase = 0, spacing = 20;
var ampMod = 0, freqMod = 0, hueMod = 0;
function setup(){
    createCanvas(500,500);
    colorMode(HSB); 
    noStroke();
}
function draw(){
    background(0);
    //move to center of screen
    translate(0,width/2);
    for(var x = 0; x <= width; x+=spacing){
        //calculate angle
        var angle = map(x, 0, width, 0, TWO_PI);
        //modulate amplitude with sin 
        var amplitude = map(sin(ampMod), -1, 1, -50, 50);
        //modulate frequency with sin
        var frequency = map(sin(freqMod), -1, 1, 1, 3);
        //modulate hue with sin
        var hue = map(sin(hueMod), -1, 1, 0, 360);
        //modulate dotsize with sin and x position
        var dotSize = map(sin(hueMod)*x,-width,width,10,50);
        //set fill color with hue
        fill(hue,100,100,0.5);
        //calculate y position
        var y=sin(angle*frequency+phase)*amplitude;
        //draw ellipse
        ellipse(x,y,dotSize);
    }
    //increment inputs for sine functions
    ampMod+=0.01;
    freqMod+=0.02;
    hueMod+=0.01;
    phase+=0.05;
}
