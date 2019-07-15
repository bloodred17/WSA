// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 16-May-2019

document.write("<h1>To find the Area and Perimeter of a rectangle:</h1><br>>> ");

var len = (prompt("Enter Length of a rectangle:"));
var br = prompt("Enter Breadth of the rectangle:");

if (len === null || len === "" || isNaN(len) || len < 0) {
    document.write("Enter a valid length" + "<br>");
} else if (br === null || br === "" || isNaN(br) || br < 0) {
    document.write("Enter a valid breadth" + "<br>");
} else {
    len = parseFloat(len);
    br = parseFloat(br);
    var area = len * br;
    var perimeter = 2 * (len + br);
    document.write("Area: " + area);
    document.write("<br>>> Perimeter: " + perimeter);
}

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");