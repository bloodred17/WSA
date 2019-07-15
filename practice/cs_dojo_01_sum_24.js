var arr1 = [-1, 3, 8, 2, 9, 5];
var arr2 = [4, 1, 2, 10, 5, 20];
var target = 24;
var sum = arr1[0]+arr2[0];
var num1, num2;
var closest = Math.abs(24-sum);

for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        sum = arr1[i] + arr2[j];
        if(Math.abs(24-sum) < closest){
            closest = sum;
            num1 = arr1[i];
            num2 = arr2[j];
        }
    }
}

document.write("<br>>> Closest: "+closest);
document.write("  = ( "+num1+", "+num2+" )");