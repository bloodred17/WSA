//******************************************************************
// + Discription: Program to check if input is NaN
// + Author     : Ankur S Dutta
// + Date       : 27-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To check if input is NaN: </h1>");

//Taking input
var num = prompt("Input something:");

//Checking for validity
if (num == null || num == "" ) {
    document.write("Enter a valid Input");

    //Checking for NaN
}else if(isNaN(num)){
    document.write(">> "+ num + " is not a number");
}else{
    document.write(">> "+ num + " is a number");
}