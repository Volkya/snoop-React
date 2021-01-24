$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

$('.multiple-items').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6
});


// $(window).scroll(function() {
//     if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
//     {
//         $('.opaque-navbar').addClass('opaque');
//     } else {
//         $('.opaque-navbar').removeClass('opaque');
//     }
// });
//
// $('.multiple-items').slick({
//     arrows: true,
//     infinite: true,
//     slidesToShow: 6,
//     slidesToScroll: 6
// });