//This example defines a function sineWave, and calls it with different values to draw multiple different waveforms.

function setup(){
    createCanvas(500,500);
    noFill();
}
function draw(){
    background(0);
    //move to center
    translate(0,height/2);
    sineWave(6,100,PI/2,color(255,0,0));
    sineWave(1,50,0,color(0,0,255));
    sineWave(3,100,PI/2,color(0,255,0));
}

function sineWave(frequency,amplitude, phase, col){
    stroke(col);
    beginShape();
        for(var x = 0; x < width; x++){
            //calculate the angle based on x position
            var angle = map(x, 0, width, 0, TWO_PI);
            //calculate y position
            var y = sin(angle*frequency+phase)*amplitude;
            vertex(x,y);
        }
    endShape();
}
