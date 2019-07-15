//******************************************************************
// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 23-May-2019
//******************************************************************

document.write("To display numbers that are divisible by Z between 1-100:<br>>>");
function divByZ(num){
    for(var i=2; i< 100; i++){
        if(i % num == 0){
            document.write("<br>"+i+" is divisible by "+num);
        }
    }
}

var num = +prompt("Enter a number: ");
divByZ(num);