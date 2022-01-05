$(function () {

	$('.menu__mob').on('click', function(){
		$('.menu').toggleClass('menu--open');
	});


	$('.gallery__btn').on('click', function(){
		$('.gallery__inner').toggleClass('gallery--open');
	});

	$('.gallery__btn-open').on('click', function(){
		$('.gallery__btn').addClass('gallery__btn--open');
	});

	$('.gallery__btn-close').on('click', function(){
		$('.gallery__btn').removeClass('gallery__btn--open');
	});


	$('.featured__items').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button><svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
		nextArrow: '<button><svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-right"></use></svg></button>'
	});


	$('.gallery__inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		// image: {
		// 	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		// 	titleSrc: function(item) {
		// 		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		// 	}
		// }
	});

})