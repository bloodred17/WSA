var men = [];
for(let i = 0; i < 100; i++){
    men[i] = i+1;
}
var result = 0;
for(let i = 0; i <= men.length; i++){
    // document.write("<br>"+men.length);
    // document.write("<br> i = "+ i);
    // document.write("<br>>> Men: "+men);
    
    if(i+1 > men.length){
        i=0;
        count = 0;
    }
    count = i+1;
    if(i+1 === men.length){
        count = 0;
    }
    if(men.length === 1){
        break;
    }else{
        result = men[i];
        men.splice(count, 1);
    }    
    if( i === men.length){
        i = -1;
        count = 0;
    }
    
}

document.write("<br>>> Result "+result);