function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
document.write("<h1>Squeeze: </h1>");
var input = inputData("Enter a sentence: ");
document.write("<br>>> Input: "+input);

var arr_input = input.split(" ");
console.log("input Arr: "+arr_input);
// var arr_squeeze = arr_input.filter((elem, idx) => {
//     if(arr_input.indexOf(elem) === idx){
//         return true;
//     }
// });
var arr_squeeze = arr_input.filter((elem, idx, arr) => arr.indexOf(elem) === idx);
document.write("<br>>> Output: "+arr_squeeze.join(" "));