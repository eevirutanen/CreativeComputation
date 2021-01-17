//Load text example
//Eevi Rutanen
//17.11.2020
//Loading text and using string methods.
//Using regular expressions to search and replace patterns in text.
//Using emojis based on HTML character codes.

var myText;
var margin = 30;
function preload(){
    //load text in the preload function
    myText = loadStrings("data/sample.txt");
}
function setup(){
    createCanvas(500,900);
    background(0);
    textAlign(LEFT,TOP);
    background(0);
    textSize(30);
    fill(255);
    //join all strings to one big string, separate strings with an empty space
    var fullText = join(myText,' ');
    //replace all letter "c"s with a coffee cup emoji
    //replace all mentions of "p5.js" with a victory emoji
    //use char() to convert a unicode number into a character
    //the regular expression modifier g helps to finds all matches of the pattern, not just the first one
    fullText = fullText.replace(/p5.js/g,char(9996)); 
    fullText = fullText.replace(/c/g,char(9749));
    //display text
    text(fullText,margin,margin,width-margin*2);
}
