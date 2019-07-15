//******************************************************************
// + Discription: Program to sort array in ascending and descending order
// + Author     : Ankur S Dutta
// + Date       : 3-June-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To sort Array: </h1><br>");

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

var size = inputData("Enter size of Array");
var arr = new Array(size);
inputArr(arr);
var sortAsc = arr.sort((a, b) => a - b);
document.write("<br>>> Sort Ascending: "+sortAsc);
document.write("<br>>> Sort Descending: "+sortAsc.reverse());