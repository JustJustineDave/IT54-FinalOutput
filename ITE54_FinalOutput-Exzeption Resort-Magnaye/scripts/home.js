const images = ["./images/cover.jpg", "./images/cover2.jpg"];
let index = 0;
let interval;

function changeBackground() {
    document.body.style.backgroundImage = `url(${images[index]})`;
}

document.addEventListener("DOMContentLoaded", function () {
    changeBackground();
});

const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById('left');
var menu = document.getElementsByClassName('underlined_text');
var head = document.getElementsByClassName('glow');
const aboutBtn = document.getElementById('aboutBtn');
const homeBtn = document.getElementById('homeBtn');
const contactBtn = document.getElementById('contactBtn');
const reserveBtn = document.getElementById('reserveBtn');
rightBtn.addEventListener('click', () => {
    index++;
    if (index > images.length - 1) {
        index--;
        return;
    }
    for(var i = 0; i < menu.length; i++){
        menu[i].style.color = "white";
    }
    for(var i = 0; i < head.length; i++){
        head[i].style.color = "white";
    }
    changeBackground();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index++;
        return;
    }
    for(var i = 0; i < menu.length; i++){
        menu[i].style.color = "black";
    }
    for(var i = 0; i < head.length; i++){
        head[i].style.color = "black";
    }
    changeBackground();
    resetInterval();
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(changeBackground, 2000);
}

aboutBtn.addEventListener('click', () => {
    const about_section = document.getElementById('about_section');
    if (about_section) {
        about_section.scrollIntoView({ behavior: 'smooth' });
    }
});
homeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
contactBtn.addEventListener('click', () => {
    const contact_section = document.getElementById('contact_section');
    if (contact_section) {
       contact_section.scrollIntoView({ behavior: 'smooth' });
    }
});
contactBtn.addEventListener('click', () => {
    const contact_section = document.getElementById('contact_section');
    if (contact_section) {
       contact_section.scrollIntoView({ behavior: 'smooth' });
    }
});
var num = 1;
reserveBtn.addEventListener('click', () => {
    var reserve_frame = document.getElementById('reserve_frame');
    if (num == 1) {
        reserve_frame.style.display = "block";
        reserve_frame.src = "form.html";
        num = 2;
    } else {
        reserve_frame.style.display = "none";
        reserve_frame.src = "";
        num = 1;
    }
});
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(changeBackground, 2000);
}
window.addEventListener('message', function (event) {
    if (event.data === 'close') {
        reserve_frame.style.display = "none";
        reserve_frame.src = "";
    }
});
