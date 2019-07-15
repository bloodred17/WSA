function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
document.write("<h1>To print Caps: </h1>");
var input = inputData("Enter a sentence: ");
var articles = ["a", "an", "the"];
var prepositions = ["under", "between", "over", "on", "at", "behind", "above", "of", "off", "to"];
var conjunction = ["and", "for", "nor", "but", "or", "yet", "so"];

var arr_input = input.split(" ");
// document.write("<br>>> Modified Array: "+ arr_input);
// for(let i = 0; i < arr_input.length; i++){
//     var temp = arr_input[i].substr(0,1).toUpperCase();
//     temp += arr_input[i].substr(1);
//     if(i === 0){
//         arr_input[i] = temp;
    // }else if(articles.includes(arr_input[i]) || prepositions.includes(arr_input[i]) || conjunction.includes(arr_input[i])){
    //     //Don't change the string    
    // }else{
    //     arr_input[i] = temp;
    // }
// }
    
// var arr_input_mod = arr_input.map((elem, i, arr) => {
//     var temp = elem.substr(0,1).toUpperCase() + elem.substr(1);
//     if(i === 0){
//         return temp;
//     }else if(articles.includes(arr[i]) || prepositions.includes(arr[i]) || conjunction.includes(arr[i])){
//     //Don't change the string    
//     }else{
//         return temp;
//     }
// });
    
var arr_input_mod = arr_input.map((elem, i) => {
    var temp = elem.substr(0,1).toUpperCase() + elem.substr(1);
    return (i === 0)? temp : (articles.includes(elem) || prepositions.includes(elem) || conjunction.includes(elem))? elem : temp; 
});

var str_input = arr_input_mod.join(" ");
document.write("<br>>> Modified String: "+ str_input);