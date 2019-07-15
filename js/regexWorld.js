var pattern = /world/i;
var patternAlNum = /[0-9]*[a-z]/i;
var input = prompt("Enter a sentence: ");
document.write("<br> Contains \'World\' : "+ pattern.test(input));
document.write("<br> Contains Alpha Numeric : "+ patternAlNum.test(input));

