$(document).ready(function(){
	$("#search").on("keypress", function (){
		var search = $(this).val().toLowerCase();
		$("img").filter(function(){
			if ($(this).attr("alt").toLowerCase().indexOf(search) > -1) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});
});