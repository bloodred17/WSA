

var num = +prompt("Enter number value:");
var pow = +prompt("Enter power value:");
var product = 1;
for(var i=1; i<=pow; i++){
    for(var j = 1; j<= i; j++){
        product = product * num;
    }
    document.write(num+"^"+i+ " = "+ product + "<br>");
    product = 1;
}