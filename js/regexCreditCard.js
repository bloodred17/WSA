var pattern = /^[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}$/;
var input = prompt("Enter string");
document.write("<br>>> Credit card Validity: "+pattern.test(input));