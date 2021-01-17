//This example defines a function sineWave, and calls it inside a for-loop to draw multiple waves
var spacing = 50;
function setup(){
    createCanvas(500,500);

}
function draw(){
    background(176, 174, 74);
    fill(222, 169, 252);
    noStroke();
    for(var y=-50; y<height+50; y+=spacing){
        var c = map(y,-50,height+50,0,255);
        push();
            //move to the y coordinate
            translate(0,y);
            //calculate a different amplitude for all waves
            var amp = sin(frameCount/100)*100-y/4;
            //draw the wave
            sineWave(2,amp,0);
        pop();
    }

}

function sineWave(frequency,amplitude, phase){
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
