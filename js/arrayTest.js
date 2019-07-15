var arr = [90, 89, 78, 67, 56,45, 34,23,12];
var max = arr[0];
var min = arr[0];
var sum = 0;

for( var i of arr){
    sum += i;
    if( i < min){
        min = i;
    }
    if( i > max){
        max = i;
    }
}
document.write("Array :"+arr+"<br>");
document.write("Sum : "+sum+"<br>");
var avg = parseFloat(sum/arr.length);
document.write("Average : "+avg+"<br>");

document.write("Maximum : "+max+"<br>");
document.write("Minimum : "+min+"<br>");

// for(var j = arr.length-1; j >= 0; j--){
//     document.write("Arr["+j+"]: "+arr[j]+"<br>");
// }

var temp;
for(var j = 0; j < arr.length/2; j++){
    // debugger;
    temp = arr[j];
    arr[j] = arr[arr.length-1-j];
    arr[arr.length-1-j] = temp;
    // document.write("Arr["+j+"]: "+arr[j]+"<br>");
}
document.write("Modified Array: "+arr);