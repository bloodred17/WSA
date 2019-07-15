//******************************************************************
// + Discription: Program to scramble a string
// + Author     : Ankur S Dutta
// + Date       : 3-June-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To Scramble given String: </h1><br>");
//Takes Input
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "");
    return input;
}
//Takes input for array
function inputArr(arr, msg = "Enter Element: "){
    console.log("Arr: "+arr);
    let i = 0;
    console.log(" i = "+i);
    while(i<arr.length){
        var count = (i === 0)? "" : i;
        // arr[i] = inputData(msg+count);
        var data = parseInt(inputData(msg+count));
        if(arr.includes(data) || data >= arr.length){
            continue;
        }else{
            arr[i] = data;
        }
        console.log("Arr["+i+"] = "+arr[i]);
        i++;
    }
}
//Taking input from user
var input = inputData("Enter a string: ");
var str = input.split("");
document.write("<br>>> Input String: "+ str.join(""));
var arr = new Array(input.length);

//Taking positions to scramble string
inputArr(arr);
var arr1 = new Array(input.length);

//Scrambling to designated positions
for(i = 0; i < str.length; i++){
    arr1[i] = str[arr[i]];
}

str = arr1.join("");
document.write("<br>>> Scrambled string: "+ str);