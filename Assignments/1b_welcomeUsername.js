//******************************************************************
// + Discription: Program to change content of the paragraph
// + Author     : Ankur S Dutta
// + Start Date       : 24-May-2019
// + End Date       : 24-May-2019
// + Institution: WSA
//******************************************************************

document.write("<h1>To Print Area of a triangle:</h1><br>");
const para = document.createElement("p");
para.innerHTML = "This is original Paragraph.";
document.body.appendChild(para);

const btn = document.createElement("button");
btn.innerHTML = "Click to change paragraph";
btn.onclick = () => {
    para.innerHTML = "This is the changed paragraph";
};
document.body.appendChild(btn);
