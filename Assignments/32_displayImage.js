//******************************************************************
// + Discription: Program to change image on mouseover and mouseleave
// + Author     : Ankur S Dutta
// + Start Date : 5-July-2019
// + End Date   : 5-July-2019
// + Institution: WSA
//******************************************************************

//creating body obj
const body = document.body;
//creating a image container for images
const div_img = document.createElement('div');
//creating an image object and putting it into image container
const image1 = document.createElement('img');
div_img.className = "image-container";
body.appendChild(div_img);
//adding attributes to the image
image1.src = "./32_displayImage/image1.jpg";
image1.alt = "image1";
image1.style.height = "300px";
image1.style.height = "500px";
div_img.appendChild(image1);
//adding attributes to image2
const image2 = document.createElement('img');
image2.src = "./32_displayImage/image2.jpg";
image2.alt = "image2";
image2.style.height = "300px";
image2.style.height = "500px";
image2.style.display = "none";
div_img.appendChild(image2);
//function to be called when mouse is over the image
image1.onmouseover = () => {
    image1.style.display = "none";
    image2.style.display = "block";
};
//function to be called when mouse leaves the image
image2.onmouseleave = () => {
    image1.style.display = "inline-block";
    image2.style.display = "none";
};