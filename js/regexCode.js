// var code = /PIZDIS/;
var today = "135";

// var pattern = code+today;
// var pattern2 = /PIZDIS135/;
var pattern3 = /PIZDIS[0-9][0-9][0-9]/;
var input = prompt("Enter Coupon Code: ");

if(pattern3.test(input)){
    document.write("Valid Format.");
    if(input.substr(-3) === "135"){
        document.write(" Valid Code.");
    }else{
        document.write(" Invalid Code.");
    }
}else{
    document.write("Invalid Format and Code.");
}





// if(pattern3.test(input) && input.search(/135$/)){
//     document.write("<br> Coupon code is valid.");
// }else if(pattern3.test(input)){
//     document.write("<br> Valid coupon format but code not valid");
// }else{
//     document.write("<br> Invalid coupon");
// }