//******************************************************************
// + Discription: Program to Count the number of times a user visits
// + Author     : Ankur S Dutta
// + Start Date : 19-July-2019
// + End Date : 19-July-2019
// + Institution: WSA
//******************************************************************

//Function to get valid input from user
function inputString(msg = "Enter String"){
    var input;
    do{
        input = prompt(msg);
    }while(input === null || input === "" || !/[a-z]/.test(input));
    return input;
}

//Creating images and text and appending to body
const img = document.createElement('img');
img.src = "../html/resources/images/potato.png";
img.alt = "potato";
document.body.appendChild(img);
const txt = document.createElement('p');
txt.innerHTML = "Potato";

//Prompting the user for username
const newUser = inputString("Enter Username:");

const user = {
    name : newUser,
    lastVisited : Date(),
    visitNumber: 0
};
console.log(user);

//Getting List of Users visiting the page or creating a new one if no list is present in the cookie
let users = (document.cookie === "")? [] : JSON.parse(document.cookie);
console.log(users);

//Creating a paragraph element to display message
const msg = document.createElement('p');
msg.color = "white";

//Checking if the user has visited before
const sameUser = users.filter((item) => {
    return (item.name === user.name)? true : false;
});

if(sameUser.length <= 0){
    msg.innerHTML = "Welcome new user<br> You have never visited before.";
    users.push(user);
}else{
    //Displaying existing user's last visit
    msg.innerHTML = `Last Visit : ${sameUser[0].lastVisited}<br> You have visited ${sameUser[0].visitNumber} time${(sameUser[0].visitNumber > 1)? "s": ""} before`;
}
//Updating last vist date-time and visit count
users.forEach((item) => {
    if(item.name === user.name){
        item.lastVisited = Date();
        item.visitNumber += 1;
    }
});
document.cookie = JSON.stringify(users);
console.log(users);

console.log(document.cookie);
document.body.appendChild(msg);