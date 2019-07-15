// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 16-May-2019
document.write("<h1>To check the greatest number of 2 numbers</h1><br>>> ");

var num1 = prompt("Enter Number 1:");
var num2 = prompt("Enter Number 2:");

if( num1 === null || num1 === "" || isNaN(num1) || 
    num2 === null || num2 === "" || isNaN(num2)){
    document.write("Enter a valid Number");
}else{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(num1 > num2){
        document.write(num1+" is greater than "+ num2+ ".");
    }else{
        document.write(num2+" is greater than "+ num1+ ".");
    }
}
document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");