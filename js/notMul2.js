var num1 = +prompt("Enter number 1:");
var num2 = +prompt("Enter number 2:");
var mul = 0;

if(num1 > 0){
    for(var i=num1; i > 0; i--){
        mul = mul + num2;
    }
}else{
    for(var i = num1; i < 0; i++){
        mul = mul + num2;
    }
    if(num1 < 0 && num2 > 0){
        mul = mul * (-1);
    }
}

document.write(num1+ " * "+ num2+ " = "+mul);

