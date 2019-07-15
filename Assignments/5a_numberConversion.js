//******************************************************************
// + Discription: Program to convert Decimal to Binary
// + Author     : Ankur S Dutta
// + Date       : 27-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To convert a Decimal into Binary, Octal and Hexadecimal: </h1>");

//Taking input
var num = +prompt("Enter a Decimal Integer:");

//Checking for validity
if (num == null || num === "" || isNaN(num)) {
    document.write("Enter a valid Decimal Integer");
} else {
    document.write(">> Decimal : " + num + "<br>");

    //Calculating Binary
    var sum = "";
    for (var i = num; i > 0; i = parseInt(i / 2)) {
        sum = (i % 2) + sum;
    }
    if(num === 0){
        sum += num;
    }
    document.write(">> Binary : " + sum + "<br>");
    
    //Calculating Octal
    sum = "";
    for (i = num; i > 0; i = parseInt(i / 8)) {
        sum = (i % 8) + sum;
    }
    if(num === 0){
        sum += num;
    }
    document.write(">> Octal : " + sum + "<br>");
    
    //Calculating Hexadecimal
    sum = "";
    var temp;
    for (i = num; i > 0; i = parseInt(i / 16)) {
        temp = i % 16;
        switch(temp){
            case 10 : temp = "A"; break;
            case 11 : temp = "B"; break;
            case 12 : temp = "C"; break;
            case 13 : temp = "D"; break;
            case 14 : temp = "E"; break;
            case 15 : temp = "F"; break;
        }
        sum = temp + sum;
    }
    if(num === 0){
        sum += num;
    }
    document.write(">> Hexadecimal : " + sum + "<br>");
}