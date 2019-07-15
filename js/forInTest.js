 var arr = [90, 89, 78, 67, 56,45, 34,23,12];

 for(let i in arr){
    document.write("A["+i+"] = "+arr[i]+"<br>");
 }


 for(let i of arr){
    document.write("A["+i+"] = "+i+"<br>");
}