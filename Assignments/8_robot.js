//******************************************************************
// + Discription: Program to check if robot is in (0,0)
// + Author     : Ankur S Dutta
// + Date       : 28-May-2019
// + Institution: WSA
//******************************************************************

document.write("<h1>To check if robot is in Starting Position (0,0) </h1><br>");
//Taking Values
var input = prompt("Enter movement pattern for Robot:");
//Validating variable values
if (input === null || input === "" || !isNaN(input)) {
    document.write("Enter valid Input");
} else {
    //Co-ordinates
    var x_axis = 0;
    var y_axis = 0;
    //Movement flag
    // var move_flag = false;

    for (let i = 0; i < input.length; i++) {
        //Moving Robot according to input
        switch (input.charAt(i)) {
            case "U":
                x_axis++;
                break;
            case "D":
                x_axis--;
                break;
            case "R":
                y_axis++;
                break;
            case "L":
                y_axis--;
                break;
            default:
                document.write(" --Invalid value : " + input.charAt(i));
        }
        document.write(">> ( X :" + x_axis + ", Y :" + y_axis + " )<br>");
    }
    //Checking for Robot's Return to starting point
    if (x_axis == 0 && y_axis == 0) {
        document.write(">> True : Robot has returned to Starting Point");
    } else {
        document.write(">> False : Robot has not returned to Starting Point");
    }
}