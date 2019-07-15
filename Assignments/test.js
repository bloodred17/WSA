var arr = [2, 5, 9,6, 4];

var max = arr[0], max2 = arr[0], max3 = arr[0];
for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max2 = max;
        max = arr[i];
        // if(max3 > arr[i] && arr[i] < max2){
        //     max3 = arr[i];
        // }
    }
    console.log("max ="+max);
    console.log("max2 ="+max2);
    console.log("max3 ="+max3);
}