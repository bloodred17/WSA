//******************************************************************
// + Discription: Program to swap two variables without third variable
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To SWAP without Temporary variable: </h1><br>");
//Taking values
var var1 = +prompt("Enter first number:");
var var2 = +prompt("Enter second number:");
//Validating values
if (var1 == null || var1 == "" || isNaN(var1) || var2 == null || var2 == "" || isNaN(var2)) {
    document.write(">> Enter valid values.");
}else{
    document.write(">> Var1: "+var1+", Var2: "+var2+"<br>");
    //Swapping variables
    var1 = var2 - var1;
    var2 = var2 - var1;
    var1 = var1 + var2;
    //Displaying data
    document.write(">> Var1: "+var1+", Var2: "+var2+"<br>");
}