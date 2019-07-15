//******************************************************************
// + Discription: Program to print Lucas numbers
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>Generate Lucas numbers: </h1><br>");
//Taking values from user
var num = +prompt("Enter the limit for Lucas Numbers");
//Checking validity
if(num == null || num == "" || isNaN(num)){
    document.write("Enter valid values");
}else{
    document.write("<br>>> Limit: "+num);
    //Calculating Lucas numbers
    var lucas1 = 2;
    var lucas2 = 1;
    var lucas3 = lucas1 + lucas2;
    var sumEven = 2;
    document.write("<br>>> Lucas Numbers: "+lucas1+", "+lucas2+", ");
    //Generating lucas numbers
    for(var i = 3; i < num; i++){
        document.write(lucas3);
        lucas1 = lucas3;
        lucas3 = lucas1 + lucas2; 
        //Calculating sum of even Lucas Numbers
        if(lucas3 % 2 == 0){
            sumEven += lucas3;
        }
        lucas2 = lucas1;
        document.write(", ");
    }
    document.write(lucas3);
    document.write("<br>>> Sum of Even integers: "+sumEven);
    
}


//-----------LOGIC 2-----------------
// var lucas1 = 0;
// var lucas2 = 0;
// var lucas3 = 0;

// document.write(">> Lucas Numbers: ");
// for(var i = 0; i < num; i++){
//     if(i == 0){
//         lucas1 += 2;
//         lucas3 = lucas1 + lucas2; 
//         document.write(lucas1);
//     }else if(i == 1){
//         lucas2 += 1;
//         lucas3 = lucas1 + lucas2; 
//         document.write(lucas2);
//     }else{
//         document.write(lucas3);
//         lucas1 = lucas3;
//         lucas3 = lucas1 + lucas2; 
//         lucas2 = lucas1;
//     }
//     document.write(", ");
// }