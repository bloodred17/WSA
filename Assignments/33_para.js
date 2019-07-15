//******************************************************************
// + Discription: Program to change paragraph style using dom
// + Author     : Ankur S Dutta
// + Start Date : 5-July-2019
// + End Date   : 5-July-2019
// + Institution: WSA
//******************************************************************


//creating body obj
const body = document.body;
//creating div_page to display heading and paragraph
const div_page = document.createElement('div');
div_page.id = 'div_page';
body.appendChild(div_page);
//creating div_button to contain buttons
const div_btn = document.createElement('div');
div_btn.id = 'div_btn';
body.appendChild(div_btn);
//creating h1 element and putting it inside div_page
const h = document.createElement('h1');
h.innerHTML = "Paragraph";
div_page.appendChild(h);
//creating paragraph element and putting it inside div_page
const para = document.createElement('p');
para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan tortor orci, eget pellentesque lectus rutrum ut. Pellentesque nibh magna, molestie a risus eu, dictum fermentum magna. Mauris tristique augue sapien, at varius urna gravida ac. Etiam condimentum justo vitae lacus tincidunt, vel tristique ante dictum. Fusce justo nisi, sagittis nec cursus eu, dapibus non neque. Quisque urna libero, blandit eget turpis nec, venenatis pharetra ipsum. Nunc suscipit rutrum sapien, ac sollicitudin nisi egestas sed. Suspendisse vel dapibus enim. Sed ut scelerisque massa. In hac habitasse platea dictumst. Vestibulum condimentum risus eget risus tristique, nec luctus nisi condimentum. Maecenas euismod dictum ex a tristique. Ut tincidunt nulla mauris, auctor fringilla libero consequat quis. ";
div_page.appendChild(para);
//creating button to change paragraph styling and putting it inside div_btn
const btn1 = document.createElement('button');
btn1.className = "btn";
btn1.innerHTML = "Change Para";
//creating changeParaText function to modify style of paragraph and assigning it to button
function changeParaText(){
    para.style.color = "red";
    para.style.fontFamily = "Helvetica";
    para.style.fontSize = '24px';
    para.style.fontWeight = 'bolder';
}
btn1.onclick = changeParaText;
div_btn.appendChild(btn1);
//Creating button 2 to add border to paragraph
const btn2 = document.createElement('button');
btn2.className = 'btn';
btn2.innerHTML  = "Add Border";
//creating function to add border to paragraph and assigning it to button2
function addBorder(){
    div_page.style.border = "1px solid blue";
    div_page.style.margin = "10px 20px";
    div_page.style.padding = "10px";
}
btn2.onclick = addBorder;
div_btn.appendChild(btn2);