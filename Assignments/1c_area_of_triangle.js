//******************************************************************
// + Discription: Program to print area of a triangle
// + Author     : Ankur S Dutta
// + Date       : 24-May-2019
// + Institution: WSA
//******************************************************************

document.write("<h1>To Print Area of a triangle:</h1><br>>>");


//Taking values
var side1 = +prompt("Enter value for side A");
var side2 = +prompt("Enter value for side B");
var side3 = +prompt("Enter value for side C");

//Checking values for validity
if (side1 === null || side1 <= 0 || side1 == "" || isNaN(side1) ||
    side2 === null || side2 <= 0 || side2 == "" || isNaN(side2) ||
    side3 === null || side3 <= 0 || side3 == "" || isNaN(side3)) {

    //Throwing Error message
    document.write("Enter valid values");
} else if (side1 + side3 < side2 || side3 + side2 < side1 || side2 + side1 < side3) {
    document.write("Value of Two sides should be greater than of equla to two sides");
} else {
    //Calculating area
    var s = (side1 + side3 + side2) / 2;
    var area = Math.sqrt(s * (s - side1) * (s - side3) * (s - side2));

    //Displaying data
    document.write("Area of Triangle: " + area);
}