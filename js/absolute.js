var num = +prompt("Enter a number: ");
var ab = (num % 2 == 0)? parseInt(num) : num*(-1);
document.write("Absolute: "+ ab);