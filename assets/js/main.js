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
        } else {
            $('.navbar').removeClass('navbar-scroll');
        }
    });
    
});