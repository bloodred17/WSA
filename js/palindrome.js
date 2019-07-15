var num = prompt("Enter a number:");
if(num < 0 || num === null || num === "" || isNaN(num)){
    document.write("Only positive intigers allowed");
}else{
    var temp = 0;
    for(var i = num; i > 0; i = parseInt(i/10)){
        temp = (temp*10) + (i % 10); 
        document.write(`i = ${i} temp = ${temp}<br>`);
    }
    document.write(`Number = ${num}, temp = ${temp}<br>`);
    if(temp == num){
        document.write(`Number is a Palindrome`);
    }else{
        document.write(`Number is not a Palindrome`);

    }
}
