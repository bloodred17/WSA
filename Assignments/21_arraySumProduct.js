//******************************************************************
// + Discription: Program to find sum and product of elements of an array
// + Author     : Ankur S Dutta
// + Start Date       : 3-June-2019
// + End Date       : 15-July-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To Count Sum and Product of an Array: </h1><br>");

//Taking array Input
function inputArr(arr, msg = "Enter Element: "){
    console.log("Arr: "+arr);
    let i = 0;
    console.log(" i = "+i);
    while(i<arr.length){
        var count = (i === 0)? "" : i;
        arr[i] = parseInt(inputData(msg+count));
        console.log("Arr["+i+"] = "+arr[i]);
        i++;
    }
}
//Getting data from user
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
sum = 0;
var product = 1;
arr.forEach((element) => {
    sum += element;
    product *= element;
});
//displaying data
document.write("<br>>> Sum: "+sum);
document.write("<br>>> Product: "+product);