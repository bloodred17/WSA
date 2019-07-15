//******************************************************************
// + Discription: Program to remove specified characters from a string
// + Author     : Ankur S Dutta
// + Date       : 29-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To remove specified characters from a string: </h1><br>");
//Takning Input
var str = prompt("Enter a String");
//Validatin variables
if (str === "" || str === null || !isNaN(str)) {
    document.write("Enter valid Input");
} else {
    //Displaying data
    document.write(">> String: " + str + "<br>");
    document.write(">> String Length: " + str.length + "<br>");
    var rem;
    do {
        //Taking Position
        rem = +prompt("Enter position of character to be deleted");
        count = +prompt("Enter number of characters to be deleted");
    } while (rem === null || rem === "" || isNaN(rem) || rem > str.length);
    var str1 = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= rem && i < (count + rem)) {
            str += "";
        }else{
            str1 += str[i];
        }
    }
    //Displaying data
    document.write("<br>>> String: " + str1 + "<br>");
    document.write(">> String Length: " + str1.length + "<br>");
}