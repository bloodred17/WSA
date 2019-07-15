var num = +prompt("Input a number (0-9):");
var upper = num, lower = num;

for(var i = 0; i < num; i++){
    for(var j = 1; j <= 2*num -1; j++){
        if(j>=lower && j <= upper){
            document.write("*");
        }else{
            document.write("&nbsp");
        }
    }
    lower = lower -1;
    upper = upper +1;
    document.write("<br>");
}