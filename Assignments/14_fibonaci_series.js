//******************************************************************
// + Discription: Program to print Fibonaci series till n 
// + Author     : Ankur S Dutta
// + Date       : 24-May-2019
// + Institute  : wSA
//******************************************************************

//Taking values
var num = +prompt("Enter limit for Fibonaci series");

//Checking for validity
if (num == null || num === "" || isNaN(num)) {
    document.write("Enter a vlid value");
} else {

    //Calculating fibonaci series
    var num1 = 1;
    var num2 = 0;
    var num3 = 0;
    for (let i = num; i > 0; i--) {
        num2 = num1;
        num1 = num3;
        num3 = num1 + num2;
        document.write(num1 + "<br>");
    }
}