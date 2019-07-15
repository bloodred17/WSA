//******************************************************************
// + Discription: Program to find factors
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To find factors: </h1><br>");
//Taking Input
var num = +prompt("Enter a number:");
//Validating variables
if(num === null || num == "" || isNaN(num)){
    document.write("Enter a valid value");
}else{
    //Finding factors
    document.write(">> Factors of "+num+" : <br>");
    for(var i = 1; i <= num; i++){
        if(num % i === 0){
            document.write(">> "+i+ "<br>");
        }
    }
    //Formatting displays
    document.write("<br><br>");
    for(var i = 1; i <= num/2; i++){
        if(num % i === 0){
            var temp = parseInt(num/i);
            document.write(">> ( "+i+ ", "+ temp+" )<br>");
        }
    }
}