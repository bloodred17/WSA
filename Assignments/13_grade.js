//******************************************************************
// + Discription: Program to calculate Grade 
// + Author     : Ankur S Dutta
// + Date       : 24-May-2019
// + Institute  : wSA
//******************************************************************

//Taking values
var subj1 = +prompt("Enter values for Subject 1");
var subj2 = +prompt("Enter values for Subject 2");
var subj3 = +prompt("Enter values for Subject 3");

//Checking values for validity
if (subj1 === "" || subj1 < 0 || subj1 > 100 || subj1 === null || isNaN(subj1) ||
    subj2 === "" || subj2 < 0 || subj2 > 100 || subj2 === null || isNaN(subj2) ||
    subj3 === "" || subj3 < 0 || subj3 > 100 || subj3 === null || isNaN(subj3)) {
    document.write("Enter valid values for Subject.");
} else {

    var avg = (subj1 + subj2 + subj3) / 3;
    console.log(avg);
    var grade;
    var gradeI;

    //Calculating grade with If-Else
    if (avg >= 90) gradeI = "Ex";
    else if (avg >= 80 && avg < 90) gradeI = "A+";
    else if (avg >= 70 && avg < 80) gradeI = "A";
    else if (avg >= 60 && avg < 70) gradeI = "B+";
    else gradeI = "Fail";

    document.write("Grade (if-Else):" + gradeI + "<br>");

    //Calculating grade with Switch
    switch (true) {
        case (avg >= 90):
            grade = "Ex";
            break;
        case (avg >= 80 && avg < 90):
            grade = "A+";
            break;
        case (avg >= 70 && avg < 80):
            grade = "A";
            break;
        case (avg >= 60 && avg < 70):
            grade = "B+";
            break;
        default:
            grade = "Fail";
    }
    document.write("Grade (Switch): " + grade + "<br>");
}