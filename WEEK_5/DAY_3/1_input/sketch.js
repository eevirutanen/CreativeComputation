//This example demonstrates how to add a text input field and read the input value.
//It also demonstrates how to use mousePressed event and randomSeed to randomise values when mouse is clicked

var input, seed;
var angle = 0;

function setup(){
    createCanvas(500,500);
    textSize(20);
    fill(255);
    //create input
    input = createInput("Type something here.");
    input.position(10,height-40);
    //resize the input
    input.size(width-20);
    input.attribute('maxlength', '15'); //set maximum length for input field
    //calculate random value for the random seed
    seed = random(100);
}
function draw(){
    //set randomSeed to avoid flickering values
    randomSeed(seed);
    background(207, 3, 252);
    //read input value
    var val = input.value();
    //draw 20 text boxes with random positions and rotations
    for(var i=0; i<20; i++){
        push();
            translate(random(width),random(height));
            rotate(random(TWO_PI)+angle);
            text(val,0,0);
        pop();
    }
    //increase rotation
    angle+=0.001;
}
//get a new random seed value when mouse is clicked
function mousePressed(){
    seed = random(100);
}