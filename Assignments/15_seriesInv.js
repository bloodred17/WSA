//******************************************************************
// + Discription: Program to calculate series 1 and series 2
// + Author     : Ankur S Dutta
// + Date       : 24-May-2019
// + Institute  : wSA
//******************************************************************

//Taking values
var num = +prompt("Enter limiter for series 1 and 2:");

//Checking validity of values
if (num == null || num == "" || isNaN(num)) {
    document.write("Enter valid value.");
} else {

    //Calculating series-1
    var sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + (1 / i);
    }

    //Displaying data
    document.write("Result series 1: " + sum);
    document.write("<br>");

    //Calculating series-2
    sum = 0;
    var j = 2;
    for (let i = 1; i <= num; i++, j += 2) {
        sum += j;
    }

    //Displaying data
    document.write("Result series 2: " + sum);

}