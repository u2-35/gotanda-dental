$(function () {
	$('.menu-btn').click(function () {
		$('.nav-container').toggleClass('open');
        $(this).find('i').toggleClass('fa-bars fa-xmark');
	});
});