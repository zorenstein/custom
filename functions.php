<?php
/**
 * Register our sidebars and widgetized areas.
 *
 */
function arphabet_widgets_init() {

	register_sidebar( array(
		'name'          => 'Home right sidebar',
		'id'            => 'home_right_1',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
	) );

}
add_action( 'widgets_init', 'arphabet_widgets_init' );

add_action('init', 'arphabet_register_nav_locations');

function arphabet_register_nav_locations()
{
	register_nav_menu( 'primary', __( 'Primary Menu', 'theme-slug' ) );
}

add_action('wp_enqueue_scripts', 'arphabet_enqueue_styles');
function arphabet_enqueue_styles()
{
  wp_dequeue_style('site');
  wp_deregister_style('site');

  wp_enqueue_style('styles', get_template_directory_uri() . '/assets/css/main.css');
}

