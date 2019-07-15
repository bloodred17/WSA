//******************************************************************
// + Discription: Program to display peremeter of a given island
// + Author     : Ankur S Dutta
// + Date       : 6-June-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To display peremeter of the given island: </h1><br>");
//Providing array
var arr = [
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];

var connections = 0;
var blocks = 0;
//Calculating peremeter
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] === 1){
            blocks+=4;
            //check for connections in i-1 and j-1
            connections = (i > 0 && arr[i-1][j] === 1)? connections+=2 : connections;
            connections = (j > 0 && arr[i][j-1] === 1)? connections+=2 : connections;
        }
    }
}
//Displaying data
var peremeter = blocks - connections;
document.write("<br>>> Peremeter: "+peremeter);











// console.log("Block: "+ i+", "+j);
// console.log("Blocks: "+blocks);
// if(i > 0 && arr[i-1][j] === 1){
//     connections+=2;
// }
// if(j > 0 && arr[i][j-1] === 1){
//     connections+=2;
// }
// console.log("Connections: "+connections);