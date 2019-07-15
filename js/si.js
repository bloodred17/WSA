// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 16-May-2019
document.write("<h1>To find the Simple Interest:</h1><br>>> ");

var principle = prompt("Enter Principle Amount:");
var rate = prompt("Enter Rate:");
var time = prompt("Enter Time period (in Years)");

if(principle === null || principle === "" || isNaN(principle)){
    document.write("Enter a valid Principle amount");
    alert("Principle amount invalid");
}else if(rate === null || rate === "" || isNaN(rate)){
    document.write("Enter a valid Rate");
    alert("Rate invalid");
}else if(time === null || time === "" || isNaN(time)){
    document.write("Enter a valid Time Period (in Years)");
    alert("Time Period invalid");
}else{
    principle = parseInt(principle);
    rate = parseFloat(rate);
    rate /= 100;
    time = parseFloat(time);

    var si = principle * (1 + (rate * time));
    document.write("Simple Interest for a period of "+time+" years is "+si);
}

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");
