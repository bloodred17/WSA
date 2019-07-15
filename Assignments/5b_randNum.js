//******************************************************************
// + Discription: Program to generate random Integer
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>Random Integer Generator: </h1><br>");
//Taking limits
var min = +prompt("Ente Lower Limit:");
var max = +prompt("Enter Upper limit");
//validating variables
if (min === null || min === "" || isNaN(min) ||
    max === null || max === "" || isNaN(max)) {
    document.write("Enter valid values");
} else {
    //Generating random number
    var num = Math.floor(Math.random() * (max - min)) + min;
    document.write(">> Random Number: " + num);
}