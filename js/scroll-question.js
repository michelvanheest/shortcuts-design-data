$(document).ready(function() {
    $(window).scroll( function(){
        $('.question-wrapper').each( function(i){
            var bottom_of_object = $(this).position().top + 500;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        });
    });
});
