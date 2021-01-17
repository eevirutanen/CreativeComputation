//Eevi Rutanen
//18.11.2020
var points, rad, loops, color;
var input1, input2, input3;
function setup(){
    createCanvas(500,500);
    rad = 300;
    points = 200;
    input1 = 0;
    input2 = 0;
    input3 = 0;
    stroke(0,0,255);
    strokeWeight(2);
}
function draw(){
    background(0,0,255);
    translate(width/2, height/2);
    rotate(sin(input3));
    color = map(sin(input2), -1, 1, 100, 255);
    loops = map(sin(input3), -1, 1, 3, 8);
    fill(255,180,color);
    shape(points,rad,loops);
    input1 += 0.1;
    input2 += 0.03;
    input3 += 0.01;
}

function shape(points, rad, loops){
    beginShape();
    for(var i=0; i <= points; i++ ){
        var angle = TWO_PI/points*i;
        var y = sin(angle)*rad*sin(angle*loops);
        var x = cos(angle)*rad*cos(angle*loops);
        vertex(x,y);
    }
    endShape();
}

