//******************************************************************
// + Discription: Program to join elements of an Array
// + Author     : Ankur S Dutta
// + Date       : 30-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To Join elements of an array: </h1><br>");
//Taking Input
var size = prompt("Enter size of an Array");
if(size === null || size === "" || isNaN(size)){
    document.write("Enter a valid array size.");
}else{
    var arr = new Array(size);
    var str = "";
    //Accepting array from user and concatinating
    for(var i = 0; i < size; i++){
        arr[i] = prompt("Enter Element "+ i).trim();
        // str += arr[i]+" ";
    }
    str_arr = arr.join(" ");
    //Displaying data
    document.write("Joined Array: "+ str_arr);
}

