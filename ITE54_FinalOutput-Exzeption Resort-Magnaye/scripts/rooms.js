const reserveBtn = document.getElementById('reserveBtn');
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
window.addEventListener('message', function (event) {
    if (event.data === 'close') {
        reserve_frame.style.display = "none";
        reserve_frame.src = "";
    }
});