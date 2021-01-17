//Stripe pattern with for-loops insipred by Anni Albers
//Eevi Rutanen 4.11.

//declare variables for colours
var green, orange, brown, white;

function setup(){
    createCanvas(500,500);
    noStroke();
    background(0);
    //set values for colour variables 
    green = color(0, 120, 100);
    orange = color(255, 186, 158);
    brown = color(171, 58, 0);
    white = color(255);
}
function draw(){
    fill(green);
    //draw horizontal green stripes from top down every 20px
    for(var i = 0; i < height; i+=20){
        rect(100,i,200,10);
    }
    //draw horizontal orange stripes from top down every 20px
    fill(orange);
    for(var i = 0; i < height; i+=20){
        rect(200,i+10,200,10);
    }
    //draw 5 vertical brown stripes from right to left
    fill(brown);
    for(var i = 0; i < 5; i++){
        
        var x = width/5*i;
        rect(x,0,20,200);
    }
    //draw 5 vertical brown stripes from left to right, next to the previous stripes
    for(var i = 0; i < 5; i++){
        var x = width/5*i;
        rect(x+20,20,20,200);
    }
    //draw 10 white stripes from left to right
    fill(white);
    for(var i = 0; i < 10; i++){
        var x = width/10*i;
        var y = height-100
        rect(x,y,25,100);
    }
    //draw 10 white stripes from left to right, above the previous
    for(var i = 0; i < 10; i++){
        var x = width/10*i+25;
        var y = height-200
        rect(x,y,25,100);
    }
    
}
