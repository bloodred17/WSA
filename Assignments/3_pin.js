//******************************************************************
// + Discription: Program to generate pin
// + Author     : Ankur S Dutta
// + Date       : 27-May-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>Pin Generator: </h1><br>");

//Taking Size of PIN
var size = +prompt("Enter size of PIN (1-8)");
//Checking for validity
if(size == null || size == "" || isNaN(size) || size < 0 || size > 8){
    document.write(">> Enter a valid integer between 1 and 8");
}else{
    var sum = 0;
    var flag = false;
    
    //Generating digit for PIN
    while(size > 0){
        var num = Math.floor(Math.random() * (9-1)) + 1;
        //Checking for uniqueness
        for(var i = sum; i > 0; i = parseInt(i/10)){
            if(i%10 == num){
                flag = true;
                break;
            }
        }
        if(!flag){
            sum = (sum*10) + num;
            flag = false;
        }else{
            flag = false;
            continue;
        }
        size--;
    }
    //Displaying data
    document.write(">> PIN: "+sum);
}