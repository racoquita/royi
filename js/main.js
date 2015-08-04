/*
 * declare the royi namespace
 */
var Royi = Royi || {};

Royi.PageHandler = function() {

	var slideCount = slides.length - 1;
	var currentSlide = 0;
	var dir = 'right';
	var isAnimating = false;
	var iconStates = ['iam', 'exploration', 'production', 'drilling', 'surface'];

	var init = function() {
		$('.language').on('click', function(e) {
			$('body').removeClass().addClass($(e.currentTarget).data('lang'));
		});

		$('#services h2').on('click', function(e) {
			$('.icon').toggleClass('show hide');
		});

		$('nav').on('click', 'a.menu-item', function(e) {
			scrollToSection($(e.currentTarget).attr('href'));
		});

		$('.arrow').on('click', function(e) {
			e.preventDefault();

			if (!isAnimating) {
				dir = $(e.currentTarget).data('dir');
				
				if (dir == 'next') {
					currentSlide != slideCount ? currentSlide++ : currentSlide = 0;				
				} else {
					currentSlide != 0 ? currentSlide-- : currentSlide = slideCount;	
				}

				changeSlide();
			}
		});

		changeSlide();
	}

	var scrollToSection = function(el) {
		if ($(el).offset()) {
			$('html, body').animate({
	        	scrollTop: $(el).offset().top - 70
	    	}, 500);
		}
	}

	var changeSlide = function() {
		isAnimating = true;

		getSlide(function(clone) {
			var anim = dir == 'prev' ? 'fadeOutLeft' : 'fadeOutRight';

			$('.slide').addClass(anim);
			$('.slides').append(clone);

			iconHandler();

			setTimeout(function() {
				$('.slide').remove();
				$('.clone').addClass('slide').removeClass('clone fadeInRight fadeInLeft');
				isAnimating = false;
			}, 1000);
		});
	}

	var getSlide = function(callback) {
		var slide = slides[currentSlide];
		var spanish_items = '';
		var english_items = '';
		var anim = dir == 'prev' ? 'fadeInRight' : 'fadeInLeft';

		$.each(slide.spanish.items, function(i, item) {
			spanish_items += '<li>' + item + '</li>';
		});

		$.each(slide.english.items, function(i, item) {
			english_items += '<li>' + item + '</li>';
		});

		var clone = $(
			'<div class="clone animate '+ anim +'" lang="es"> \
				<h3>'+ slide.spanish.title +'</h3> \
				<ul>' + spanish_items + '</ul> \
			</div> \
			<div class="clone animate '+ anim +'" lang="en"> \
				<h3>'+ slide.english.title +'</h3> \
				<ul>' + english_items + '</ul> \
			</div>'
		);

		callback(clone);
	}

	var iconHandler = function() {
		$('.icon').toggleClass('show hide');

		setTimeout(function() {
			$('.icon').removeClass('iam exploration production drilling surface').addClass(iconStates[currentSlide]).toggleClass('show hide');
		}, 500);
	}

	return {
		init: init
	}
}

$(document).ready(function() {
	Royi.pageHandler = new Royi.PageHandler();
	Royi.pageHandler.init();
});

