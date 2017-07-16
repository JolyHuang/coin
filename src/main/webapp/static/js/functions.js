(function ($) {
	
		var slider = $('.bxslider').bxSlider({
  mode: 'horizontal'
});

$('#reload-slider').click(function(e){
  e.preventDefault();
  slider.reloadSlider({
    mode: 'fade',
    auto: true,
    pause: 1000,
    speed: 500
  });
});

        $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
		
	 wow = new WOW({}).init();
     
    $(window).load(function(){
        var get_latitude = $('#google-map').data('latitude');
        var get_longitude = $('#google-map').data('longitude');

        var myLatlng = new AMap.LngLat(get_latitude, get_longitude);

        var map = new AMap.Map("google-map",{
            resizeEnable: true,
            zoom: 20,
            center: myLatlng
        });

        var marker = new AMap.Marker({
            position: myLatlng,
            title: "ssss",
            map: map
        });
    })

})(jQuery);



