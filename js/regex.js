function Test(pattern, str){
    document.write("<br>>> "+pattern);
    document.write("<br>>> "+str);
    if(pattern2.test(str2)){
        document.write("<br>>> Pattern Exists");
    }else{
        document.write("<br>>> Pattern doesnot Exists");
    }
}

// var pattern = /Fruit/;
var pattern1 = /Fruit/i;
var str1 = "Apple is a fruit";

var pattern2 = new RegExp("like", "g");
var str2 = new String("Happiness radiates like a fragnance from a flower");

var pattern3 = /[A-Z]/;
var str3a = "Webstacks Academy";
var str3b = "webstacks academy";
Test(pattern3, str3a);
Test(pattern3, str3b);

var myExp = /^x{3,5}y{3,5}z$/;
document.write("<br>"+myExp.test("xxxyyy")+"<br>");
document.write(myExp.test("xxxxxxyyyyyz")+"<br>");
document.write(myExp.test("xxyyyz")+"<br>");

