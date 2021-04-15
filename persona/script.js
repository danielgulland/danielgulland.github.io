let header = document.getElementsByClassName("header")[0];
let tabs = header.getElementsByTagName("div");
let underline = document.getElementsByClassName("underline")[0];
let cards = document.getElementsByClassName("cards")[0];

 
for(let i=0;i<tabs.length;i++)
{
  tabs[i].addEventListener("click",function()
  {
    header.getElementsByClassName("active")[0].classList.remove("active");
    tabs[i].classList.add("active");
    cards.getElementsByClassName("active")[0].classList.remove("active");
    cards.getElementsByTagName("div")[i].classList.add("active");
    underline.style.left = `calc(calc(100% / 5) * ${i})`;
  });
}