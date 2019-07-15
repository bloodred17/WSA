function xPowY (x, y){
    return (y-- !== 0)? x * xPowY(x, y): x;
}

var inputX = +prompt("Enter X : ");
var inputY = +prompt("Enter Y : ");

document.write(inputX+" ^ "+inputY+"  is : "+ xPowY(inputX, inputY));