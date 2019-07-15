//******************************************************************
// + Discription: Program to count number of vowels
// + Author     : Ankur S Dutta
// + Date       : 4-June-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To count number of vowels in a string: </h1><br>");
//Takes input
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
//Checks for vowels
function checkVowel(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    return str.split("").reduce((acc, elem) => {
        return (vowels.includes(elem))? count++ : count;
    }, "");
}
//Input Intake
var input = inputData("Enter a String: ");
document.write("<br>>> Input String: "+input);
//Displaying Data
document.write("<br>>> Number of Vowels: "+ checkVowel(input));