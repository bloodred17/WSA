var pattern = /^\+91\s[0-9]{5,5}\s[0-9]{5,5}/;
var input = prompt("Enter Mobile number: ");
document.write("Mobile number validity : "+pattern.test(input));