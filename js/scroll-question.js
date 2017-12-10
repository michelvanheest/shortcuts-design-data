// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 50) {
//     $('.question-wrapper').fadeIn();
//   } else {
//     $('.question-wrapper').fadeOut();
//   }
// });

$(document).ready(function() {
    $(window).scroll( function(){
        $('.question-wrapper').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        });
    });
});
