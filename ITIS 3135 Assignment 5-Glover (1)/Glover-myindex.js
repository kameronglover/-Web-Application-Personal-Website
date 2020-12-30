$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 600,
        slideMargin: 10,
        randomStart:true,
        captions:true,
        speed:3000,
        pager:true,
        pagerType: 'short',
        pagerShortSeparator: '/',
        pageSelector: $("#pager")
    });
});

$(document).ready(function() {
    $( "input" ).checkboxradio();
} );
