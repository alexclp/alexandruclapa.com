var BeerStat = {
	init: function() {
		this.initPortfolio();
	},

	initPortfolio: function() {
		$('.work .gallery .photos').nivoSlider({
			effect      : 'fade',
			directionNav: false
		});
	}
};

$(document).ready(function() {
	BeerStat.init();
});