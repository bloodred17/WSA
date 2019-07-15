var input = prompt("Enter a string: ");
document.write("<br>>> Input: "+input);
var str = input.split("");
var regStr = str;
console.log(regStr);
console.log(str);
var ctr = 0;
var str_arr = [];
for(let j = 0; j < str.length; j++){
    let i = 0;

    while(i+1 < str.length){
        
        document.write("<br>I : "+i);
        // document.write("<br>len : "+str.length);
        console.log(str.join(""));
        console.log(str_arr.includes(str));
        console.log(str[i] !== str[i+1]);
        console.log("Eval : "+eval(!str_arr.includes(str) && str[i] !== str[i+1]))
        if(str[i] !== str[i+1] && !str_arr.includes(str)){
            var temp = str.splice(i, 1);
            var temp2 = str.splice(i, 1);

            console.log("Temp :"+temp);
            console.log("Temp2 :"+temp2);

            str.splice(i,0,temp);
            str.splice(i,0,temp2);
            document.write("<br>>>> "+str.join(""));
            str_arr[ctr] = str.join("");
            ctr++;
        }
        document.write(" str_arr: "+str_arr);
        i++;

    }
    // i = 0;

    // if(str === regStr){
    //     break;
    // }
}