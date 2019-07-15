//******************************************************************
// + Discription: Program to display no of days in a Month
// + Author     : Ankur S Dutta
// + Date       : 27-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To display no of days in a Month: </h1>");

//Taking input
var num = prompt("Input Month (1-12):");
//Validating variables
if(isNaN(num)){
    switch(num.toLowerCase()){
        case "january" : days = 31; break;
        case "february" : days = 28; break;
        case "march" : days = 31; break;
        case "april" : days = 30; break;
        case "may" : days = 31; break;
        case "june" : days = 30; break;
        case "july" : days = 31; break;
        case "august" : days = 31; break;
        case "sebtember" : days = 30; break;
        case "october" : days = 31; break;
        case "november" : days = 30; break;
        case "december" : days = 31; break;
        default: days = "Not a valid month";
                document.write("<br>>> "+days+"<br>>> Enter valid Month");
                throw(days);
    }
}else if(num == null || num == "" || parseInt(num) < 0 || parseInt(num) > 12){
    throw("enter a valid month");
    document.write(">> Enter a valid month between 1 and 12");
}else{
    //Checking for days in a month
    var days = 0;
    if( num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12){
        days = 31;
    }else if( num == 4 || num == 6 || num == 9 || num == 11){
        days = 30;
    }else{
        days = 28;
    }
}
//Displaying data
document.write("Days in Month "+ num + " is "+days);
