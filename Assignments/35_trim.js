//******************************************************************
// + Discription: Program to change image on mouseover and mouseleave
// + Author     : Ankur S Dutta
// + Start Date : 7-July-2019
// + End Date : 8-July-2019
// + Institution: WSA
//******************************************************************

//Takes input
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}

//Real Trim function
function realTrim(input_string){
    const pattern = new RegExp(input_pattern);
    let arr_input_string = input_string.split("");
    //Replacing characters in a string from the beginning until we find something elese other than specified patterns
    for(let i = 0; i < input_string.length; i++){
        if(!pattern.test(arr_input_string[i])){
            break;
        }
        arr_input_string[i] = arr_input_string[i].replace(pattern, "");
    }
    
    //Replacing characters in a string from the end until we find something elese other than specified patterns
    for(let i = arr_input_string.length-1; i > 0; i--){
        if(!pattern.test(arr_input_string[i])){
            break;
        }
        arr_input_string[i] = arr_input_string[i].replace(pattern, "");
    }
    return arr_input_string.join('');
}

//Fake trim function
function fakeTrim(input_string){
    const pattern = new RegExp(input_pattern);
    let arr_input_string = input_string.split("");
    for(let i = 0; i < input_string.length; i++){
        arr_input_string[i] = arr_input_string[i].replace(pattern, "");
    }
    return arr_input_string.join('');
}

//Taking input
let input_string = inputData("Enter a string: ");
let input_pattern = inputData("Enter a pattern that is to be trimmed: ");

document.write("Input String: "+input_string);
document.write("<br>Input pattern: "+input_pattern);
document.write("<br>Real Trim: "+realTrim(input_string));
document.write("<br> Trim: "+fakeTrim(input_string));