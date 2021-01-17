//Random walk variations: Lines
//Eevi Rutanen
//10.10.2020

//First variation: lines
var x, y;
var w = 10;
function setup(){
    createCanvas(500,500);
    x = width / 2;
    y = height / 2;
    background(255, 205, 161);
    strokeWeight(2);
    stroke(0);
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
