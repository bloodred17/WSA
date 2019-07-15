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
var max = arr[0], max2 = 0, max3 = 0;
for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max3 = max2;
        max2 = max;
        max = arr[i];
    }else if(max2 < arr[i] && arr[i] != max){
        max3 = max2;
        max2 = arr[i];
    }else if(max3 < arr[i] && arr[i] != max2 && arr[i] != max){
        max3 = arr[i];
    }
    // if(max2 < arr[i] && max > arr[i] || max2 >= max){
    //     max3 = max2;
    //     max2 = arr[i];
    // }
    // if(max3 < arr[i] && max2 > arr[i] || max3 >= max2){
    //     max3 = arr[i];
    // }
}


console.log("max ="+max);
console.log("max2 ="+max2);
console.log("max3 ="+max3);


