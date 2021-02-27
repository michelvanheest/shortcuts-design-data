// Fade in banner.njk
$(function() {
    $(window).scroll( function(){
        $('#banner-wrapper').each( function(i){
            var bottom_of_object = $(this).position().top + 500;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},600);
            }
        });
    });
});

// Fade in scroll-button.njk
$(function() {
    $(window).scroll( function(){
        $('#scroll-to-search').each( function(i){
            var bottom_of_object = $(this).position().top + 500;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},600);
            }
        });
    });
});

// Scroll to searchbar
$('#scroll-to-search').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'scroll-to-search' ? $('#myInput') : $('#scroll-to-search');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 600);
});