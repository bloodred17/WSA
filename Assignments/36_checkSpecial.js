//******************************************************************
// + Discription: Program to print area of a triangle
// + Author     : Ankur S Dutta
// + Date       : 14-June-2019
// + Institution: WSA
//******************************************************************

//Specifying Required pattern: pattern should contain only letters and numbers
var pattern = /[a-zA-Z0-9]/;

//Taking input from user
var input = prompt("Enter a string: ");

//Displaying if input string contains letters and numbers or not
document.write("<br>>> Contains Alpha numeric: " + pattern.test(input));