$(document).ready(function(){
    //  Initialize AOS
    AOS.init();

    //Initialize smoothscroll
    var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 2000
    });


    $(window).bind('scroll', function(){
        var scrollAmount = $(window).scrollTop()
        if(scrollAmount > 50) {
            $('.navbar').addClass('navbar-scroll');
            $('.navbar-brand-fixed').addClass('navbar-brand-animate');
            $('.nav-link').addClass('nav-link-animate');
            $('.nav').addClass('link-adjust');
            $('#image').removeClass('initialLogo');
            $('#image').addClass('finalLogo');
        } else {
            $('.navbar').removeClass('navbar-scroll');
            $('.navbar-brand-fixed').removeClass('navbar-brand-animate');
            $('.nav-link').removeClass('nav-link-animate');
            $('.nav').removeClass('link-adjust');
            $('#image').addClass('initialLogo');
            $('#image').removeClass('finalLogo');

        }
    });

    // Hide nabvar on click

    $('nav').find('li').bind('click' ,'a' ,function(){
        $(this).collapse('hide');
    });
});