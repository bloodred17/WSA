//******************************************************************
// + Discription: Program to reverse a string using Recursion
// + Author     : Ankur S Dutta
// + Date       : 4-June-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To Reverse a string using recursion: </h1><br>");
//Takes input
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
//Reverses a string through recursion
function reverseString( str, i = -1){
    return (i++ < str.length)? reverseString(str, i) + str.charAt(i) : "";
}
//Taking input
var input = inputData("Enter a String: ");
var rev = reverseString(input);
//Displaying data
document.write("<br>>> Reversed String: "+ rev);
