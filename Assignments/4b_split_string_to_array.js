//******************************************************************
// + Discription: Program to split string into array
// + Author     : Ankur S Dutta
// + Date       : 29-May-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To split string into Array: </h1><br>");
//Takes input
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "");
    return input;
}

//Taking Input
var input = inputData("Enter a string:");
document.write("<br>>> Input string: "+ input);
//Splitting
var words = input.split(" ");
document.write("<br>>> Output: [");
//Displaying Data
words.forEach((elem, idx, arr) => {
    end = (idx !== arr.length-1)? ", " : "";
    document.write("\""+elem.toLowerCase()+"\""+end);
});
document.write("]");

















// var i = 0;
// while(i < words.length){
//     end = (i !== words.length-1)? ", " : "";
//     document.write("\""+words[i].toLowerCase()+"\""+end);
//     i++;
// }