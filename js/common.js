$(document).ready(function() {
	$('.room label').click(function(event) {
		$(this).toggleClass('is-active');
	});
	$('.filters li').click(function(event) {
		$('.filters a').removeClass('is-active');
		$(this).children('a').addClass('is-active');
		return false;
	});
});