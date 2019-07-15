//******************************************************************
// + Discription: Program to calculate no of days in a year
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To display no. of days in a Year: </h1>");
//Taking Input
var num = +prompt("Enter a year");
var days;
//Validating variables
if(num == null || num == "" || isNaN(num)|| num < 0){
    document.write("Enter a valid value");
}else{
    //Checking for Leap Year
    if((num % 4 == 0 && num % 100 != 0) || (num % 400 === 0)){
        days = 366;
    }else{
        days = 365;
    }
    //Displaying data
 
    document.write(">> There are "+days+" days in "+num);
}