$(document).ready(function($) {

	$('.slider__wrap').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="../../upload/arrow-left.png" alt="" /></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="../../upload/arrow-right.png" alt="" /></button>'

	})
	
	$('.input_phone').mask('+7 (999) 999-99-99');


	$(".panel__nav a.line-in-page").click(function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});