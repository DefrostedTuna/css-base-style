$(function() {

	$("[class^=flash-hide]").click(function() {
		$(this).fadeOut();
	});

	$(".iframe-wrap").fitVids();

	$(".ut-button-reload-flash").click(function() {
		$("[class^=flash]").slideDown();
	});
});
