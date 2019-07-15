// <!-- + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 16-May-2019 -->
document.write("<h1>To check the greatest number of 3 numbers</h1><br>>> ");

var num1 = prompt("Enter a value for Number 1:");
var num2 = prompt("Enter a value for Number 2:");
var num3 = prompt("Enter a value for Number 3:");

if(num1 === null || num1 === "" || isNaN(num1) ||
    num2 === null || num2 === "" || isNaN(num2) ||
    num3 === null || num3 === "" || isNaN(num3)){

    document.write("Enter a valid Number.");
    alert("Invalid number");
}else{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    if(num1>num2 && num1 > num3){
        document.write(num1 + " is the greatest of "+ num1+ ", "+num2+", "+num3+".");
    }else if(num2 > num1 && num2 > num3){
        document.write(num2 + " is the greatest of "+ num1+ ", "+num2+", "+num3+".");
    }else if(num3 > num1 && num3 > num2){
        document.write(num3 + " is the greatest of "+ num1+ ", "+num2+", "+num3+".");
    }else{
        document.write("....");
    }
}
document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");