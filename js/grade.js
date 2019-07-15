// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 16-May-2019

document.write("<h1>To find the grade from marks percentage:</h1><br>>> ");

var marks = prompt("Enter marks (in Percentage)");
var grade;
if(marks === null || marks === '' || isNaN(marks) || marks < 0 || marks > 100){
    document.write("Enter a valid Marks (in Percentage)");
    alert("Invalid Marks");
}else{
    marks = parseFloat(marks);
    switch(true){
        case marks>90: grade = "A"; break;
        case marks>80: grade = "B"; break;
        case marks>70: grade = "C"; break;
        case marks<40: grade = "F"; break;
    }
    document.write("Marks: "+marks+ "<br>>>  Grade: "+grade);
}

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");