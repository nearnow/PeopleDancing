<?php

/*
Template Name: Dance
*/

get_header(); ?>



<div class="home-header-container clearfix">

	<div class="container_12">

		<?php

			$hs = get_field('hands_vimeo_url','option');
			$hs_parts = explode('/',$hs);
			$hs_id = $hs_parts[count($hs_parts)-1];

			$wu = get_field('the_warm_up_video_url_on_vimeo','option');
			$wu_parts = explode('/',$wu);
			$wu_id = $wu_parts[count($wu_parts)-1];

			$wd = get_field('the_warm_down_video_url_on_vimeo','option');
			$wd_parts = explode('/',$wd);
			$wd_id = $wd_parts[count($wd_parts)-1];
		?>

		<div class="performance" data-vid-hs="<?php echo $hs_id; ?>" data-vid-wu="<?php echo $wu_id; ?>" data-vid-wd="<?php echo $wd_id; ?>">



			<div class="grid_12">
				<div class="per-title"><h1><?php the_title(); ?></h1></div>
			</div>

			<div class="remember">
				<div>Remember to let our app access your webcam</div> 
			</div>

			<div class="videos">
				<div class="grid_6">
					<video id="user_video"></video>
					<div class="info">						
						<div>Your video feed. <span class="red">Not Connected</span></div>						
					</div>
					<div class="webcam_not_connected">Your web camera isn't connected.<br />Click allow it on the tool bar above to connect it.</div>
				</div>
				<?php

					$url 	= get_field('vimeo_url');
					$parts 	= explode('/',$url);
					$vimeo_id = $parts[count($parts)-1];

				?>
				<div class="grid_6 data-video-id" data-video-id="<?php echo $vimeo_id; ?>" >	

					<iframe id="vimeo_video" src="//player.vimeo.com/video/<?php echo $hs_id; ?>?title=0&amp;byline=0&amp;portrait=0&amp;player_id=vimeo_video" width="480" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
					
					<div class="progress">
						<div class="curtime"></div>
					</div>
					<div class="info">
						
						<div class="title">A little Safety notice</div>
						<div class="time"></div>
					</div>
				</div>
				<?php /*<div class="camera_warning">Hi John, We can't access your webcam. Click here to load it so you can see yourself.</div>*/ ?>
			</div>
			<div class="grid_12 progress-info">
				<div class="video_status"></div>
			</div>
			<div class="grid_12 progress-info">
				<div class="t">Your progress in this session:</div>
				<div class="container">
					<div class="sec circ-out" title="Safety video"></div>
					<div class="line"></div>
					<div class="sec circ" title="Warm up video"></div>
					<div class="line"></div>
					<div class="sec circ" title="Performance"></div>
					<div class="line"></div>
					<div class="sec circ" title="Warm down"></div>					
				</div>
			</div>

			<div class="grid_12 perf-info">

				<div>Duration:<span>34.00</span></div>
				<div class="user_duration">Your time:<span>0.0</span></div>

			</div>

			<div class="grid_12 perf-info">
				<div>Ability: <span><?php echo ucfirst(get_field('mobility')); ?></span></div>
			</div>

		</div>

	</div>
</div>

<?php get_footer(); ?>