<html>
<head>
<title>Tutorial theme</title>

<meta name=“viewport” content=“width=device-width” />
<meta charset="UTF-8">
<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>

<?php wp_head(); ?>

</head>
<body>
<div id="wrapper">
<div id="header">

<!--
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">About Us</a></li>
  <li><a href="#">Menu</a></li>
  <li><a href="#">Contact Us</a></li>
  <li><a href="#">(187)-555-9876</a></li>
</ul>
 -->

 <?php

 wp_nav_menu( array (
 	'theme_location' => 'primary',
 )); ?>

</div>