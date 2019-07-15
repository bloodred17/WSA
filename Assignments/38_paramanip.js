//******************************************************************
// + Discription: Program to change paragraph styling on button click
// + Author     : Ankur S Dutta
// + Start Date : 8-July-2019
// + End Date : 8-July-2019
// + Institution: WSA
//******************************************************************

//Creating Paragraph div and appending a paragraph to div_para
const body = document.body;
const div_para = document.createElement('div');
div_para.className = 'para';
const para = document.createElement('p');
para.innerHTML = "Hello World";
div_para.appendChild(para);
body.appendChild(div_para);

//Creating div for buttons
const div_btn = document.createElement('div');
div_btn.className = 'btn';
//Creating buttons and defining their functions
const btn_font_style = document.createElement('button');
btn_font_style.innerHTML = "Change Style";
btn_font_style.onclick = () => {
    para.style.fontFamily = "Helvetica";
};
const btn_font_color = document.createElement('button');
btn_font_color.innerHTML = "Change Color";
btn_font_color.onclick = () => {
    para.style.color = "aqua";
};
const btn_font_size = document.createElement('button');
btn_font_size.innerHTML = "Change Size";
btn_font_size.onclick = () => {
    para.style.fontSize = "50px";
};
//appending buttons to div and div to body
div_btn.appendChild(btn_font_style);
div_btn.appendChild(btn_font_color);
div_btn.appendChild(btn_font_size);
body.appendChild(div_btn);