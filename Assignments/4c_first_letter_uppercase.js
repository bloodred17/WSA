//******************************************************************
// + Discription: Program to Capitalize first letter
// + Author     : Ankur S Dutta
// + Date       : 29-May-2019
// + Institute  : wSA
//******************************************************************

//----------- V.1
// document.write("<h1>To capitalize first letter: </h1><br>");

// var input = prompt("Enter a string:");
// if( input === null || input === "" || !isNaN(input)){
//     document.write("Enter a valid input");
// }else{
//     var str = input.split(" ");
//     var temp = "";
//     var store = "";
//     document.write(">> Original String: "+input+"<br>");    
//     for(var i = 0; i < str.length; i++){
        // temp = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase());
        // store = store + (temp + " ");
//     }
//     document.write(">> Modified String: "+store);
// }

function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
var words = inputData("Enter a String: ").split(" ");
var output = words.map(element => {
    return element.substr(0,1).toUpperCase() + element.substr(1);
}).join(" ");
document.write("Output String: "+ output);
