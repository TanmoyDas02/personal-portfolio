console.log("script running...")

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
    }
})

var typed = new Typed("#auto", {

    strings: ["I am a Developer", "I am a Coder", "I am an Instagrammer", "And", "I am an Engineer &#128514;"],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true,

})