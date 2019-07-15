//******************************************************************
// + Discription: Program to convert temperature from Farenheit to Celcius
// + Author     : Ankur S Dutta
// + Date       : 24-May-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To conver Farenheit to Celcius: </h1><br>>> ");

//Taking values
var farenheit = +prompt("Enter value for Faenheit");

//Checking validity of values
if (farenheit === null || farenheit === "" || isNaN(farenheit)) {
    //Throwing error message
    document.write("Enter valid values");
} else {
    //Calculating Celcius
    var celcius = (farenheit - 32) / 1.8;
    //Displaying Data
    document.write("Farenheit: " + farenheit + "&deg F" + "<br>>> Celcius: " + celcius + "&deg C");
}