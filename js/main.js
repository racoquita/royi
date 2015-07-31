/*
 * declare the royi namespace
 */
var Royi = Royi || {};

Royi.PageHandler = function() {

	var init = function() {
		console.log('init pageHandler');
	}

	return {
		init: init
	}
}

$(document).ready(function() {
	Royi.pageHandler = new Royi.PageHandler();
	Royi.pageHandler.init();
});

