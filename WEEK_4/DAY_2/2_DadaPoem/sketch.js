//Dada Poem
//Eevi Rutanen
//17.11.2020
//This sketch demonstrates how to extract random strings from long texts to create dadaist cut-up poems. It also demonstrates how to use various string methods for parsing text.
//Poems by T.S. Eliot from the Gutenberg Project
//https://www.gutenberg.org/ebooks/1567
//Fortress Vacuum Cleaner Manual
//https://www.fortress.com.hk/pdf/BP_11207373_EN.pdf

var eliot, manual; //variables for text files
var verses; //variable for number of verses
var margin = 20; //margin size
var poem = []; //empty array for poem

function preload(){
    //load two text files
    eliot = loadStrings("assets/Eliot.txt");
    manual = loadStrings("assets/manual.txt");
}
function setup(){
    createCanvas(500,600);
    background(0);
    //set text styles
    textFont("Courier");
    textSize(16);
    textAlign(LEFT, TOP);
    textLeading(18);
    fill(255);
    
    title = random(eliot); //take random line from text
    //convert to uppercase and trim empty spaces
    title = title.toUpperCase().trim();
    //randomise the number of verses in the poem
    verses = random(1,4);
    //repeat the process for the wanted number of verses
    for(var i=0; i < verses; i++){
        //make empty string
        var s = '';
        //repeat while string is empty
        //this is to make sure we don't take an empty line from the text file
        while(s === ''){
            //get a random line from text
            s = random(eliot);
            //trim empty spaces
            s = s.trim();
        }
        //now we have a trimmed, non-empty line from text. push it to poem array
        poem.push(s);
        
        //do the same thing for the other text
        var s = '';
        while(s === ''){
            s = random(manual);
            s = s.trim(); //trim empty spaces
        }
        poem.push(s);
    }
    //now we have a poem array that has lines from both texts. join the array members together to one long string
    poem = join(poem,"\n\n");
    //display title and poem
    text(title, margin, margin, width);
    text(poem, margin, 80, 0.8*width);
}
