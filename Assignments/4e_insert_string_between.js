//******************************************************************
// + Discription: Program to insert string in between a string
// + Author     : Ankur S Dutta
// + Date       : 30-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To input a string in between a string: </h1><br>");
//----------V.1
// //Taking Input
// var mainStr = prompt("Enter a string:");
// var subStr = prompt("Enter a sub-string:");
// var pos = prompt("Enter position to enter the sub-string:");
// //Validating variables
// if( mainStr === null || mainStr === "" || !isNaN(mainStr) ||
// subStr === null || subStr === "" || !isNaN(subStr) ||
// pos === null || pos === "" || isNaN(pos)){
//     document.write("Enter valid input");
// }else{
//     var str = "";
//     document.write(">> String: "+mainStr+"<br>");
//     document.write(">> Sub-String: "+subStr+"<br>");
//     document.write(">> Position: "+pos+"<br>");
//     //Inserting sub-string inside string at given position
//     var temp = mainStr.substr(0,pos);
//     str += temp;
//     str += subStr;
//     temp = mainStr.substr(pos);
//     str += temp;
//     document.write("Resultant String: "+str);
// }

//-------------V.2
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "");
    return input;
}

var input1 = inputData("Enter a String: ");
document.write("<br>>> Input String: "+ input1);

var input2 = inputData("Enter a Substring: ").split(" ");
document.write("<br>>> Sub String: "+ input2.join(" "));

document.write("<br>>> Number of words: "+ input1.split(" ").length);
var pos = parseInt(inputData("Enter position to input substring: "));
console.log(input1.length);
var output = input1.split(" ");
if(isNaN(pos) || pos > output.length || pos < 0){
    document.write("<br>Enter a valid position");
    throw("Not a valid position");
}else{
    document.write("<br>>> Entered position: "+pos);
    // var output = input1.substring(0, pos) + input2 + input1.substr(pos);
    output.splice(pos,0,input2.join(" "));
    document.write("<br>>> Output String: "+ output.join(" "));
}