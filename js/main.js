/*
 * declare the royi namespace
 */
var Royi = Royi || {};
var slideCount = $('.slides .slide').length;
var currentSlide = 1;
var dir = 'next';

Royi.PageHandler = function() {

	var init = function() {
		$('nav').on('click', 'a.menu-item', function(e) {
			e.preventDefault();
			scrollToSection($(e.currentTarget).attr('href'));
		});
	}

	var scrollToSection = function(el) {
		if ($(el).offset()) {
			$('html, body').animate({
	        	scrollTop: $(el).offset().top - 70
	    	}, 500);
		}
	}

	return {
		init: init
	}
}
Royi.changeSlide = function (num) {
	dir = num > currentSlide ? 'next' : 'prev';
	currentSlide = num;

	if(dir == 'next') {
		
		$('.slide.inactive').removeClass('inactive').addClass('right');
		$('.slide.active').removeClass('active').addClass('left');
		
		setTimeout(function(){
			$('.slide.right').removeClass('right').addClass('active');
		}, 100);
		setTimeout(function(){
			$('.slide.left').removeClass('left').addClass('inactive');
		}, 500);
	}
	if(dir == 'prev') {
		
		$('.slide.inactive').removeClass('inactive').addClass('left');
		$('.slide.active').removeClass('active').addClass('right');
		
		setTimeout(function(){
			$('.slide.left').removeClass('left').addClass('active');
		}, 100);
		setTimeout(function(){
			$('.slide.right').removeClass('right').addClass('inactive');
		}, 500);
	}
}
$(document).ready(function() {
	Royi.pageHandler = new Royi.PageHandler();
	Royi.pageHandler.init();

	$('.next').click(function(e) {
		e.preventDefault();
		Royi.changeSlide(currentSlide + 1);
	});

	$('.prev').click(function(e) {
		alert('prev')
		e.preventDefault();
		Royi.changeSlide(currentSlide - 1);
	});

});

