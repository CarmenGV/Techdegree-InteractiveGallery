$(document).ready(function(){
	$("#search").on("keypress", function (){
		var search = $(this).text().toLowerCase();
		$("img").each(function(){
			if ($(this).text().toLowerCase().indexOf(search) > 1) {
				$(this).show();
			} else {
				$(this).hide();
			}
		})
	});
});