//******************************************************************
// + Discription: Program to calculate area and peremeter of a rectangle
// + Author     : Ankur S Dutta
// + Date       : 10-June-2019
// + Institute  : wSA
//******************************************************************
document.write("<h1>To calculate area and peremeter of a rectangle: </h1><br>");
//Takes input 
function inputData(msg = "Enter Data"){
    var input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || isNaN(input));
    return input;
}
//Defining an Object
const Rectangle = {
    height :parseInt(inputData("Enter Height of Rectangle: ")),
    width : parseInt(inputData("Enter Width of Rectangle: ")),
    //Calculating Area
    area : function(){
        return this.height * this.width;
    },
    //Calculating Peremeter
    peremeter : function(){
        return 2 * (this.height + this.width);
    }
};
//Displaying data
document.write("<br>>> Area: "+Rectangle.area());
document.write("<br>>> Peremeter: "+Rectangle.peremeter());