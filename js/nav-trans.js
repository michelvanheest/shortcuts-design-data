$('#tools-design-click-trans').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'tools-design-click-trans' ? $('#tools-design-click') : $('#tools-design-click-trans');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});

$('#tools-development-click-trans').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'tools-development-click-trans' ? $('#tools-development-click') : $('#tools-development-click-trans');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});

$('#tools-miscellaneous-click-trans').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'tools-miscellaneous-click-trans' ? $('#tools-miscellaneous-click') : $('#tools-miscellaneous-click-trans');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});
