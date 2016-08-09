var themeTimer, pageTimer;

$(document).ready(function(){

    //one page scroll
    if($('.onepage-wrapper').length>0){
        $(".onepage-wrapper").onepage_scroll({
            sectionContainer: ".section",     // sectionContainer accepts any kind of selector in case you don't want to use section
            easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                             // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
            animationTime: 700,             // AnimationTime let you define how long each section takes to animate
            pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
            updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
            beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
            afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
            loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
            keyboard: true,                  // You can activate the keyboard controls
            responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
            // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
            // the browser's width is less than 600, the fallback will kick in.
            direction: "vertical"
        });
    }

    //scroll to explore
    $(".scroll-explore").on("click", function(){
        $(".onepage-wrapper").moveDown();
    });

    //carousel
    var owl1, owl2;
    if($('#motto .carousel').length>0){
        owl1 = $('#motto .carousel').owlCarousel({
            loop:true,
            items:1, //slide 1 item one time
            smartSpeed: 600,
            autoplay:true,
            autoplayTimeout: 10000 //auto play timer(ms)
        });
    }

    //carousel
    if($('#challenges .carousel').length>0){
        owl2 = $('#challenges .carousel').owlCarousel({
            loop:true,
            items:4, //slide 4 item one time
            smartSpeed: 150,
            autoplay:true,
            autoplayTimeout: 10000,
            slideBy:4,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }

        });
    }

    //listen left/right arrow for carousel
    $("body").on("keydown", function(e){
        switch(e.which) {
            case 37:
                owl1.trigger('stop.owl.autoplay');
                owl2.trigger('stop.owl.autoplay');
                owl1.trigger('prev.owl.carousel');
                owl2.trigger('prev.owl.carousel');
                break;
            case 39:
                owl1.trigger('stop.owl.autoplay');
                owl2.trigger('stop.owl.autoplay');
                owl1.trigger('next.owl.carousel');
                owl2.trigger('next.owl.carousel');
                break;
            default: return;
        }
    });

    //listen left/right arrow for carousel autoplay
    $("body").on("keyup", function(e){
        switch(e.which) {
            case 37:
                owl1.trigger('play.owl.autoplay');
                owl2.trigger('play.owl.autoplay');
                break;
            case 39:
                owl1.trigger('play.owl.autoplay');
                owl2.trigger('play.owl.autoplay');
                break;
            default: return;
        }
    });


    //login
    $(".btn-login, .link-login").on("click", function () {
        $(".modals").css({"display":"flex"});
    });

    //close modal window
    $(".modals").on("click", function (event) {
        var $target = $(event.target);
        if(!$target.is(".modals *")){
            $(this).css({"display":"none"});
            return false;
        }
    });

    //close modal window
    $(".modals").on("click", ".btn-modal-close", function (event) {
        $(".modals").css({"display":"none"});
    });
});
