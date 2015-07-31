/*
 * declare the royi namespace
 */
var Royi = Royi || {};

Royi.PageHandler = function() {

	var init = function() {
		$('nav').on('click', 'a.menu-item', function(e) {
			e.preventDefault();
			scrollToSection($(e.currentTarget).attr('href'));
		});
	}

	var scrollToSection = function(el) {
		$('html, body').animate({
        	scrollTop: $(el).offset().top
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

