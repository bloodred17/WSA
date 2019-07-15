//******************************************************************
// + Discription: Program to swap cases of a string
// + Author     : Ankur S Dutta
// + Date       : 30-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To swap cases of a string: </h1><br>");
//Taking Input
var input = prompt("Enter a string:");
//Validating variables
if(input === null || input === "" || !isNaN(input)){
    document.write("Enter a valid value");
}else{
    var str = "";
    document.write(">> Original String: "+input+"<br>");
    //Swapping Cases
    for(var i = 0; i < input.length; i++){
        //Checking for cases
        if(input.charAt(i) === input.charAt(i).toUpperCase()){
            str += input.charAt(i).toLowerCase();
        }else{
            str += input.charAt(i).toUpperCase();
        }
    }
    //Displaying Data:
    document.write(">> Modified String: "+str);
}