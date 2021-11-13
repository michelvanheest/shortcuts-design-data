// Hide table-of-contents.njk when search is active
$(document).ready(function(){
    $('#myInput').on('input', function() {
        $('.data-toc #myTable')[$(this).val().length > 0 ? 'fadeOut' : 'fadeIn']();
    });

    $('#myInput').on('focus', function() {
        $('.data-toc #myTable').fadeIn();
    });
});

// Scroll to card-row
$('#profile').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'profile' ? $('#card-row') : $('#profile');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 600);
});

// Scroll to searchbar
$('#scroll-to-search').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'scroll-to-search' ? $('#myInput') : $('#scroll-to-search');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 600);
    onclick=document.querySelector('#myInput').focus()
});

// Toggle newsletter modal
$('#hero-button').on('click', function () {
    $('.newsletter-wrapper').addClass('active');
});

$('.newsletter img').on('click', function () {
    $('.newsletter-wrapper').removeClass('active');
});