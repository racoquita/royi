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
		$('.dots a:nth-child('+ (currentSlide + 1) +')').addClass('active');

		$('.language').on('click', function(e) {
			$('body').removeClass().addClass($(e.currentTarget).data('lang'));
		});

		$('.intro-contact').on('click', function(e){
			scrollToSection($(this).attr('href'));
		});
		$('.dots a').on('click', function(e){
			e.preventDefault();
			if($(e.currentTarget).hasClass('active')){
				return
			}else{
				currentSlide = $(this).attr('href');
				
				changeSlide();
				$(e.currentTarget).addClass('active');
			}
		});

		$('nav').on('click', 'a.menu-item', function(e) {
			e.preventDefault();
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
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

		$('#contact input[type="submit"]').on('click', function(e) {
			e.preventDefault();
			sendForm();
		});

		changeSlide();
	}

	var sendForm = function() {
		var data = {
			name: $('input[name="name"]').val(),
			email: $('input[name="email"]').val(),
			message: $('textarea[name="message"]').val()
		}

		$.ajax({
			url: 'php/form_mailer.php',
			type: 'POST',
			data: data,
			success: function(res) {
				res = JSON.parse(res);

				if (res.success) {
					alert('Your message was sent successfully!');
					$('#contact form')[0].reset();
				} else {
					alert('Error: ' + res.message);
				}
			},
			error: function(req, status, error) {
				console.log(req.responseText);
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
			$('.dots a').removeClass('active');
			$('.dots a:nth-child('+ (currentSlide + 1) +')').addClass('active');

			setTimeout(function() {
				$('.slide').remove();
				$('.clone').addClass('slide').removeClass('clone fadeInRight fadeInLeft');

				isAnimating = false;
				
			}, 750);
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

