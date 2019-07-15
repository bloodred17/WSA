// document.body.height = "5000px";

const btn_google = document.createElement('button');
let newWindow;
btn_google.innerHTML = "Open Google";
btn_google.onclick = () => {
    newWindow = window.open("", "new", "height=250px, width=250px");
    // location.assign("http://www.google.com");
    // console.log(screen.availHeight);
    // console.log(screen.availWidth=;
};

const btn_resize = document.createElement('button');
btn_resize.innerHTML = "Resize";
btn_resize.onclick = () => {
    newWindow.resizeTo(5000,250);
    newWindow.focus();
};

const btn_scroll = document.createElement('button');
btn_scroll.innerHTML = "Scroll";
btn_scroll.onclick = () => {
    document.body.style.width = "5000px";
    window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
        });
};


document.body.appendChild(btn_google);
document.body.appendChild(btn_resize);
document.body.appendChild(btn_scroll);
