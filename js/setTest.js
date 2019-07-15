function inputArr(arr, msg = "Enter Element: "){
    console.log("Arr: "+arr);
    let i = 0;
    console.log(" i = "+i);
    while(i<arr.length){
        var count = (i === 0)? "" : i;
        // arr[i] = inputData(msg+count);
        var data = inputData(msg+count);
        if(arr.includes(data)){
            continue;
        }else{
            arr[i] = data;
        }
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

//-----------MAIN-------------------------
document.write("<h1>To Display Union and Intersection of Given Sets: </h1>");

var size1 = inputData("Enter Size of Array 1:");
var arr1 = new Array(size1);
inputArr(arr1);
document.write("<br>>> Set 1: "+arr1);
var size2 = inputData("Enter Size of Array 2:");
var arr2 = new Array(size2);
inputArr(arr2);
document.write("<br>>> Set 2: "+arr2);
var intersection = [];
var len = (arr1.length > arr2.length)? arr1.length : arr2.length;
console.log("Len: "+len);

//Finding Intersection
for(let i = 0, j = 0; i < len; i++){
    if(arr1.includes(arr2[i])){
        intersection[j] = arr2[i];
        j++;
    }
}
document.write("<br><br>>> Intersection: " + intersection);

//Finding Union
var union = arr1.slice(0);
for( i = 0, j = union.length; i < arr1.length+arr2.length ; i++){
    if(!arr1.includes(arr2[i])){
        union[j] = arr2[i];
        j++;
    }
}
//Filtering 
union = union.filter((x) => {
    if(!isNaN(x)){
        return true;
    }
});
document.write("<br>>> Union: " + union);