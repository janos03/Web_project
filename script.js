var height = $('header').height();

$(window).scroll(function() {
    if ($(this).scrollTop() > height) {
        $('#nav').addClass('fixed');
    } else {
        $(nav).removeClass('fixed');
    }
})