// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 16-May-2019

document.write("<h1>To check the middle number of 3 numbers</h1><br>>>");

var num = prompt("Enter a 3-digit number (integer):");

if(num === null || num === "" || isNaN(num)){
    document.write("Enter a valid 3 digit integer.");
    alert("Invalid number");
}else{
    //Check number of digits
    var count=0;
    for(var i = num; i > 0; i = parseInt(i/10)){
        count++;
    }

    //Check for 3-digit number
    if(count !== 3){
        document.write("Number is not a 3-digit number");
        // document.write("Count: "+count);
    }else{

        //Initialization
        var val = num;
        var num1 = val % 10;
        val /= 10;
        var num2 = val % 10;
        val /= 10;
        var num3 = val % 10;
    
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num3 = parseInt(num3);
    
        //Displaying value of numbers
        document.write("Number 1: "+ num1+
                    "<br>Number 2: "+ num2+
                    "<br>Number 3: "+ num3+
                    "<br>");
        
        //Value checking




        if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
            document.write(num1 + " is the middle of "+ num1+ ", "+num2+", "+num3+".");
        }else if((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)){
            document.write(num2 + " is the middle of "+ num1+ ", "+num2+", "+num3+".");
        }else if((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)){
            document.write(num3 + " is the middle of "+ num1+ ", "+num2+", "+num3+".");
        }else if(num1 === num2 || num1 === num3 || num2 === num3){
            document.write("All the numbers are equal in value.");
        }else{
            document.write("....");
        }
    }

}
document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");
