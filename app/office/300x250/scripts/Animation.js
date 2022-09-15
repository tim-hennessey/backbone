var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var footer = document.getElementById('footer');
	var intro = document.getElementById('intro');
	var wb = document.getElementById('wb');
	var txt1 = document.getElementById('txt1');
	var txt2 = document.getElementById('txt2');
	
	var img1a = document.getElementById('img1a');
	var img1b = document.getElementById('img1b');
	var img2a = document.getElementById('img2a');
	var img2b = document.getElementById('img2b');
	// var txt = document.getElementsByClassName('headline-txt');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();
	var tl3 = new TimelineMax();
	var tl4 = new TimelineMax();
	var tl5 = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(footer, {y:"+=14"});
		t.set(wb, {y:"+=14"});
		t.set(star, {y:"+=14", transformOrigin: "50% 50%"});
		t.set(intro, {scale:1.5});

		t.set([img1a, img1b, img2a, img2b], {perspective:800, transformStyle:"preserve-3d", transformOrigin: "50% 0%", rotationX: -180, backfaceVisibility: "hidden"});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.from(txt1, .5, {y:"+=60", ease:Sine.easeOut}, "+=2.25")
		.from(txt2, .5, {y:"+=60", ease:Sine.easeOut}, "-=.4");

		tl2.to(footer, .5, {y:"-=14", ease:Sine.easeInOut}, "+=2.75")
		.to(intro, .5, {scale:1, ease:Sine.easeInOut}, "-=.5")
		.to(wb, .5, {y:"-=14", ease:Sine.easeOut}, "-=.5")
		.to(star, .5, {y:"-=14", ease:Sine.easeOut}, "-=.5");

		tl3.to(img1a, .75, {rotationX:"0", ease:Sine.easeOut})
		.to(img1b, 1.5, {rotationX:"0", ease:Back.easeOut}, "-=.3");

		tl4.to(img2a, .75, {rotationX:"0", ease:Sine.easeOut}, "+=.25")
		.to(img2b, 1.5, {rotationX:"0", ease:Back.easeOut}, "-=.3");

		tl5.to(img1a, .75, {x:"+=300", ease:Sine.easeIn}, "+=2")
		.to(img1b, .75, {x:"+=300", ease:Sine.easeIn}, "-=.75")
		.to(img2a, .75, {x:"+=300", ease:Sine.easeIn}, "-=.75")
		.to(img2b, .75, {x:"+=300", ease:Sine.easeIn}, "-=.75");
		
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
