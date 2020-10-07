var height = $('header').height();

$(window).scroll(function() {
    if ($(this).scrollTop() > height) {
        $('#nav').addClass('fixed');
    } else {
        $(nav).removeClass('fixed');
    }
})
var audio = document.getElementById("audio")

function zene() {
    var x = document.getElementById("canvas");
    if (x.style.display === "none") {
        x.style.display = "block"
        audio.play()


    } else {
        x.style.display = "none"
        audio.pause();
    }

}

function kicsi() {

    document.getElementById("canvas").style.height = "5%"
    document.getElementById("canvas").style.top = "95%"

}

function kozepes() {
    document.getElementById("canvas").style.height = "188px"
    document.getElementById("canvas").style.top = "80%"
}

function nagy() {

    document.getElementById("canvas").style.height = "375px"
    document.getElementById("canvas").style.top = "60%"
}

function opacity() {

    var x = document.getElementById("atlatszo").value;
    document.getElementById("canvas").style.opacity = x / 10

}

let progress = document.getElementById('progressbar');
let totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressheight = (window.pageYOffset / totalheight) * 100;
    progress.style.height = progressheight + "%";
}