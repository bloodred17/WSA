var input = prompt("Enter a string");

// for(var i = 0; i < input.length; i++){

// }

var change = input.charAt(0).toUpperCase();
document.write(">> Input: "+change+"<br>");
input[0] = change[0];
document.write(">> Input: "+input);

