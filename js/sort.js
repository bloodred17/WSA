var arr = [34, 64, 73,12, 534,85, 56,25,98,34,5 ,76,34,23];
var temp = 0;
document.write("Original array: "+ arr+"<br>");
for( var i = 0; i < arr.length; i++){
    // document.write(">> Arr-i: "+ arr[i] +"<br>");
    for(var j = i; j < arr.length; j++ ){
        if(arr[j] < arr[i]){
            // document.write(">>>> Arr-j: "+ arr[j] +"<br>");
            
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
document.write("Sorted array: "+ arr);