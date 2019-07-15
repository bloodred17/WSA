//******************************************************************
// + Discription: Program to convert first letter of each word to uppercase
// + Author     : Ankur S Dutta
// + Date       : 5-July-2019
// + Institute  : WSA
//******************************************************************

document.write("<h1>To capitalize first character of each word: </h1><br>");
//Takes input
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
//Defining articles prepositions and conjunctions, these will stay uneffected
var articles = ["a", "an", "the"];
var prepositions = ["under", "between", "over", "on", "at", "behind", "above", "of", "off", "to", "am"];
var conjunction = ["and", "for", "nor", "but", "or", "yet", "so"];
//Taking input
const str = inputData("Enter a string");
const modified_str = str.split(" ").map((elem, i) => {
    let temp = elem.substr(0,1).toUpperCase() + elem.substr(1);
    return (i === 0)? temp : (articles.includes(elem) || prepositions.includes(elem) || conjunction.includes(elem))? elem : temp; 
}).join(" ");
document.write("<br>Modified String: "+modified_str);