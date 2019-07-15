const img = document.createElement('img');
img.src = "../html/resources/images/potato.png";
img.alt = "potato";
document.body.appendChild(img);

const txt = document.createElement('p');
txt.innerHTML = "Potato";
document.body.appendChild(txt);

const msg = document.createElement('p');

const newUser = prompt("Enter Username:");
const sameUser = document.cookie.split(";").filter((item) => {
    if(item.trim().includes("username="+newUser)){
        return true;
    }
});

if(sameUser.length <= 0){
    document.cookie = "username="+newUser;
    msg.innerHTML = "Welcome new user";
}else{
    msg.innerHTML = "";
}
document.body.appendChild(msg);