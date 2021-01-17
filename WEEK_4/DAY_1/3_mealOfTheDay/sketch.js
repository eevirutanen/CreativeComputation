//Random Meal of the Day
//Eevi Rutanen
//16.11.2020
//This example demonstrates how to load and parse a JSON file and use a callback function to load an image based on an url in the data.

var data;
var img;
//The API query returns a JSON object containing one random meal recipe.
//After loading is finished, call the function getImage
var url = "https://www.themealdb.com/api/json/v1/1/random.php";
function preload(){
    data = loadJSON(url,getImage);
}
function setup(){
    createCanvas(500,500);
    background(255,0,0);
    print(data); //print data to console
    //get the strMeal element in the first item in the meals array
    var dish = data["meals"][0]["strMeal"];
    imageMode(CENTER);
    //resize image so that height is 200px and width is proportional
    img.resize(0,300);
    //draw image
    image(img,width/2,height/2);
    fill(255);
    textSize(20);
    textAlign(CENTER);
    textFont("Courier");
    //write meal title under image
    rectMode(CENTER);
    text(dish,width/2,height/2+180,width,50);
    
}
function draw(){
    
}
//Callback function for loading the meal image after JSON data is loaded
//Get the image url from the strMealThumb element in the JSON array and save if to img
function getImage(){
    img = loadImage(data["meals"][0]["strMealThumb"]);
}
