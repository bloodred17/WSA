var num1 = +prompt("Enter Number 1:");
var num2 = +prompt("Enter Number 2:");
var num3 = +prompt("Enter Number 3:");

var largest = (num1 > num2 && num1 > num3)? num1 : (num2 > num1 && num2 > num3) ? num2 : (num3 > num1 && num3 > num2)? num3 : "Enter valid values";
document.write("Largest: "+ largest);