//******************************************************************
// + Discription: Program to change paragraph style using dom
// + Author     : Ankur S Dutta
// + Start Date : 5-July-2019
// + End Date   : 16-July-2019
// + Institution: WSA
//******************************************************************

//Pattern for date
var pattern_year = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
//Taking input from user
var input = prompt("Enter a String: ");
//Searching for dates in the input string
var dates = input.split(" ").filter((word) => {
    if(pattern_year.test(word)){
        return word;
    }
});
if(dates.length>0){
    //if dates are found then display dates
    document.write("<br>>> Dates in the String are: ");
    dates.forEach((elem) => {
        document.write("<br>>> ------"+elem);
    });
}else{
    //dates are not found: display message
    document.write("<br>>> No valid dates found!");
}