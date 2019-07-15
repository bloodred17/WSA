const btn_para = document.createElement('button');
btn_para.innerHTML = "Create Paragraph";
btn_para.onclick = () =>{
    document.body.appendChild(para);
}
document.body.appendChild(btn_para);

const btn_nav = document.createElement('button');
btn_nav.innerHTML = "Create Nav";
btn_nav.onclick = () => {
    document.body.appendChild(nav);
};
document.body.appendChild(btn_nav);

const btn_strong = document.createElement('button');
btn_strong.innerHTML = "Create Strong";
btn_strong.onclick = () => {
    document.body.appendChild(strong);
};
document.body.appendChild(btn_strong);

const para = document.createElement('p');
para.innerHTML = "This is a paragraph.";

const nav = document.createElement('nav');

const a1 = document.createElement('a');
a1.href = "http://www.google.com";
a1.innerHTML = "Google";
a1.style.display = 'block';
const a2 = document.createElement('a');
a2.href = "http://www.quora.com";
a2.innerHTML = "Quora";
a1.style.display = 'block';

nav.appendChild(a1);
nav.appendChild(a2);

const strong = document.createElement('strong');
strong.innerHTML = "This is strong text";
