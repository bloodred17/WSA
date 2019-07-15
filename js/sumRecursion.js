function sum(num){
    return (num > 0)? num%10 + sum(parseInt(num/10)) : 0;
}

var input = +prompt("Enter a value to print sum of digits: ");
document.write("Sum of Digits of "+input+" is : "+sum(input));
