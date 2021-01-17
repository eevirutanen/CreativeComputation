//Random walk variations: Blend Mode
//Eevi Rutanen
//10.10.2020

var x, y;
var w = 40;
function setup(){
    createCanvas(500,500);
    x = width / 2;
    y = height / 2;
    background(255,0,0);
    noStroke();
    blendMode(LIGHTEST);
}
function draw(){
    var ran = random(4); 
    if(ran < 1) x+=w*0.75;
    else if(ran < 2) x-=w*0.75;
    else if(ran < 3) y+=w*0.75;
    else y-=w*0.75;
    fill(random(255),random(255),random(255));
    ellipse(x,y,w,w);   
}
