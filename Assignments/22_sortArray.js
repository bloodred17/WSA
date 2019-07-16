//******************************************************************
// + Discription: Program to sort array in ascending and descending order
// + Author     : Ankur S Dutta
// + Date       : 3-June-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To sort Array: </h1><br>");
//Getting Array data
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
//Taking input from user
function inputData (msg){
    let input;
    do{
        input = +prompt(msg);
    }while(input === null || input === "" || isNaN(input));
    return input;
}

//Sorting in Ascending Order
function ascendingSort(arr){  
    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j< arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];  
                arr[i] = arr[j];  
                arr[j] = temp;  
            }
        }
    }
    return arr;
}  

//Sorting in Descending Order
function descendingSort(arr){  
    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j< arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];  
                arr[i] = arr[j];  
                arr[j] = temp;  
            }
        }
    }
    return arr;
}  


var size = inputData("Enter size of Array");
var arr = new Array(size);
// Get array data
inputArr(arr);


// var sortAsc = arr.sort((a, b) => a - b);
// document.write("<br>>> Sort Ascending: "+sortAsc);
// document.write("<br>>> Sort Descending: "+sortAsc.reverse());

//displaying data
document.write("<br>Ascending: "+ascendingSort(arr));
document.write("<br>Descending: "+descendingSort(arr));