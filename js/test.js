for(var i = 1; i <= 10; i++){
    if(i % 2 != 0){
        continue;
    }
    for(var j = 1; j <= 10; j++ ){
        if(j % 2 !== 0){
            continue;
        }
        document.write("i ="+i+" j ="+j+ "<br>");
    }
    
}