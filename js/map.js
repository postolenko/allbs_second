if( document.getElementById("object_map") ) {

	var map;
	var marker;
	var image = "img/marker.svg";
	var styles;

	function initMap() {

		map = new google.maps.Map(document.getElementById('object_map'), {
			center: {lat: 55.882593, lng: 37.5477503},
			scrollwheel: false,
			scaleControl: false,
			zoom: 16
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.882593, lng: 37.5477503},
			map: map,
			icon: image,
			title: ''
		});

		// marker.addListener('click', toggleBounce);
		marker.addListener('click', showObject);

	}

	// function toggleBounce() {
	//   if (marker.getAnimation() !== null) {
	//     marker.setAnimation(null);
	//   } else {
	//     marker.setAnimation(google.maps.Animation.BOUNCE);
	//   }
	// }

	function showObject() {
		$(".map_card").toggleClass("visible");
		// if($(".map_card").hasClass("visible")) {
			mapObjectSlider = $(".map_card .object_slider").not(".slick-initialized").slick({
	            dots: false,
	            arrows: true,
	            autoplay: false,
	            speed: 300,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            fade: true,
	            prevArrow: '<button class="slick-prev white_left_arrow" aria-label="Previous" type="button"></button>',
	            nextArrow: '<button class="slick-next white_right_arrow" aria-label="Next" type="button"></button>'
	        });

	        mapObjectSlider.on('init', function(event, slick, currentSlide){
	            slideImgBox = $(this).find("[data-slick-index ="+currentSlide+"] .img_box");
	            imagePath = slideImgBox.attr("data-imageurl");
	            slideImgBox.find("img").attr("src", imagePath);
	            // console.log("sdsdsds");
	        });

			mapObjectSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	            slideImgBox = $(this).find("[data-slick-index ="+nextSlide+"] .img_box");
	            imagePath = slideImgBox.attr("data-imageurl");
	            slideImgBox.find("img").attr("src", imagePath);
	        });

	        // $(".map_card .object_slider").each(function() {
	            // slideImgBox = $(".map_card .object_slider").find(".slick-current .img_box");
	            // imagePath = $(".map_card .object_slider").find(".slick-current .img_box").attr("data-imageurl");
	            // slideImgBox.find("img").attr("src", imagePath);
	        // });
		// }
	}

}

$(document).ready(function() {

	$(".map_card .close_card").on('click', function(e) {
		e.preventDefault();
		$(this).closest(".map_card").removeClass("visible");
	});

	// $("#object_map").on('click', function(e) {		
	// 	// if($(".map_card").hasClass("visible")) {
	// 		// e.preventDefault();
	// 		$(".map_card").removeClass("visible");
	// 		// console.log("dsdsds");
	// 	// }
	// });

	$(document).on("mouseup", function(e) {
	    if($(".map_card").is(":visible")) {
	      e.preventDefault();
	      hide_element = $(".map_card");
	      if (!hide_element.is(e.target)
	          && hide_element.has(e.target).length === 0) {
	      		hide_element.removeClass("visible");
	          // curTop = $("body").css("top");
	          // curTop = Math.abs(parseInt(curTop, 10));
	          // $("body").attr("style", "");
	          // if (curTop !== 0) {
	          //     $("html").scrollTop(curTop);
	          // }
	          // $("body").removeClass("fixed");
	          // $(".popup_bg").fadeOut(300);
	          // $("[data-popup]").fadeOut(300);
	          // setTimeout(function() {
	          //   $(".popup_form").removeClass("hide");
	          //   $(".succes_wrapp").fadeOut(200);
	          // }, 500);
	      }
	    }
	  });

	// $(document).on("click", function() {
	// 	if(!$(this).closest(".map_card")) {
	// 		$(".map_card").removeClass("visible");
	// 	}
	// });

});