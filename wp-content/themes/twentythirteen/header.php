<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>

	<style type="text/css">html,body{height:100%;overflow:hidden;border:0;margin:0;padding:0;}</style>

</head>

<body <?php body_class(); ?>>
	<div id="page" class="hfeed site">
		
		<header id="masthead" class="site-header" role="banner">
			<div class="container_12">
				<div class="grid_9">
					<a class="home-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
						<h1 class="site-title">A DANCE A DAY</h1>
					</a>
				</div>
				<div class="grid_3">
					<ul class="fSocial">
						<li><a class="ss-icon ss-social-regular ss-facebook" href="https://www.facebook.com/#" target="_blank">&nbsp;</a></li>
						<li><a class="ss-icon ss-social-regular ss-googleplus" href="https://plus.google.com/#" target="_blank">&nbsp;</a></li>
						<li><a class="ss-icon ss-social-regular ss-twitter" href="https://twitter.com/#" target="_blank">&nbsp;</a></li>
						<li><a class="ss-icon ss-social-regular ss-youtube" href="https://www.youtube.com/#" target="_blank">&nbsp;</a></li>
						<li><a class="ss-icon ss-social-regular ss-pinterest" href="https://www.pinterest.com/#" target="_blank">&nbsp;</a></li>
						<li><a class="ss-icon ss-social-regular ss-linkedin" href="http://www.linkedin.com/#" target="_blank">&nbsp;</a></li>
				
					</ul>
					<div class="user-welcome">Welcome John</div>
				</div>

			</div>


			<div id="navbar" class="navbar">
				<div class="container_12">
					<div class="grid_8">
						<nav id="site-navigation" class="navigation main-navigation" role="navigation">

							<a class="screen-reader-text skip-link" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentythirteen' ); ?>"><?php _e( 'Skip to content', 'twentythirteen' ); ?></a>
							<?php wp_nav_menu( array( 'menu' => 'Header menu' ) ); ?>
							<?php //get_search_form(); ?>
						</nav><!-- #site-navigation -->
					</div>
					<div class="grid_4">
						<nav id="site-navigation" class="navigation main-navigation" role="navigation">
							<?php //wp_nav_menu( array( 'menu' => 'Main right' ) ); ?>
						</nav>
					</div>
					
				</div>
			</div><!-- #navbar -->
		</header><!-- #masthead -->
			

		<div id="main" class="site-main">
