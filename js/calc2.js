// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 16-May-2019

// + Edit   : 29-May-2019
document.write("<h1>Calculator:</h1>");

//Validates Numbers
const numberValidator = (check) => {
    return (check === null || check === undefined || check === "" || isNaN(check))? true : false;
};
//Validates Operators
const operatorValidator = (check) => {
    return (check === null || check === undefined || check === "" || !isNaN(check))? true : false;
};

var num1 = prompt("Enter value of Number 1:");
var operator = (numberValidator(num1))? null : prompt("Enter Operator:");
var num2 = (operatorValidator(operator))? null : prompt("Enter value of Number 2:");

if(numberValidator(num1) || numberValidator(num2)){
    document.write("<br>>> Enter valid data.");
    alert("Invalid data");
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
            document.write("<br>>> Numerator or Denominator cannot be 0");
        }
        break;
        default: document.write("<br>>> Enter a valid operator.");
    }
    document.write("<br>>> "+num1+" "+operator+" "+num2+" = "+result);
}

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");
