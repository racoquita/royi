/*
 * declare the royi namespace
 */
var Royi = Royi || {};

Royi.PageHandler = function() {

	var slideCount = slides.length - 1;
	var currentSlide = 0;
	var dir = 'right';
	var isAnimating = false;

	var init = function() {
		$('nav').on('click', 'a.menu-item', function(e) {
			e.preventDefault();
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
		var items = '';
		var anim = dir == 'prev' ? 'fadeInRight' : 'fadeInLeft';

		$.each(slide.items, function(i, item) {
			items += '<li>' + item + '</li>';
		});

		var clone = $(
			'<div class="clone animate '+ anim +'"> \
				<h3>'+ slide.title +'</h3> \
				<ul>' + items + '</ul> \
			</div>'
		);

		callback(clone);
	}

	var iconHandler = function() {
		console.log('handle icon');
	}

	return {
		init: init
	}
}

$(document).ready(function() {
	Royi.pageHandler = new Royi.PageHandler();
	Royi.pageHandler.init();
});

