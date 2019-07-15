const reloader = () => {
    // document.cookie = "lastVisited="+lastVisited;
    counter++;
    document.cookie = "counter="+counter; 
    // if(!isNaN(counter)){
    // }
    console.log("cookie: "+document.cookie);
};

// const last_vist_msg = document.createElement('p');

// // //start
// let lastVisited =  document.cookie.split(";").find((item) => {
//     if(item.startsWith("lastVisited=")){
//         return item;
//     }
// });
// lastVisited = (lastVisited!== undefined)? lastVisited : "none";
// //display last visited
// last_vist_msg.innerHTML = "Last visit : "+lastVisited;
// document.body.appendChild(last_vist_msg);

// //adding latest visit
// lastVisited = new Date();
// lastVisited = lastVisited.toUTCString()

const countData = document.cookie.split(";").find((item) => {
    if(item.startsWith("counter=")){
        return item;
    }
});

console.log("countData = "+countData);
let counter = (countData !== undefined)? document.cookie.split("=").find((item) => {
    if(/^[0-9]/.test(item)){
        return parseInt(item);
    }
}) : 0;
console.log("counter: "+ counter);
reloader();

// console.log(document.cookie.name);

const img = document.createElement('img');
img.src = "../html/resources/images/potato.png";
img.alt = "potato";
document.body.appendChild(img);
const txt = document.createElement('p');
txt.innerHTML = "Potato";
document.body.appendChild(txt);

const msg = document.createElement('p');
msg.innerHTML = "Number of visits = "+counter;
document.body.appendChild(msg);

const display_date = document.createElement('p');
display_date.innerHTML = "Last visited: "+
document.body.appendChild(display_date);
