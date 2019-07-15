// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 16-May-2019
document.write("<h1>Calculator:</h1><br>>> ");

var num1 = prompt("Enter value of Number 1:");
var operator = prompt("Enter operator:");
var num2 = prompt("Enter value of Number 2:");
if(num1 === null || num1 === "" || isNaN(num1) ||
    num2 === null || num2 === "" || isNaN(num2)){
    
    document.write("Enter a valid number.");
    alert("Invalid number");
}else if(isNaN(operator)){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var result;
    switch(operator){
        case "+" : result = num1 + num2; break;
        case "-" : result = num1 + num2; break;
        case "*" : result = num1 * num2; break;
        case "/" : if(num1 !== 0 && num2 !== 0){
            result = num1 / num2;        
        }else{
            document.write("Numerator or Denominator cannot be 0<br>>> ");
        }
        break;
        default: document.write("Enter a valid operator.");
    }
    document.write(num1+" "+operator+" "+num2+" = "+result);
}