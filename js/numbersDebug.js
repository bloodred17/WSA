
document.write("<h1>To check if num is within 5 and 20 :</h1><br>>> ");

var num = +prompt("Enter number:");

try{
    if(num < 5 || num > 20){
        throw("not within range");
    }else{
        document.write("Withing Range");
    }
}catch(e){
    document.write("Error: "+ e);
}