// var rev = 0;
// function palindrome(num){
//     if(num === 0){
//         return rev;
//     }else{
//         var temp = num % 10;
//         rev  = rev * 10 + temp;
//         return palindrome(parseInt(num/10));
//     }
// }

var palin = (num) => (num > 0)? (num%10) + palin(parseInt(num/10))*10 : 0 ;

var input = +prompt("Enter a number");
console.log(input);
// debugger;
result = palin(input);
console.log(result);
if(input === result){
    document.write(input +" is a palindrome");
}else{
    document.write(input +" is not a palindrome");

}
