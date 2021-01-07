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

$('#tools-productivity-click-trans').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'tools-productivity-click-trans' ? $('#tools-productivity-click') : $('#tools-productivity-click-trans');
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

$('#tools-contribute-click-trans').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'tools-contribute-click-trans' ? $('#tools-contribute-click') : $('#tools-contribute-click-trans');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});
