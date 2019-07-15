var arr = [21, 19, 34, 56, 23, 20, 17, 65, 76, 15, 35, 14, 13, 25,24, 34, 33];
var canVote = [];
function callback(elem){
    if( elem >= 21){
        canVote.push(elem);
    }
}

arr.forEach(callback);
console.log(canVote);
document.write("<br>>> Can vote: "+ canVote);

document.write("<br>>> Even age: "+ arr.filter((elem) => { return elem%2 === 0 ;}));

var words = ['limit', 'elite', 'exuberant', 'destruction'];
document.write("<br>>> Words: "+words);
document.write("<br>>> Word length > 6: "+ words.filter(elem => elem.length > 6));
var longest = words.reduce((acc, elem) => {
    return (acc.length < elem.length)? elem : acc;
});
document.write("<br>>> Longest Word: "+ longest);

// var mapTest = arr.map((elem) => {
//     return elem >= 21;
// });
var mapTest = arr.map((elem) => {
    return elem * 2;
});
document.write("<br>>> Can vote: "+ mapTest);

var names = ['Ram', 'Radhika', 'John', 'Sumit'];
document.write("<br>>> Output: "+ names.map((elem) => {
    return "<br>>>>> Welcome "+elem;
}));

var res = arr.reduce((acc, elem, idx, arr) => {
    return acc + elem;
}, 0);
document.write("<br>>> Sum with reduce: "+res);

