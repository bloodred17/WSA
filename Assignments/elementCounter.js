
function inputData (msg){
    let input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !isNaN(input));
    return input;
}
// var obj = {};
var str = inputData("Enter a String: ");
// var obj = str.split("").reduce((acc, elem) => {
//         if(elem in acc){
//             acc[elem]++;
//         }else{
//             acc[elem] = 1;
//         }
//     // console.log(acc);
//     return acc;
// }, {});

// console.log(obj);
var count = [];
var arr = str.split("");
for(let i = 0; i < arr.length; i++){
    console.log("Arr ["+i+"] = "+ arr[i]);
    if(arr[i] in arr){
        var idx = count.indexOf(arr[i]);
        count[idx][0]++;
    }else{
        count.push(arr[i]);
        var idx = count.indexOf(arr[i]);
        count[idx][0] = 0;
        // console.log("Count ["+i+"] = "+ count[i]);
    }
}
console.log(count);