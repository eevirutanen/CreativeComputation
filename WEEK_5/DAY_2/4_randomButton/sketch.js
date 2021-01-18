//Random button example
//Eevi Rutanen 15.11.2020
//Creating a button, attaching an event listener to button and setting a random value with button click.
//variable for button
var button;
//variable for background color
var col;
function setup(){
    createCanvas(500,500);
    //set a random color
    col = color(random(255),random(255),random(255));
    //create button, set text for button
    button = createButton("Randomize!");
    //set button position and CSS style
    button.position(20,20);
    button.style("border", "none");
    button.style("background-color", "rgb(255,200,255)");
    button.style("padding", "15px");
    //attach event listener (mousePressed) and callback function (randomColor) to the button
    //so every time button is pressed, randomColor function is executed 
    button.mousePressed(randomColor);
}
function draw(){
    //set background color with the randomised variable r
    background(col);
}
//callback function for button
function randomColor(){
    col = color(random(255),random(255),random(255));
    
}