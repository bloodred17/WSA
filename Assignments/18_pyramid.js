//******************************************************************
// + Discription: Program to print pyramid pattern
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institution: WSA
//******************************************************************

document.write("<h1>To display Pyramid patterns</h1><br>");

//Taking Input
var row = +prompt("Enter number of rows:");
//Validating values
if( row === null || row == "" || isNaN(row)){
    document.write("Enter valid values.");
}else{
    var num = 1;
    //Printing Pattern 1
    document.write(">> PATTERN - 1 <br>");
    for(let i = 0; i < row; i++){
        for(let j = i; j >= 0; j--){
            document.write(num+" ");
        }
        num++;
        document.write("<br>");
    }
    
    document.write("<br>");
    document.write("<br>");
    
    //Printing Pattern 2
    num = 1;
    document.write(">> PATTERN - 2 <br>");
    for(let i = 0; i < row; i++){
        for(let j = i; j>= 0; j--){
            document.write(num+" ");
            num++;
        }
        document.write("<br>");
    }
    
    document.write("<br>");
    document.write("<br>");
    
    //Printing Pattern 3
    num = "*";
    document.write(">> PATTERN - 3 <br>");
    for(let i = row+1; i> 0; i--){
        for(let j = i; j> 0; j--){
            document.write(num+" ");
        }
        document.write("<br>");
    }
}

