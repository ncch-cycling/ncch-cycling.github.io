$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});

	var index = 0;

		let rotatingImages = [
			"Assen_0C1A8381.jpg",
			"IMG_4957.jpg",
			"Assen_0C1A8786.jpg",
			"Mad_Cross_0C1A4409.jpg",
			"CX_Prov_0C1A5707.jpg",
			"OPC_0C1A1224.jpg",
			"CX_Prov_0C1A5769.jpg",
			"OPC_0C1A1554.jpg",
			"CX_Prov_0C1A5994.jpg",
			"Track_Youth_0119669.jpg",
			"CX_Prov_0C1A6413.jpg",
			"Track_0110191.jpg",
			"Hayman_0C1A8530.jpg",
			"Track_0110280.jpg",
			"IMG_1716.jpg",
			"Youth_Track_0111391.jpg",
			"IMG_3012.jpg",
			"Youth_Track_0111396.jpg",
			"IMG_3181.JPG",
			"Youth_Track_0111505.jpg"
		];

		function fadeToNext(){
			index = (index + 1) % rotatingImages.length;
			let nextImage = 'url(../img/rotating/'+rotatingImages[index]+')';
			console.log('next image: ' + nextImage)
			$('#slider').css({'background-image': nextImage});
			console.log("in the fade To next, index= " + index);
			waitNext();
		}
		function waitNext(){
			setTimeout(function() { fadeToNext(); },7000);
		}
		waitNext();


	function refreshImage() {
		var random = Math.floor(Math.random() * 20) + 0;
		var bigSize =
			//["url('../img/slider-bg.jpg')",
			//"url('../img/wrapper-img.png')",

			["url('../img/rotating/Assen 0C1A8381.jpg')",
				"url('../img/rotating/IMG_4957.jpg')",
				"url('../img/rotating/Assen 0C1A8786.jpg')",
				"url('../img/rotating/Mad Cross 0C1A4409.jpg')",
				"url('../img/rotating/CX Prov 0C1A5707.jpg')",
				"url('../img/rotating/OPC 0C1A1224.jpg')",
				"url('../img/rotating/CX Prov 0C1A5769.jpg')",
				"url('../img/rotating/OPC 0C1A1554.jpg')",
				"url('../img/rotating/CX Prov 0C1A5994.jpg')",
				"url('../img/rotating/Track Youth _0119669.jpg')",
				"url('../img/rotating/CX Prov 0C1A6413.jpg')",
				"url('../img/rotating/Track _0110191.jpg')",
				"url('../img/rotating/Hayman 0C1A8530.jpg')",
				"url('../img/rotating/Track _0110280.jpg')",
				"url('../img/rotating/IMG_1716.jpg')",
				"url('../img/rotating/Youth Track _0111391.jpg')",
				"url('../img/rotating/IMG_3012.jpg')",
				"url('../img/rotating/Youth Track _0111396.jpg')",
				"url('../img/rotating/IMG_3181.JPG')",
				"url('../img/rotating/Youth Track _0111505.jpg')"
			];
		$("#slider").css({"background-image": bigSize[random]});
		//document.getElementById("slider").style.backgroundImage = bigSize[random];

	}

	//rotateImage()
	//setInterval(function(){ refreshImage(); }, 5000);

	$("#clients-logo").owlCarousel({
		autoPlay: 2000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




