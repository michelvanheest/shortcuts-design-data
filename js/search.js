// Search function GitHub Submodules
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".data-table #myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        if($(".data-table #myTable tr").children(":visible").length == 0) {
            $(".error").show();
        } else {
            $(".error").hide();
        }
    });
});

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		document.querySelector('#myInput').blur()
	}
});