
var input = prompt("Enter a string");
console.log("Input: "+ input);
var inputSub = prompt("Enter sub string to search");
console.log("inputSub: "+inputSub);
var input_case = input.toLowerCase();
console.log("Input_lower: "+input_case);
var inputSub_case = inputSub.toLowerCase();
console.log("InputSub_lower: "+ inputSub_case);

if(input_case.includes(inputSub_case)){
    document.write(">> Position: "+input_case.indexOf(inputSub_case));
}else{
    document.write(">> Not found");
}