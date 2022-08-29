var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var img = document.getElementById('img');
	var txt = document.getElementsByClassName('headline-txt');
	var t = TweenMax;
	var tl = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(img, .75, {x:300, ease:Sine.easeIn}, "+=1")
		.from(txt, 1, {y:"+=50", ease:Sine.easeOut}, "-=.5");
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
