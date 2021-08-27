let countDate = new Date("sept 31, 2021 00:00:00").getTime();

function countDown()  {
    
    let now = new Date().getTime();
    gap = countDate - now;

    let sec = 1000;
    let min = sec * 60;
    let hr = min * 60;
    let day = hr * 24;

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % (day)) / hr);
    let m = Math.floor((gap % (hr)) / min);
    let s = Math.floor((gap % (min)) / sec);

    document.getElementById("day").innerHTML = d;
    document.getElementById("hr").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;

}

setInterval(function () {
    countDown();
}, 1000);