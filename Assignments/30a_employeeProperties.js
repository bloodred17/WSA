//******************************************************************
// + Discription: Program to display employee properties
// + Author     : Ankur S Dutta
// + Date       : 6-June-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To display Employee properties: </h1><br>");
//Input for string types
function inputString(msg = "Enter String"){
    var input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
//Input for numeric types
function inputData(msg = "Enter Data"){
    var input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || isNaN(input));
    return parseInt(input);
}
//Employee object to store data about employee
var Employee = {
    name: "",
    empId: 1,
    empSalary: 100,
    deptName: ""
};
//Iterates on every key of Employee object and takes suitable input according to it's type
for(let item in Employee){
    Employee[item] = (typeof(Employee[item]) === "string")? inputString("Enter "+item) : inputData("Enter "+item);
}
//Displaying employee data
document.write("<br>>> Name: "+Employee.name+
    "<br>>> Employee Id: "+Employee.empId+
    "<br>>> Salary: "+Employee.empSalary+
    "<br>>> Department : "+Employee.deptName);
var len = 0;
for(let item in Employee)len++;
document.write("<br><br>>> Length of Employee Object: "+len+"<br>");
//Deleting Employee Department field
document.write("<br>>> Deleting Employee: Department name field<br>");
delete(Employee.deptName);
len = 0;
//Displaying modified employee data
for(let item in Employee){
    document.write("<br>>> "+item+": "+Employee[item]);
    len++;
}
document.write("<br><br>>> Length of Employee Object: "+len+"<br>");