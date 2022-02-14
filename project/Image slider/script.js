
var slide = document.getElementsByClassName("slider");
var btn2 = document.getElementsById("btn2");
var btn1 = document.getElementsById("btn1");
var btn3 = document.getElementsById("btn3");
var btn4 = document.getElementsById("btn4");
var btn5 = document.getElementsById("btn5");

btn1.onclick = function () {
    slide.style.transform = "translateX(0px)";
}

btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
}

btn3.onclick = function () {
    slide.style.transform = "translateX(-200%)";
}

btn4.onclick = function () {
    slide.style.transform = "translateX(-300%)";
}

btn5.onclick = function () {
    slide.style.transform = "translateX(-400%)";
}
