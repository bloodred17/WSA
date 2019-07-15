//******************************************************************
// + Discription: Program to display longest word in a string
// + Author     : Ankur S Dutta
// + Date       : 29-May-2019
// + Institution: WSA
//******************************************************************

document.write("<h1>To Display longest word in a string</h1><br>");

var input = prompt("Enter a Sentence:");

if(input === null || input == "" || !isNaN(input)){
    document.write("Enter a valid Input");
}else{
    var res = input.split(" ");
    var longest = res[0];
    for(var i = 0; i < res.length; i++){
        if(longest.length < res[i].length){
            longest = res[i];
        }
    }
    document.write("Longest word: "+longest);
}
