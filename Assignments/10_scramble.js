//******************************************************************
// + Discription: Program to scramble a string
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To Scramble given String: </h1><br>");

function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "");
    return input;
}
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

var input = inputData("Enter a string: ");
var str = input.split("");
var arr = new Array(input.length);
inputArr(arr);
var arr1 = new Array(input.length);
// inputArr(arr1, "Enter Position for Element: ");
// var temp = "";

//Accepting array from user and concatinating
// for(var i = 0; i < input.length; i++){
//     arr[i] = prompt("Enter Position of "+ i +" to scramble to:");
//     if(arr[i] >= input.length || arr[i] < 0){
//         alert("Enter a valid value");
//         continue;
//     }
// }
document.write("<br>>> Original string: "+ input);
document.write("<br>>> Positions : "+arr);
for(i = 0; i < arr.length; i++){
    arr1[arr[i]] = str[i];
}
str = arr1.join("");
document.write("<br>>> Scrambled string: "+ str);