var input = prompt("Enter e-mail");

// var e_mail = input.split("@");
// var username = e_mail[0];
// var domain = e_mail[1];
// document.write("With Split <br>");
// document.write("Username :"+username+"<br>");
// document.write("Domain :"+domain);

var at_index = input.lastIndexOf("@");
var username = input.substr(0,at_index);
var domain = input.substr(at_index+1, input.length);

document.write("<br>Without Split <br>");
document.write("Username :"+username+"<br>");
document.write("Domain :"+domain);

