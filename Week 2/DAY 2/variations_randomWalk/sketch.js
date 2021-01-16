//Random walk variations
//Eevi Rutanen

//First variation: lines
var x, y;
var w = 10;
function setup(){
    createCanvas(500,500);
    x = width / 2;
    y = height / 2;
    background(0);
    stroke(255);
}
function draw(){
    var ran = random(4); 
    if(ran < 1) {
        line(x,y,x+w,y);
        x+=w;
    }
    else if(ran < 2){
        line(x,y,x-w,y);
        x-=w;
    }
    else if(ran < 3) {
        line(x,y,x,y+w);
        y+=w;
    }
    else {
        line(x,y,x,y-w);
        y-=w;
    }
    
}

//Second variation: diagonal lines

/*var x, y;
var w = 20;
function setup(){
    createCanvas(500,500);
    x = width / 2;
    y = height / 2;
    background(0);
    stroke(255);
}
function draw(){
    var ran = random(8); 
    if(ran < 1) {
        line(x,y,x+w,y);
        x+=w;
    }
    else if(ran < 2){
        line(x,y,x+w,y-w);
        x+=w;
        y-=w;
    }
    else if(ran < 3){
        line(x,y,x-w,y);
        x-=w;
    }
    else if(ran < 4){
        line(x,y,x-w,y+w);
        x-=w;
        y+=w;
    }
    else if(ran < 5) {
        line(x,y,x,y+w);
        y+=w;
    }
    else if(ran < 6) {
        line(x,y,x+w,y+w);
        y+=w;
        x+=w;
    }
    else if(ran < 7) {
        line(x,y,x-w,y-w);
        y-=w;
        x-=w;
    }
    else {
        line(x,y,x,y-w);
        y-=w;
    }
    
}*/

//Third variation: overlapping circles with blendMode
/*
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
*/
