//******************************************************************
// + Discription: Program to display link attributes
// + Author     : Ankur S Dutta
// + Start Date : 8-July-2019
// + End Date : 8-July-2019
// + Institution: WSA
//******************************************************************

const body = document.body;
//Creating link tag
const link = document.createElement('a');
//defining attributes for link
link.href = "http://www.google.com";
link.hreflang = "en-us";
link.rel = "nofollow";
link.type = "text/html";
link.target = "_self";
link.innerHTML = "Link";
link.style.color = "red";
//appending link to body
body.appendChild(link);
const str = "<br>The value of ";
//Displaying link attributes
document.write(str+"href :"+link.href);
document.write(str+"hreflang :"+link.hreflang);
document.write(str+"rel :"+link.rel);
document.write(str+"target :"+link.target);
document.write(str+"type :"+link.type);
