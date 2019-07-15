
document.write("<h1>To display error if Age < 18 </h1><br>>> ");

try {
    var age  = +prompt("Enter age of a person:");
    if(age < 18){
        throw("not eligible for voting");
    }else{
        document.write("Eligible for voting");
    }
}catch(e){
    document.write("Error:"+e);
}