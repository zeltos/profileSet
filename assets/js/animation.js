
  $(document).ready(function () {


    $('#open-form').click(function(){
      $('.contact-wrapper').addClass('active');
      $('.contact-wrapper').addClass('z-depth-2');
    });

    $('#btn-close').click(function(){
      $('.contact-wrapper').removeClass('active');
      $('.contact-wrapper').removeClass('z-depth-2');
    });


    
    var windowNav = $('.navigation').width();
    $('.menu-fixed').width(windowNav);

     $('.parallax').parallax();

     $('.tooltipped').tooltip({delay: 50});

     $('.modal-trigger').leanModal();

  $(function(){

        $("#typedz").typed({
          strings: ["<b>30</b> Kill peoples with <b>Sniper</b>", "Kill enemy like <b>Goat</b> eat grass on the land"],
          typeSpeed: 100,
          loop: true
            // false = infinite
        });
    });

  $(function(){

        $(".job-title").typed({
          strings: ["<b>Hi !,</b> I am John wick","<b>FRONT-END</b> web Developer</b>", "Kill enemy like <b>Goat</b> eat grass on the land"],
          typeSpeed: 100,
          loop: true
            // false = infinite
        });
    });


  //  $("#owl-demo").owlCarousel({
 
  //     navigation : true, // Show next and prev buttons
  //     slideSpeed : 300,
  //     autoPlay : 1500,
  //     paginationSpeed : 400,
  //     transitionStyle : "fadeUp",
  //     singleItem:true
 
  //     // "singleItem:true" is a shortcut for:
  //     // items : 1, 
  //     // itemsDesktop : false,
  //     // itemsDesktopSmall : false,
  //     // itemsTablet: false,
  //     // itemsMobile : false
 
  // });

  });

  $(window).resize(function () {

     var windowNav = $('.navigation').width();
     $('.menu-fixed').width(windowNav);
    });



// scroollll anchor
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.menu-item[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.menu-item').each(function () {
        $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1200, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop()+79;
    $('.menu-item').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu-item').removeClass("active");
            currLink.addClass("active");
        } else if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.menu-item:last').addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}