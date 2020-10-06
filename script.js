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