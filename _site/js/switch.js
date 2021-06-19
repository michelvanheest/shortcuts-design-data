var detectOS = "Unknown OS";

if (navigator.appVersion.indexOf("Win") != -1) 
    detectOS = "Windows";

if (navigator.appVersion.indexOf("Mac") != -1) 
    detectOS = "macOS";

if (navigator.appVersion.indexOf("Linux") != -1) 
    detectOS = "Linux";

$(function() {
    if (detectOS == "macOS") {
        $('ul.tabs .macOS').addClass('current');
        $('.tab-content .macOS').addClass('current');
    } 
    if (detectOS == "Windows") {
        $('ul.tabs .windows').addClass('current');
        $('.tab-content .windows').addClass('current');
    }
    if (detectOS == "Linux") {
        $('ul.tabs .windows').addClass('current');
        $('.tab-content .windows').addClass('current');
    }
});

$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})