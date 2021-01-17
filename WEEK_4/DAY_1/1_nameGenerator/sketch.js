//Artist Name Generator
//Eevi Rutanen
//15.11.2020
//This example demonstrates how to load JSON files and get random elements from the data. Inspired by the Artist Name Generator by Heikki Lotvonen (no longer online).
//The dog name data contains 1000 popular dog names from the New York City Department of Health's dog licensing data.
//JSON was downloaded from here: https://github.com/dariusk/corpora/tree/master/data/animals
//The apple cultivars data contains the 1000 most popular apple cultivars in the USDA's Pomological Watercolor collection.
//JSON was downloaded from here: https://github.com/dariusk/corpora/tree/master/data/foods

var dogData, appleData, dogs, apples, myName;

function preload(){
    //load JSON file data to variables
    dogData = loadJSON("data/dog_names.json");
    appleData = loadJSON("data/apple_cultivars.json");
    
}
function setup(){
    createCanvas(500,500);
    //print JSON files to console
    print(dogData);
    print(appleData);
    //get the dog names array from JSON file
    dogs = dogData["dog_names"];
    //get the apple names array from JSON file
    apples = appleData["cultivars"];
    //get random items from arays
    //add them together with a space between
    myName = random(dogs)+" "+random(apples);
    textFont("Times New Roman");
    fill(255,0,0);
    textSize(50);
    textAlign(LEFT,TOP);
}
function draw(){
    background(255,255,0);
    //Draw text
    text("Your artist name is: ",10,10);
    text(myName, 10, 70, width);
}

function mouseClicked(){
    //when mouse is clicked, get a new random name combination
    myName = random(dogs)+" "+random(apples);
}


