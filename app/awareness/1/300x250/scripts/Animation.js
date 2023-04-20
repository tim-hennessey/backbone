var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var img = document.getElementById('img');
	var txt1 = document.getElementById('txt1');
	var txt2 = document.getElementById('txt2');
	var txt = document.getElementsByClassName('headline-txt');
	var business = document.getElementById('business');
	var walmart = document.getElementsByClassName('walmart');
	var com = document.getElementById('com');
	var address = document.getElementById('address');
	var curlComp = document.getElementById('curl-comp');
	var cta = document.getElementById('cta');
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

		tl1.from(business, .5, {y:"+=20", ease:Expo.easeOut}, "+=.25")
		.from(walmart, .5, {y:"-=20", ease:Expo.easeOut}, "-=.25")
		.from(com, .5, {y:"+=20", ease:Expo.easeOut}, "-=.25")

		.to(address, .5, {autoAlpha:0, ease:Expo.easeIn}, "+=2.25")

		.to(footer, .3, {scale:1.1, ease:Sine.easeInOut}, "+=.25")
		.to(footer, .2, {scale:1, ease:Sine.easeInOut})
		.set(wb, {opacity:1})
		.set(star, {opacity:1})
		.to(footer, .5, {y:"-=14", ease:Sine.easeInOut}, "+=.25")
		.to(intro, .5, {scale:1, ease:Sine.easeInOut}, "-=.5")
		.to(wb, .5, {y:"-=14", ease:Sine.easeOut}, "-=.5")
		.to(star, .5, {y:"-=14", ease:Sine.easeOut}, "-=.5")

		.from(cta, .5, {autoAlpha:0, ease:Sine.easeOut});

		tl2.from(curlComp, 1.75, {x:"-=400", scale:10, ease:Expo.easeOut, delay:1})
		// .from(curlComp, 1.75, {x:"-=400", scale:10, ease:Expo.easeOut, delay:3.25})
		.from(txt1, .5, {y:"+=50", ease:Sine.easeOut}, "-=.75")
		.from(txt2, .5, {y:"+=50", ease:Sine.easeOut}, "+=.5");

		
		
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
