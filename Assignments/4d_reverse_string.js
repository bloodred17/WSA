//******************************************************************
// + Discription: Program to reverse string
// + Author     : Ankur S Dutta
// + Date       : 30-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To reverse a given string: </h1><br>");

var input = prompt("Enter a String:");
if(input === null || input === "" || !isNaN(input)){
    document.write("Enter a valid input");
}else{
    var temp = "";
    var str = "";
    document.write(">> Original String: "+input);
    // v.1
    for(var i = 0; i < input.length; i++){
        temp = input.charAt(i);
        str = temp + str;
    }
    
    //v.2
    // input.split("").forEach((elem) => {
    //     str = elem + str;
    // });

    // v.3
    // document.write("<br>>> Modified Sring: "+input.split("").reverse().join(""));
    
    document.write("<br>>> Modified Sring: "+str);
}