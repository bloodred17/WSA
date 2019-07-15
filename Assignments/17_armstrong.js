//******************************************************************
// + Discription: Program to calculate Armstrong number
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institution: WSA
//******************************************************************

document.write("<h1>To Display Armstrong numbers</h1><br>");
//Taking Input
var lower = +prompt("Enter lower limit:");
var upper = +prompt("Enter upper limit:");
//Validating variables
if( lower === null || lower == "" || isNaN(lower) ||
    upper === null || upper == "" || isNaN(upper) ){
    document.write("Enter a valid input");
}else{
    document.write(">> Armstrong Numbers: <br>");
    //Calculating Armstrong number
    for(var i = lower; i < upper; i++){
        var sum = 0;
        for(var j = i; j > 0; j = parseInt(j/10)){
            sum += Math.pow(j%10, 3);
        }
        if(sum == i){
            //Displaying Data
            document.write(">> "+i+"<br>");
        }
    }
}
