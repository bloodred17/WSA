//******************************************************************
// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 23-May-2019
//******************************************************************

document.write("To Reverse a number: <br>>>");

function reverse (num){
    var temp = 0;
    for(var i = num; i > 0; i = parseInt(i/10)){
        temp = (temp*10)+(i%10);
    }
    return temp;
}

var num = +prompt("Enter a number: ");
document.write("Result: "+ reverse(num));