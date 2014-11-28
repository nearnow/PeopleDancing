	(function($){

	jQuery(document).ready(function($){


		var has_allowed_camera = false;
		var player;
		var session_seconds = 0;
		var prev_seconds = 0;
		// load the users webcam	

		function getUserCam(){
			var v = document.getElementById('user_video');
			navigator.getUserMedia = (navigator.getUserMedia || 
			                         navigator.webkitGetUserMedia || 
			                         navigator.mozGetUserMedia || 
			                         navigator.msGetUserMedia);
			if (navigator.getUserMedia) {
			  // Request access to video only
			  navigator.getUserMedia(
			     {
			        video:true,
			        audio:false
			     },        
			     function(stream) {
			        var url = window.URL || window.webkitURL;
			        v.src = url ? url.createObjectURL(stream) : stream;
			        v.play();
			     },
			     function(error) {
			        //alert('Something went wrong. (error code ' + error.code + ')');
			        return;
			     }
			  );
			}
			else {
			  alert('Sorry, the browser you are using doesn\'t support getUserMedia');
			  return;
			}
			v.addEventListener('canplay', function(e) { 

			   if(!has_allowed_camera && curvideo > 0){
				   	$('.remember').animate(
						{'opacity': '0.0'},
						{duration: 600, 
						easing: 'easeOutCirc'}
					);
					player.api('play');

			   }
			   $('.user-video-info span').text("Connected");
			   $('.user-video-info span').removeClass("red")

			   $('.webcam_not_connected').animate(
						{'opacity': '0.0'},
						{duration: 600, 
						easing: 'easeOutCirc'}
					);

			   has_allowed_camera = true;

			}, false);

		}
		getUserCam();

		// manage the vimeo videos
		var dance_vimeo_url = $('.data-video-id').attr("data-video-id");
		var video_ids  		= Array();

		// the h&S video
		var hs_vid_id = $('.performance').attr("data-vid-hs");
		var wu_vid_id = $('.performance').attr("data-vid-wu");
		var wd_vid_id = $('.performance').attr("data-vid-wd");

		if(dance_vimeo_url != undefined && dance_vimeo_url.trim()){
			video_ids  		= Array(hs_vid_id, wu_vid_id, dance_vimeo_url, wd_vid_id);			
		}
		var video_labels  	= Array('A little Safety notice','The Warm up!','The Dance','The Warm Down!');
		var curvideo = 0;

	    var iframe = $('#vimeo_video')[0];
	    player = $f(iframe);
	    var status = $('.video_status');

    	// When the player is ready, add listeners for pause, finish, and playProgress
	    player.addEvent('ready', function(e) {
	        
	        if(curvideo == 0) player.api('play');
	        if(!has_allowed_camera && curvideo > 0){


        	$('.remember').animate(
					{'opacity': '1.0'},
					{duration: 600, 
					easing: 'easeOutCirc'}
				);
			        	
	        } else {
	        	player.api('play');
	        }
	        
	        player.addEvent('pause', onPause);
	        player.addEvent('finish', onFinish);
	        player.addEvent('playProgress', onPlayProgress);

	        // display the surrent section to the users
	        $('.sec').each(function(i){
	        	
	        	if(i<= curvideo){
	        		$(this).removeClass('circ');
	        		$(this).addClass('circ-out')
	        	}
	        })

	    });

	   
	    function onPause(id) {
	    }

	    function onFinish(id) {
	        curvideo++;
	        if(curvideo >=video_ids.length) curvideo = 0;

	        var vurl = getVimeoPlayerUrl(video_ids[curvideo]);

	        $('#vimeo_video').attr("src",vurl);
	        $('.info .title').text(video_labels[curvideo]);

	        prev_seconds += session_seconds;

	    }
	    

	    function onPlayProgress(data, id) {
	    	
	    	var pct = (data.seconds/data.duration)*100;
	    	$('.curtime').css({'width':pct+"%"})

	        $('.info .time').text(Math.floor(data.seconds) + 's'+' | '+Math.floor(data.duration)+'s');

	        session_seconds = data.seconds;
	        $('.user_duration span').text(" "+Math.floor(prev_seconds+session_seconds)+".0");
	    }
	    function getVimeoPlayerUrl(videoid){
	    	return '//player.vimeo.com/video/'+videoid+'?title=0&amp;byline=0&amp;portrait=0&amp;player_id=vimeo_video';
	    }
		

	});

})(jQuery);