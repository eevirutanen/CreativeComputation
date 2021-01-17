//Bouncy Blocks
//Drawing multple dynamic shapes using simple arrays to save the shape properties.
//Eevi Rutanen
var blocks = [];
var directions = []; //
var num = 20;
var w; //width of block
function setup(){
    createCanvas(500,500);
    w = width/num; //width of each block
    //create initial shapes by pushing values to arrays
    for(var i=0; i<num; i++){
        blocks.push(0);
        directions.push(random(-5,5));
    }
    stroke(255,255,0);
    fill(0);
}
function draw(){
    background(255,255,0);
    //loop through shapes
    for(var i=0; i<num; i++){
        var x = i*w; //calculate x-coordinate for each shape
        var h = blocks[i]; //get height of each shape
        rect(x,0,w,h); //draw shape
        ellipse(x+w/2,h,w);
        blocks[i] += directions[i]; //change the height of each shape according to the individual direction
        //if block hits the ceiling or floor, reverse the direction 
        if(blocks[i] > height || blocks[i] < 0){
            directions[i] *= -1;
        }
    }
}