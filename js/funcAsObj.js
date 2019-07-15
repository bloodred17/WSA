var FullName = function(firstname, lastname){
    return this.fullname = firstname + " " + lastname;
};

var obj1 = new FullName("Ankur", "Dutta");
document.write("My name is "+obj1.fullname);

var obj;
function square(a){
    return a * a;
}
document.write("<br>Square of a number is: "+ square.call(obj, 3));

var course = {
    courseName : "FullStack",
    courseDuration : 6
};

function Student (name){
    return this.name = name;
}

Student.call(course, "Ankur");
console.log(course);
document.write("<br>");
var a=20, b=30;
(function (a, b){
    document.write("Entered value : "+a+" + "+b+" = "+(a+b));
})(a,b);