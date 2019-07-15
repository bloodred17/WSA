//******************************************************************
// + Discription: Program for Nim Game
// + Author     : Ankur S Dutta
// + Date       : 27-May-2019
// + Institute  : wSA
//******************************************************************

document.write("<h1>Nim Game: </h1>");

var heap;

var player1 = "";
var player2 = "";

var chance1 = true;
var chance2 = false;

//Taking heap size
do {
    heap = +prompt("Enter Heap size:");
    if(heap == null || heap === "" || isNaN(heap) || heap < 0)
    alert("Enter a valid value");
}while(heap == null || heap === "" || isNaN(heap) || heap < 0);

document.write(">>> Heap Size : "+ heap + "<br>");

//Starting game
while(chance1 || chance2){
    var num = 0;
    //Player 1
    if(chance1 && heap > 1){ 
        do{
            num = +prompt("Player1: Enter value to take between 1 & 3");
        }while(num === null || num == "" || isNaN(num) || num > 3 || num < 0 || (heap-num) < 1);
        //subracting values from heap
        heap = heap - num;
        document.write(">>> Heap: "+heap+  "<br>");

        //Checking heap for player 1
        if(heap === 1 || heap === 4){
            player1 = player1 + num + ", ";
            document.write(">> Player 1: "+ player1 + "<br>");
            document.write(">> Player 1 has WON!");
            break;
        }else if( heap < 1){
            document.write("Draw");
            break;
        }else{
            player1 = player1 + num + ", ";
            document.write(">> Player 1: "+ player1 + "<br>");
            chance1 = false;
            chance2 = true;
        }
        //player2
    }else if(chance2 && heap > 1){ 
        do{
            num = +prompt("Player2: Enter value to take between 1 & 3");
        }while(num === null || num == "" || isNaN(num) || num > 3 || num < 0 || (heap-num) < 1);
        heap = heap - num;
        document.write(">>> Heap: "+heap+ "<br>");
        
        //Checking heap for player 2
        if(heap === 1 || heap === 4){
            player2 = player2 + num +", ";
            document.write(">> Player 2: "+ player2 + "<br>");
            document.write("Player 2 has WON!");
            break;
        }else if( heap < 1){
            document.write("Draw");
            break;
        }else{
            player2 = player2 + num +", ";
            document.write(">> Player 2: "+ player2 + "<br>");
            chance1 = true;
            chance2 = false;
        }
    }else{
        break;
    }
}