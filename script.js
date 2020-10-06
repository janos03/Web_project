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

function updateSlider() {

    var x = document.getElementById("magassag").value
    document.getElementById("canvas").style.height = "500px";
    document.getElementById("canvas").style.top = "90%"
}