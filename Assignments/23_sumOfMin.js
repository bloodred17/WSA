//******************************************************************
// + Discription: Program to sum minimum of a pair
// + Author     : Ankur S Dutta
// + Date       : 3-June-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To Sum minimum of a pair in a even Array: </h1><br>");
//Takes Arrays
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
//Takes in elements
function inputData (msg){
    let input;
    do{
        input = +prompt(msg);
    }while(input === null || input === "" || isNaN(input));
    return input;
}
//Initializing array
var size = inputData("Enter size of Array (Even)");
var arr = new Array(size*2);
inputArr(arr);
var sum = 0;
//Calculating sum by iteration
for(let i = 0; i < arr.length; i+=2){
    sum += (arr[i] < arr[i+1])? arr[i] : arr[i+1];
}
//Calculating sum by array methods
var result = arr.map((elem, idx, arr) => (idx % 2 === 0)? (elem < arr[idx+1])? elem : arr[idx+1] : 0 ).reduce((acc, elem) => acc + elem);

document.write("<br>>> Positive Integers: "+parseInt(size));
document.write("<br>>> Sum of Min (By Iteration): "+sum);
document.write("<br>>> Sum of Min (By Array Methods): "+result);