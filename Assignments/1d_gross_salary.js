//******************************************************************
// + Discription: Program to calculate Gross salary
// + Author     : Ankur S Dutta
// + Date       : 24-May-2019
// + Institution: WSA
//******************************************************************

document.write("<h1>To Print Gross Salary of an Employee:</h1><br>>>");

//Initialization
var name = prompt("Enter Name");
var id = +prompt("Enter ID:");
var salary = +prompt("Enter base Salary: ");

//Checking values
if (id === "" || id === null || isNaN(id) || id < 0 ||
    salary === "" || salary === null || isNaN(salary) || salary < 0 ||
    name === "" || name === null || !isNaN(name)) {
    //Throwing Error
    document.write("Enter valid values");
} else {
    //Calculating Gross Salary
    var ta = 0.15 * salary;
    var da = 0.35 * salary;
    var gSalary = salary + ta + da;

    //Displaying Data
    document.write("Employee Name: " + name + "<br> ID: " + id + " <br> Gross Salary :" + gSalary);
}