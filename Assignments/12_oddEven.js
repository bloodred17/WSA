//******************************************************************
// + Discription: Program to check if number is even or odd
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To check if number is ever or odd: </h1><br>");
//Taking Input
var num = +prompt("Enter a number ");
//Validating variables
if(num == null || num === "" || isNaN(num)){
    document.write(">> Enter a valid number. <br>");
}else{
    //Checking for Even and Odd
    if(num % 2 == 0){
        document.write(">> "+ num + " is an Even number");
    }else{
        document.write(">> "+ num + " is an Odd number");
    }
}

