// var email = /^[0-9a-zA-Z]+@+[a-z]+\.com$/;
var email = /[a-z0-9A-Z\+]+@[a-z]{1,10}\.+[a-zA-Z\.]{2,5}$/;
var password = /^[A-Z]{1,5}[\@\#\$\%\^]+[a-zA-Z0-9]*[0-9]{1,5}$/;
var inputMail = prompt("Enter E-mail address: ");
var inputPass = prompt("Enter Password: ");
document.write("<br>>> E-mail: "+inputMail);
document.write("<br>>> E-mail Valid: "+ email.test(inputMail));
document.write("<br>>> Password Valid: "+ password.test(inputPass));