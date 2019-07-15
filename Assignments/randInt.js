//******************************************************************
// + Discription: Program to generate random Integer
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>Random Integer Generator: </h1><br>");

var digitOne = Math.floor(Math.random() * 9);
document.write(">> One Digit Int: "+digitOne+"<br>");

var digitTwo = Math.floor(Math.random() * (99-10)) + 10;
document.write(">> Two Digit Int: "+digitTwo+"<br>");

var digitThree = Math.floor(Math.random() * (999-100)) + 100;
document.write(">> Three Digit Int: "+digitThree+"<br>");

var digitFour = Math.floor(Math.random() * (9999-1000)) + 1000;
document.write(">> Four Digit Int: "+digitFour+"<br>");

var digitFive = Math.floor(Math.random() * (99999-10000)) + 10000;
document.write(">> Five Digit Int: "+digitFive+"<br>");