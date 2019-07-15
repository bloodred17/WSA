//Are we not pure? "No, sir!" Panama's moody Noriega brags. It is garbage!' Irony dooms a man-aprisoner up to new era.
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
document.write("<h1>Special Palindrome: </h1>");
var input = inputData("Enter a sentence: ");
document.write("<br>>> Input String: "+ input);
var str_specialChar = "!@#$%^&*():;\,\.\?\'\"\\ -/";
var palindrom_flag = true;
var arr_input_mod = input.trim().toLowerCase().split("").filter((x) => (!str_specialChar.includes(x) && x !== '"' )? true : false );
console.log("Modified Array: " + arr_input_mod);
for(let i = 0; i < arr_input_mod.length; i++){
    if(arr_input_mod[i] !== arr_input_mod[arr_input_mod.length-1-i]){
        palindrom_flag = false;
        break;
    }
}

if(palindrom_flag){
    document.write("<br>>> It is a Palindrome");
}else{
    document.write("<br>>> It is not a Palindrome.");
}