//This example demonstrates how to declare and use functions that return a value.
//Function for converting numbers to Roman numerals is by commenter DrSlump from http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter

function setup(){
    createCanvas(500,500);
    background(0);
    fill(255);
    textSize(60);
    textAlign(CENTER);
}
function draw(){
    var myRoman = romanize(53);
    text(myRoman,width/2,height/2);
}

//This function takes in a number and returns a string that contains the number converted to Roman numerals
function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var roman = '';
    var i;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}
