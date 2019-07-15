//******************************************************************
// + Discription: Program to check if a number is palindrome of not
// + Author     : Ankur S Dutta
// + Date       : 24-May-2019
// + Institute  : wSA
//******************************************************************

//Taking values
var input = prompt("Enter value to check for palindrome:");

//Checking validity of values
if (input == null || input == "" ) {
    document.write("Enter valid value.");
} else {
    var palindrome = false;
    var num = parseInt(input);
    //Checking for number
    if(!isNaN(num)){
        //Checking for palindrome
        var temp = 0;
        for (var i = num; i > 0; i = parseInt(i / 10)) {
            temp = (temp * 10) + (i % 10);
        }
        palindrome = (temp === num)? true : false ;
    }else{
        var temp = 0;
        //Checking for palindrome
        for(var i = 0; i < input.length; i++){
            if(input.charAt(i) === input.charAt(input.length-i-1)){
                temp++;
            }
        }
        palindrome = (temp === input.length)? true : false;
    }
    //Displaying message
    if (palindrome) {
        document.write("Entered value is a Palindrome.");
    } else {
        document.write("Entered value is not a Palindrome.");
    }
}