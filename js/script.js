$(function () {
	$('.menu-btn').click(function () {
        if($('.nav-container').hasClass('open')) {
            $('.nav-container').removeClass('open');
            $('.menu-btn').find('i').removeClass('fa-xmark');
            $('.menu-btn').find('i').addClass('fa-bars');
        }else{
            $('.nav-container').addClass('open');
            $('.menu-btn').find('i').addClass('fa-xmark');
            $('.menu-btn').find('i').removeClass('fa-bars');
        }
        if($('.nav-container').hasClass('open')) {
            $('main').click(function(){
                $('.nav-container').removeClass('open');
                $('.menu-btn').find('i').removeClass('fa-xmark');
                $('.menu-btn').find('i').addClass('fa-bars');
            });
        }
    });
});