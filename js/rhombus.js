var num = +prompt("Input a number (0-9):");
num = (num%2 !== 0)? num : num+1;
var upper = num, lower = num;
for(var i = 0; i < num; i++){
    for(var j = 1; j <= 2*num-1; j++){
        if(j>=lower && j <= upper){
            document.write("*");
        }else{
            document.write("&nbsp");
        }
    }
    if(i < (num/2)-1){
        lower = lower -1;
        upper = upper +1;
    }else{
        lower = lower +1;
        upper = upper -1;
    }
    document.write("<br>");
}