$(document).ready(function(){
    $(".notification-button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);
    $(".notification-button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
