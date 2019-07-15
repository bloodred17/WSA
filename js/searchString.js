
var input = prompt("Enter a string");

var inputSub = prompt("Enter sub string to search");

if(input.includes(inputSub)){
    document.write(">> Position: "+input.indexOf(inputSub));
}else{
    document.write(">> Not found");
}