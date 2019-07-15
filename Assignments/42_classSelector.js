//******************************************************************
// + Discription: Program to manupulate three paragraphs by using getElementsByClassName()
// + Author     : Ankur S Dutta
// + Start Date : 8-July-2019
// + End Date : 8-July-2019
// + Institution: WSA
//******************************************************************

var para1 = document.createElement('p');
para1.innerHTML = "Angular is a great JavaScript framework for creating applications which can run on many platforms. However, the more your app grows, the longer your compilation times may become. This makes writing code more cumbersome and reduces your developer productivity. You shouldn’t have to wait two minutes for compilation to be finished just to see whether this one line of changed code did the trick.";

para1.className = "para_one";
var para2 = document.createElement('p');
para2.innerHTML = "Sure, if your app is the size of a to-do app, you might be satisfied with the compilation times. However, in larger projects with multiple developers and an increasing amount of third-party dependencies, the compilation times can become quite long.";
para2.className = "para_two";

var para3 = document.createElement('p');
para3.innerHTML = "I’ve been using Angular since the final version of Angular 2 was released in 2016. Since then, I have seen and used different ways of writing better and faster code in Angular projects.";
para3.className = "para_three";

document.body.appendChild(para1);
document.body.appendChild(para2);
document.body.appendChild(para3);

const paras = document.getElementsByTagName('p');
const arr_paras = [...paras];
const para_class = arr_paras.map((para) => {
    return para.className;
});

const display_class = document.createElement('h2');
display_class.innerHTML = "Paragraph Class Names:";
arr_paras.forEach((para) => {
    display_class.innerHTML += "<br>"+para.className; 
});
document.body.appendChild(display_class);
// console.log(para_class);

const input = prompt('Enter Class Name to manupulate:');
if(!para_class.includes(input)){
    document.write("Enter a valid Class!");
}else{
    
    const new_paras = document.getElementsByClassName(input);
    const arr_new_paras = [...new_paras];
    
    const btn_left = document.createElement('button');
    btn_left.innerHTML = "Left";
    btn_left.onclick = () => {
        arr_new_paras.forEach((para) => {
            para.style.textAlign = "left";
        });
    };
    const btn_right = document.createElement('button');
    btn_right.innerHTML = "Right";
    btn_right.onclick = () => {
        arr_new_paras.forEach((para) => {
            para.style.textAlign = "right";
        });
    };
    const btn_center = document.createElement('button');
    btn_center.innerHTML = "Center";
    btn_center.onclick = () => {
        arr_new_paras.forEach((para) => {
            para.style.textAlign = "center";
        });
    };
    
    document.body.appendChild(btn_left);
    document.body.appendChild(btn_center);
    document.body.appendChild(btn_right);
}