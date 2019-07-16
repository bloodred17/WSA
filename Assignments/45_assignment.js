const input = prompt('Enter Username:');

const msg = document.createElement('p');
msg.innerHTML = "Username: ";

document.body.appendChild(msg);
window.setInterval(() => {
    const username = document.createElement('p');
    username.innerHTML = input.trim();
    document.body.appendChild(username);
}, 30000);