var num1 = +prompt("Enter number 1:");
var num2 = +prompt("Enter number 2:");
var mul = 0;
var negative = false;

if(num1 < 0){
    num1 = num1 * (-1);
    negative = true;
}

for(var i=num1; i > 0; i--){
    mul = mul + num2;
}

if(negative){
    mul = mul * (-1);
    num1 = num1 * (-1);
}

document.write(num1+ " * "+ num2+ " = "+mul);
