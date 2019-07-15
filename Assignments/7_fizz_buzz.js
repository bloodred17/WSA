//******************************************************************
// + Discription: Program to disply Fizz and Buzz between 1-100
// + Author     : Ankur S Dutta
// + Date       : 24-May-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>To print Fizz, Buzz and FizzBuzz:</h1><br>");
//Loop form 1 to 100
for ( let i=1; i <= 100; i++) {

    //Checking for multiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz");

        //Checking for multiple of 3
    } else if (i % 3 === 0) {
        document.write("Fizz");

        //Checking for multiple of 5
    } else if (i % 5 === 0) {
        document.write("Buzz");

        //Displaying numbers
    } else {
        document.write(i);
    }
    document.write("<br> ");
}