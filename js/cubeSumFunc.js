//******************************************************************
// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 23-May-2019
//******************************************************************

function cubeSum (a, b){
    return (a*a*a)+(b*b*b);
}

var num1 = +prompt("Enter Number 1:");
var num2 = +prompt("Enter Number 2:");

document.write("Result: "+ cubeSum(num1, num2));