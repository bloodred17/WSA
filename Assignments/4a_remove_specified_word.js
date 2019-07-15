//******************************************************************
// + Discription: Program to remove specified word from a string
// + Author     : Ankur S Dutta
// + Date       : 29-May-2019
// + Institute  : wSA
//******************************************************************
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "");
    return input;
}

var input = inputData("Enter a String: ");
document.write("<br>>> Input String: "+ input);
var words = input.split(' ');
var pos = parseInt(inputData("Enter Position of word to remove: "));
if(isNaN(pos) || pos < 1){
    document.write("Enter a valid position.");
}else{
    words.splice(pos-1,1);
    document.write("<br>>> Output String: "+words.join(" "));
}
