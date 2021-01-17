//Text on path
//Drawing text along a sine curve. Here text is spaced evenly on the outline of the shape.
//Eevi Rutanen
//25.11.2020
var s = " I LOVE CODING! "
var freq = 3; //frequenqy = how many "peaks" the shape has
var rad = 150; //size of shape
var amp = 20; //amplitude = height of peaks
var phase = 0; //starting point of wave
var speed = 0.05; //how fast wave is moving

function setup(){
    createCanvas(500,500);
    textAlign(CENTER,BOTTOM);
    textSize(20);
    stroke(255);
    noFill();
}

function draw(){
    background(0);
    //move to center
    translate(width/2, height/2);
    //start drawing shape
    beginShape();
    //loop through the letters in the string
    for(var i=0; i <= s.length; i++ ){
        push();
            //calculate coordinates along the path, animate path
            var angle = TWO_PI/s.length*i;
            var r = rad + sin(freq*angle+phase)*amp;
            var y = sin(angle)*r;
            var x = cos(angle)*r;
            //calculate the angle of rotation from center of shape to the coordinate of each letter
            var rot = atan2(y, x)+PI/2;
            //translate to coordinates
            translate(x,y);
            //rotate letter
            rotate(rot);
            //get current letter from the string
            var letter = s.charAt(i);
            fill(255);
            noStroke();
            //draw letter
            text(letter,0,0);
            //draw vertex point of the shape
            curveVertex(x,y)
        pop();
    }
    endShape();
    phase+=speed; //increase phase = animate wave along the path
}