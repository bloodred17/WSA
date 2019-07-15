//******************************************************************
// + Discription: Program to display the longest sentence
// + Author     : Ankur S Dutta
// + Date       : 30-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To display the longest sentence: </h1><br>");
//Taking Input
var input = prompt("Enter a Sentence");
//Validating variables
if(input === null || input === "" || !isNaN(input)){
    document.write("Enter a valid input");
}else{
    var words = input.split(" ");
    var longest_word = words[0];
    var longest = words[0].length;
    //Checking for longest word
    for(let i = 1; i<words.length; i++){
        if(words[i].length > longest){
            longest = words[i].length;
        }
    }
    document.write(">> Longest word(s): ");
    // Displaying data
    for(let j in words){
        if(words[j].length === longest ){
            document.write(words[j]+" ");
        }
    }
}