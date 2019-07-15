

var pow = +prompt("Enter a value:");
var product = 1;
for(var i=1; i<=pow; i++){
    for(var j = 1; j<= i; j++){
        product = product * 2;
    }
    document.write("2^"+i+ " = "+ product + "<br>");
    product = 1;
}