(function($){

	jQuery(document).ready(function($){

		var slides_arr 	= [];

		slides_arr.push({image : theme_dir+'/images/bg/bg_1.jpg', title : '' } );
		slides_arr.push({image : theme_dir+'/images/bg/bg_2.jpg', title : '' } );
		slides_arr.push({image : theme_dir+'/images/bg/bg_3.jpg', title : '' } );
		slides_arr.push({image : theme_dir+'/images/bg/bg_4.jpg', title : '' } );

		if(slides_arr.length > 0){
			$.supersized({
				image_protect		:	1,
				random				: 	0,	
				slideshow           :   1,
				autoplay			:	1,
				stop_loop			:	0,
				slide_interval      :   4000,		// Length between transitions
				transition          :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
				transition_speed	:	700,		// Speed of transition
				slide_links			:	false,
				progress_bar		:	0,
				slides  			:  	slides_arr	

			});
		}
	});

})(jQuery);