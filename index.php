<?php get_header(); ?>
<div id="main">

<div id="content">


<div id="logo">

<a href="default.asp" class="logo"> <img src="wp-content/themes/custom/images/logo.png" alt="logo" width="200" height="225"> </a>

</div>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<h1><?php the_title(); ?></h1>

<h4><?php the_time('F jS, Y') ?></h4>

<p><?php the_content(__('(more...)')); ?></p>

<?php endwhile; else: ?>

<p><?php _e('Sorry, no posts matched your criteria.'); ?></p><?php endif; ?>

</div>



<div id="sidebar-right">

<?php get_sidebar('right'); ?>

</div>

<div id="sidebar-middle">

<?php get_sidebar('middle'); ?>

</div>

<div id="sidebar-left">

<?php get_sidebar('left'); ?>

</div>


</div>


<div id="delimiter">

</div>

<?php get_footer(); ?>