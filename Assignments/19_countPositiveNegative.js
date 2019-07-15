//******************************************************************
// + Discription: Program to count Positive and negative numbers
// + Author     : Ankur S Dutta
// + Date       : 3-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To Count Positive and Negative numbers: </h1><br>");
function inputArr(arr, msg = "Enter Element: "){
    console.log("Arr: "+arr);
    let i = 0;
    console.log(" i = "+i);
    while(i<arr.length){
        var count = (i === 0)? "" : i;
        arr[i] = inputData(msg+count);
        console.log("Arr["+i+"] = "+arr[i]);
        i++;
    }
}

function inputData (msg){
    let input;
    do{
        input = +prompt(msg);
    }while(input === null || input === "" || isNaN(input));
    return input;
}

var size = inputData("Enter Array Size: ");
var arr = new Array(size);
inputArr(arr);
var countP = 0;
var countN = 0;

arr.forEach(elem => (elem > 0)? countP++ : countN++ );
document.write("<br>>> Positive Values: "+countP);
document.write("<br>>> Negative Values: "+countN);