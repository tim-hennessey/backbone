var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var img = document.getElementById('img');
	var txt1 = document.getElementById('txt1');
	var txt2 = document.getElementById('txt2');
	var txt3 = document.getElementById('txt3');
	var txt4 = document.getElementById('txt4');
	// var txt = document.getElementsByClassName('headline-txt');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		t.set(footer, {y:"+=14", scale:0, transformOrigin: "30% 30%"});
		t.set(wb, {y:"+=14", opacity:0});
		t.set(star, {y:"+=14", opacity:0, transformOrigin: "50% 50%"});
		t.set(intro, {scale:1.5});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.from(txt1, .5, {y:"+=50", ease:Sine.easeOut},"+=1")
		.from(txt2, .5, {y:"+=50", ease:Sine.easeOut}, "-=.4")
		.from(txt3, .5, {y:"+=50", ease:Sine.easeOut}, "-=.4")
		.from(txt4, .5, {y:"+=50", ease:Sine.easeOut}, "-=.4");

		tl2.to(footer, .5, {scale:1.15, ease:Sine.easeInOut})
		.to(footer, .2, {scale:1, ease:Sine.easeInOut})
		.set(wb, {opacity:1})
		.set(star, {opacity:1})
		.to(footer, .5, {y:"-=14", ease:Sine.easeInOut}, "+=.25")
		.to(intro, .5, {scale:1, ease:Sine.easeInOut}, "-=.5")
		.to(wb, .5, {y:"-=14", ease:Sine.easeOut}, "-=.5")
		.to(star, .5, {y:"-=14", ease:Sine.easeOut}, "-=.5");
		
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
