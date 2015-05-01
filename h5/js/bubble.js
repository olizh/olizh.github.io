/* ------------------------------------------
PURE CSS SPEECH BUBBLES
by Nicolas Gallagher
- http://nicolasgallagher.com/pure-css-speech-bubbles/

http://nicolasgallagher.com
http://twitter.com/necolas

Created: 02 March 2010
Version: 1.2 (03 March 2011)

Dual licensed under MIT and GNU GPLv2 � Nicolas Gallagher 
------------------------------------------ */

/* NOTE: Some declarations use longhand notation so that it can be clearly
explained what specific properties or values do and what their relationship
is to other properties or values in creating the effect */

/* ============================================================================================================================
== GENERAL STYLES
** ============================================================================================================================ */

body {
    padding:0; 
    margin:0; 
    font:1em/1.4 Cambria, Georgia, sans-serif; 
    color:#333; 
    background:#fff;
}

a:link,
a:visited {
    border-bottom:1px solid #c55500; 
    text-decoration:none;
    color:#c55500; 
}

a:visited {
    border-bottom:1px solid #730800; 
    color:#730800;
}

a:hover,
a:focus,
a:active {
    border:0; 
    color:#fff; 
    background:#c55500;
}

a:visited:hover,
a:visited:focus,
a:visited:active {
    color:#fff; 
    background:#730800;
}

#container {
    width:500px; 
    padding:0 0 50px; 
    margin:0 auto;
}

h1 {
    margin:1em 0 0; 
    font-size:2.5em; 
    font-weight:normal; 
    line-height:1.2; 
    text-align:center;
}

h2 {
    margin:0.5em 0 1.5em; 
    font-size:1.25em; 
    font-weight:normal; 
    font-style:italic; 
    text-align:center;
}

p {
    margin:1em 0;
}

.content h2 {
    margin:2em 0 0.75em; 
    font-size:2em; 
    font-weight:bold; 
    font-style:normal; 
    text-align:left;
}

blockquote {
    margin:1em 0;
}

blockquote p {
    margin:0; 
    font-size:2em;
}

.follow {
    clear:both; 
    margin-top:2em; 
    font-size:1.125em;
}

.follow span {
    font-weight:bold;
}


/* 
 Should you want to set a background colour on a containing element
 certain types of bubble effect may require you to include these 
 style declarations.
 */
.content {
    position:relative;
    z-index:1;
}


/* ============================================================================================================================
== BUBBLE WITH AN ISOCELES TRIANGLE
** ============================================================================================================================ */

/* THE SPEECH BUBBLE
------------------------------------------------------------------------------------------------------------------------------- */

.triangle-isosceles {
	position:relative;
	padding:15px;
	margin:1em 0 3em;
	color:#000;
	background:#f3961c; /* default background for browsers without gradient support */
	/* css3 */
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#f9d835), to(#f3961c));
	background:-moz-linear-gradient(#f9d835, #f3961c);
	background:-o-linear-gradient(#f9d835, #f3961c);
	background:linear-gradient(#f9d835, #f3961c);
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

/* Variant : for top positioned triangle
------------------------------------------ */

.triangle-isosceles.top {
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#f3961c), to(#f9d835));
	background:-moz-linear-gradient(#f3961c, #f9d835);
	background:-o-linear-gradient(#f3961c, #f9d835);
	background:linear-gradient(#f3961c, #f9d835);
}

/* Variant : for left/right positioned triangle
------------------------------------------ */

.triangle-isosceles.left {
	margin-left:50px;
	background:#f3961c;
}

/* Variant : for right positioned triangle
------------------------------------------ */

.triangle-isosceles.right {
	margin-right:50px;
	background:#f3961c;
}

/* THE TRIANGLE
------------------------------------------------------------------------------------------------------------------------------- */

/* creates triangle */
.triangle-isosceles:after {
	content:"";
	position:absolute;
	bottom:-15px; /* value = - border-top-width - border-bottom-width */
	left:50px; /* controls horizontal position */
	border-width:15px 15px 0; /* vary these values to change the angle of the vertex */
	border-style:solid;
	border-color:#f3961c transparent;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

/* Variant : top
------------------------------------------ */

.triangle-isosceles.top:after {
	top:-15px; /* value = - border-top-width - border-bottom-width */
	right:50px; /* controls horizontal position */
	bottom:auto;
	left:auto;
	border-width:0 15px 15px; /* vary these values to change the angle of the vertex */
	border-color:#f3961c transparent;
}

/* Variant : left
------------------------------------------ */

.triangle-isosceles.left:after {
	top:16px; /* controls vertical position */
	left:-50px; /* value = - border-left-width - border-right-width */
	bottom:auto;
	border-width:10px 50px 10px 0;
	border-color:transparent #f3961c;
}

/* Variant : right
------------------------------------------ */

.triangle-isosceles.right:after {
	top:16px; /* controls vertical position */
	right:-50px; /* value = - border-left-width - border-right-width */
	bottom:auto;
    left:auto;
	border-width:10px 0 10px 50px;
	border-color:transparent #f3961c;
}


/* ============================================================================================================================
== BUBBLE WITH A RIGHT-ANGLED TRIANGLE
** ============================================================================================================================ */

/* THE SPEECH BUBBLE
------------------------------------------------------------------------------------------------------------------------------- */

.triangle-right {
	position:relative;
	padding:15px;
	margin:1em 0 3em;
	color:#fff;
	background:#075698; /* default background for browsers without gradient support */
	/* css3 */
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#2e88c4), to(#075698));
	background:-moz-linear-gradient(#2e88c4, #075698);
	background:-o-linear-gradient(#2e88c4, #075698);
	background:linear-gradient(#2e88c4, #075698);
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

/* Variant : for top positioned triangle
------------------------------------------ */

.triangle-right.top {
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#075698), to(#2e88c4));
	background:-moz-linear-gradient(#075698, #2e88c4);
	background:-o-linear-gradient(#075698, #2e88c4);
	background:linear-gradient(#075698, #2e88c4);
}

/* Variant : for left positioned triangle
------------------------------------------ */

.triangle-right.left {
	margin-left:40px;
	background:#075698;
}

/* Variant : for right positioned triangle
------------------------------------------ */

.triangle-right.right {
	margin-right:40px;
	background:#075698;
}

/* THE TRIANGLE
------------------------------------------------------------------------------------------------------------------------------- */

.triangle-right:after {
	content:"";
	position:absolute;
	bottom:-20px; /* value = - border-top-width - border-bottom-width */
	left:50px; /* controls horizontal position */
	border-width:20px 0 0 20px; /* vary these values to change the angle of the vertex */
	border-style:solid;
	border-color:#075698 transparent; 
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

/* Variant : top
------------------------------------------ */

.triangle-right.top:after {
	top:-20px; /* value = - border-top-width - border-bottom-width */
	right:50px; /* controls horizontal position */
	bottom:auto;
	left:auto;
	border-width:20px 20px 0 0; /* vary these values to change the angle of the vertex */
	border-color:transparent #075698; 
}

/* Variant : left
------------------------------------------ */

.triangle-right.left:after {
	top:16px; 
	left:-40px; /* value = - border-left-width - border-right-width */
	bottom:auto;
	border-width:15px 40px 0 0; /* vary these values to change the angle of the vertex */
	border-color:transparent #075698; 
}

/* Variant : right
------------------------------------------ */

.triangle-right.right:after {
	top:16px; 
	right:-40px; /* value = - border-left-width - border-right-width */
	bottom:auto;
    left:auto;
	border-width:15px 0 0 40px; /* vary these values to change the angle of the vertex */
	border-color:transparent #075698 ; 
}


/* ============================================================================================================================
== BUBBLE WITH AN OBTUSE TRIANGLE
** ============================================================================================================================ */

/* THE SPEECH BUBBLE
------------------------------------------------------------------------------------------------------------------------------- */

.triangle-obtuse {
	position:relative;
	padding:15px;
	margin:1em 0 3em;
	color:#fff;
	background:#c81e2b;
	/* css3 */
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#f04349), to(#c81e2b));
	background:-moz-linear-gradient(#f04349, #c81e2b);
	background:-o-linear-gradient(#f04349, #c81e2b);
	background:linear-gradient(#f04349, #c81e2b);
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

/* Variant : for top positioned triangle
------------------------------------------ */

.triangle-obtuse.top {
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#c81e2b), to(#f04349));
	background:-moz-linear-gradient(#c81e2b, #f04349);
	background:-o-linear-gradient(#c81e2b, #f04349);
	background:linear-gradient(#c81e2b, #f04349);
}

/* Variant : for left positioned triangle
------------------------------------------ */

.triangle-obtuse.left {
	margin-left:50px;
	background:#c81e2b;
}

/* Variant : for right positioned triangle
------------------------------------------ */

.triangle-obtuse.right {
	margin-right:50px;
	background:#c81e2b;
}

/* THE TRIANGLE
------------------------------------------------------------------------------------------------------------------------------- */

/* creates the wider right-angled triangle */
.triangle-obtuse:before {
	content:"";
	position:absolute;
	bottom:-20px; /* value = - border-top-width - border-bottom-width */
	left:60px; /* controls horizontal position */
	border:0;
	border-right-width:30px; /* vary this value to change the angle of the vertex */
	border-bottom-width:20px; /* vary this value to change the height of the triangle. must be equal to the corresponding value in :after */
	border-style:solid;
	border-color:transparent #c81e2b;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

/* creates the narrower right-angled triangle */
.triangle-obtuse:after {
	content:"";
	position:absolute;
	bottom:-20px; /* value = - border-top-width - border-bottom-width */
	left:80px; /* value = (:before's left) + (:before's border-right/left-width)  - (:after's border-right/left-width) */
	border:0;
	border-right-width:10px; /* vary this value to change the angle of the vertex */
	border-bottom-width:20px; /* vary this value to change the height of the triangle. must be equal to the corresponding value in :before */
	border-style:solid;
	border-color:transparent #fff;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

/* Variant : top
------------------------------------------ */

.triangle-obtuse.top:before {
	top:-20px; /* value = - border-top-width - border-bottom-width */
	bottom:auto;
	left:auto;
	right:60px; /* controls horizontal position */
	border:0;
	border-left-width:30px; /* vary this value to change the width of the triangle */
	border-top-width:20px; /* vary this value to change the height of the triangle. must be equal to the corresponding value in :after */
	border-color:transparent #c81e2b;
}

.triangle-obtuse.top:after {
	top:-20px; /* value = - border-top-width - border-bottom-width */
	bottom:auto;
	left:auto;
	right:80px; /* value = (:before's right) + (:before's border-right/left-width)  - (:after's border-right/left-width) */
	border-width:0;
	border-left-width:10px; /* vary this value to change the width of the triangle */
	border-top-width:20px; /* vary this value to change the height of the triangle. must be equal to the corresponding value in :before */
	border-color:transparent #fff;
}

/* Variant : left
------------------------------------------ */

.triangle-obtuse.left:before {
	top:15px; /* controls vertical position */
	bottom:auto;
	left:-50px; /* value = - border-left-width - border-right-width */
	border:0;
	border-bottom-width:30px; /* vary this value to change the height of the triangle */
	border-left-width:50px; /* vary this value to change the width of the triangle. must be equal to the corresponding value in :after */
	border-color:#c81e2b transparent;
}

.triangle-obtuse.left:after {
	top:35px; /* value = (:before's top) + (:before's border-top/bottom-width)  - (:after's border-top/bottom-width) */
	bottom:auto;
	left:-50px; /* value = - border-left-width - border-right-width */
	border:0;
	border-bottom-width:10px; /* vary this value to change the height of the triangle */
	border-left-width:50px; /* vary this value to change the width of the triangle. must be equal to the corresponding value in :before */
	border-color:#fff transparent;
}

/* Variant : right
------------------------------------------ */

.triangle-obtuse.right:before {
	top:15px; /* controls vertical position */
	bottom:auto;
    left:auto;
	right:-50px; /* value = - border-left-width - border-right-width */
	border:0;
	border-bottom-width:30px; /* vary this value to change the height of the triangle */
	border-right-width:50px; /* vary this value to change the width of the triangle. must be equal to the corresponding value in :after */
	border-color:#c81e2b transparent;
}

.triangle-obtuse.right:after {
	top:35px; /* value = (:before's top) + (:before's border-top/bottom-width)  - (:after's border-top/bottom-width) */
	bottom:auto;
	right:-50px; /* value = - border-left-width - border-right-width */
    left:auto;
	border:0;
	border-bottom-width:10px; /* vary this value to change the height of the triangle */
	border-right-width:50px; /* vary this value to change the width of the triangle. must be equal to the corresponding value in :before */
	border-color:#fff transparent;
}


/* ============================================================================================================================
== BUBBLE WITH A BORDER AND TRIANGLE
** ============================================================================================================================ */

/* THE SPEECH BUBBLE
------------------------------------------------------------------------------------------------------------------------------- */

.triangle-border {
	position:relative;
	padding:15px;
	margin:1em 0 3em;
	border:5px solid #5a8f00;
	color:#333;
	background:#fff;
	/* css3 */
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

/* Variant : for left positioned triangle
------------------------------------------ */

.triangle-border.left {
	margin-left:30px;
}

/* Variant : for right positioned triangle
------------------------------------------ */

.triangle-border.right {
	margin-right:30px;
}

/* THE TRIANGLE
------------------------------------------------------------------------------------------------------------------------------- */

.triangle-border:before {
	content:"";
	position:absolute;
	bottom:-20px; /* value = - border-top-width - border-bottom-width */
	left:40px; /* controls horizontal position */
    border-width:20px 20px 0;
	border-style:solid;
    border-color:#5a8f00 transparent;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

/* creates the smaller  triangle */
.triangle-border:after {
	content:"";
	position:absolute;
	bottom:-13px; /* value = - border-top-width - border-bottom-width */
	left:47px; /* value = (:before left) + (:before border-left) - (:after border-left) */
	border-width:13px 13px 0;
	border-style:solid;
	border-color:#fff transparent;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

/* Variant : top
------------------------------------------ */

/* creates the larger triangle */
.triangle-border.top:before {
	top:-20px; /* value = - border-top-width - border-bottom-width */
	bottom:auto;
	left:auto;
	right:40px; /* controls horizontal position */
    border-width:0 20px 20px;
}

/* creates the smaller  triangle */
.triangle-border.top:after {
	top:-13px; /* value = - border-top-width - border-bottom-width */
	bottom:auto;
	left:auto;
	right:47px; /* value = (:before right) + (:before border-right) - (:after border-right) */
    border-width:0 13px 13px;
}

/* Variant : left
------------------------------------------ */

/* creates the larger triangle */
.triangle-border.left:before {
	top:10px; /* controls vertical position */
	bottom:auto;
	left:-30px; /* value = - border-left-width - border-right-width */
	border-width:15px 30px 15px 0;
	border-color:transparent #5a8f00;
}

/* creates the smaller  triangle */
.triangle-border.left:after {
	top:16px; /* value = (:before top) + (:before border-top) - (:after border-top) */
	bottom:auto;
	left:-21px; /* value = - border-left-width - border-right-width */
	border-width:9px 21px 9px 0;
	border-color:transparent #fff;
}

/* Variant : right
------------------------------------------ */

/* creates the larger triangle */
.triangle-border.right:before {
	top:10px; /* controls vertical position */
	bottom:auto;
    left:auto;
	right:-30px; /* value = - border-left-width - border-right-width */
	border-width:15px 0 15px 30px;
	border-color:transparent #5a8f00;
}

/* creates the smaller  triangle */
.triangle-border.right:after {
	top:16px; /* value = (:before top) + (:before border-top) - (:after border-top) */
	bottom:auto;
    left:auto;
	right:-21px; /* value = - border-left-width - border-right-width */
	border-width:9px 0 9px 21px;
	border-color:transparent #fff;
}


/* ============================================================================================================================
== SPEECH BUBBLE ICON
** ============================================================================================================================ */

.example-commentheading {
	position:relative;
	padding:0;
	color:#b513af;
}

/* creates the rectangle */
.example-commentheading:before {
	content:"";
	position:absolute;
	top:9px;
	left:-25px;
	width:15px;
	height:10px;
	background:#b513af;
	/* css3 */
	-webkit-border-radius:3px;
	-moz-border-radius:3px;
	border-radius:3px;
}

/* creates the triangle */
.example-commentheading:after {
	content:"";
	position:absolute;
	top:15px;
	left:-19px;
	border:4px solid transparent;
	border-left-color:#b513af;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}


/* ============================================================================================================================
== BLOCKQUOTE WITH RIGHT-ANGLED TRIANGLE
** ============================================================================================================================ */

.example-right {
	position:relative;
	padding:15px 30px;
	margin:0;
	color:#fff;
	background:#5a8f00; /* default background for browsers without gradient support */
	/* css3 */
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#b8db29), to(#5a8f00));
	background:-moz-linear-gradient(#b8db29, #5a8f00);
	background:-o-linear-gradient(#b8db29, #5a8f00);
	background:linear-gradient(#b8db29, #5a8f00);
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

/* display of quote author (alternatively use a class on the element following the blockquote) */
.example-right + p {margin:15px 0 2em 85px; font-style:italic;}

/* creates the triangle */
.example-right:after {
	content:"";
	position:absolute;
	bottom:-50px;
	left:50px;
	border-width:0 20px 50px 0px;
	border-style:solid;
	border-color:transparent #5a8f00;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}


/* ============================================================================================================================
== BLOCKQUOTE WITH OBTUSE TRIANGLE
** ============================================================================================================================ */

.example-obtuse {
	position:relative;
	padding:15px 30px;
	margin:0;
	color:#000;
	background:#f3961c; /* default background for browsers without gradient support */
	/* css3 */
    background:-webkit-gradient(linear, 0 0, 0 100%, from(#f9d835), to(#f3961c));
	background:-moz-linear-gradient(#f9d835, #f3961c);
	background:-o-linear-gradient(#f9d835, #f3961c);
	background:linear-gradient(#f9d835, #f3961c);
	/* Using longhand to avoid inconsistencies between Safari 4 and Chrome 4 */
	-webkit-border-top-left-radius:25px 50px;
	-webkit-border-top-right-radius:25px 50px;
	-webkit-border-bottom-right-radius:25px 50px;
	-webkit-border-bottom-left-radius:25px 50px;
	-moz-border-radius:25px / 50px;
	border-radius:25px / 50px;
}

/* display of quote author (alternatively use a class on the element following the blockquote) */
.example-obtuse + p {margin:10px 150px 2em 0; text-align:right; font-style:italic;}

/* creates the larger triangle */
.example-obtuse:before {
	content:"";
	position:absolute;
	bottom:-30px;
	right:80px;
	border-width:0 0 30px 50px;
	border-style:solid;
	border-color:transparent #f3961c;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

/* creates the smaller triangle */
.example-obtuse:after {
	content:"";
	position:absolute;
	bottom:-30px;
	right:110px; 
	border-width:0 0 30px 20px;
	border-style:solid;
	border-color:transparent #fff;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}


/* ============================================================================================================================
== TWITTER
** ============================================================================================================================ */

.example-twitter {
	position:relative;
	padding:15px;
	margin:100px 0 0.5em;
	color:#333;
	background:#eee;
	/* css3 */
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

.example-twitter p {font-size:28px; line-height:1.25em;}

/* this isn't necessary, just saves me having to edit the HTML of the demo */
.example-twitter:before {
	content:url(twitter-logo.gif);
	position:absolute;
	top:-60px;
	left:0;
	width:155px;
	height:36px;
    /* reduce the damage in FF3.0 */
    display:block; 
}

/* creates the triangle */
.example-twitter:after {
	content:"";
	position:absolute;
	top:-30px;
	left:50px;
	border:15px solid transparent;
	border-bottom-color:#eee;
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

/* display of quote author (alternatively use a class on the element following the blockquote) */
.example-twitter + p {padding-left:15px; font:14px Arial, sans-serif;}


/* ============================================================================================================================
== NUMBER
** ============================================================================================================================ */

.example-number {
	position:relative;
	width:200px;
	height:200px;
	margin:50px 0 200px;
	text-align:center;
	font:140px/200px Arial, sans-serif;
	color:#fff;
	background:#C91F2C;
}

/* creates the larger triangle */
.example-number:before {
	content:"";
	position:absolute;
	bottom:-140px;
	right:0;
	border-width:0 0 140px 140px;
	border-style:solid;
	border-color:transparent #C91F2C;
}

/* creates the larger triangle */
.example-number:after {
	content:"";
	position:absolute;
	bottom:-140px;
	right:85px; 
	border-width:0 0 140px 55px;
	border-style:solid;
	border-color:transparent #fff;
}


/* ============================================================================================================================
== PINCHED SPEECH BUBBLE (more CSS3)
** ============================================================================================================================ */

.pinched {
	position:relative;
	padding:15px;
	margin:50px 0 3em;
	text-align:center;
	color:#fff;
	background:#333; 
	/* css3 */
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

/* creates a rectangle of the colour wanted for the pointy bit */
.pinched:before {
	content:"";
	position:absolute;
	top:-20px;
	left:50%;
	width:100px;
	height:20px;
	margin:0 0 0 -50px;
	background:#333;
}

/* creates a rounded rectangle to cover part of the rectangle generated above */
.pinched:after {
	content:"";
	position:absolute;
	top:-20px;
	left:0;
	width:50%;
	height:20px;
	background:#fff;
	/* css3 */
	-webkit-border-bottom-right-radius:15px;
	-moz-border-radius-bottomright:15px;
	border-bottom-right-radius:15px;
}

/* creates the other rounded rectangle */
.pinched > :first-child:before {
	content:""; 
	position:absolute; 
	top:-20px; 
	right:0; 
	width:50%; 
	height:20px; 
	background:#fff;
	/* css3 */
	-webkit-border-bottom-left-radius:15px;
	-moz-border-radius-bottomleft:15px;
	border-bottom-left-radius:15px;
}


/* ============================================================================================================================
== OVAL SPEECH BUBBLE (more CSS3)
** ============================================================================================================================ */

.oval-speech {
	position:relative;
	width:270px;
	padding:50px 40px;
	margin:1em auto 50px;
	text-align:center;
	color:#fff; 
	background:#5a8f00;
	/* css3 */
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#b8db29), to(#5a8f00));
	background:-moz-linear-gradient(#b8db29, #5a8f00);
	background:-o-linear-gradient(#b8db29, #5a8f00);
	background:linear-gradient(#b8db29, #5a8f00);
	/*
	NOTES:
	-webkit-border-radius:220px 120px; // produces oval in safari 4 and chrome 4
	-webkit-border-radius:220px / 120px; // produces oval in chrome 4 (again!) but not supported in safari 4
	Not correct application of the current spec, therefore, using longhand to avoid future problems with webkit corrects this
	*/
	-webkit-border-top-left-radius:220px 120px;
	-webkit-border-top-right-radius:220px 120px;
	-webkit-border-bottom-right-radius:220px 120px;
	-webkit-border-bottom-left-radius:220px 120px;
	-moz-border-radius:220px / 120px;
	border-radius:220px / 120px;
}

.oval-speech p {font-size:1.25em;}

/* creates part of the curve */
.oval-speech:before {
	content:"";
	position:absolute;
	z-index:-1;
	bottom:-30px;
	right:50%;
	height:30px;
	border-right:60px solid #5a8f00;
	background:#5a8f00; /* need this for webkit - bug in handling of border-radius */
	/* css3 */
	-webkit-border-bottom-right-radius:80px 50px;
	-moz-border-radius-bottomright:80px 50px;
	border-bottom-right-radius:80px 50px;
	/* using translate to avoid undesired appearance in CSS2.1-capabable but CSS3-incapable browsers */
	-webkit-transform:translate(0, -2px);
	-moz-transform:translate(0, -2px);
	-ms-transform:translate(0, -2px);
	-o-transform:translate(0, -2px);
	transform:translate(0, -2px);
}

/* creates part of the curved pointy bit */
.oval-speech:after {
	content:"";
	position:absolute;
	z-index:-1;
	bottom:-30px;
	right:50%;
	width:60px;
	height:30px;
	background:#fff;
	/* css3 */
	-webkit-border-bottom-right-radius:40px 50px; 
	-moz-border-radius-bottomright:40px 50px; 
	border-bottom-right-radius:40px 50px; 
	/* using translate to avoid undesired appearance in CSS2.1-capabable but CSS3-incapable browsers */
	-webkit-transform:translate(-30px, -2px);
	-moz-transform:translate(-30px, -2px);
	-ms-transform:translate(-30px, -2px);
	-o-transform:translate(-30px, -2px);
	transform:translate(-30px, -2px);
}


/* ============================================================================================================================
== OVAL THOUGHT BUBBLE (more CSS3)
** ============================================================================================================================ */

.oval-thought {
	position:relative;
	width:270px;
	padding:50px 40px;
	margin:1em auto 80px;
	text-align:center;
	color:#fff; 
	background:#075698;
	/* css3 */
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#2e88c4), to(#075698));
	background:-moz-linear-gradient(#2e88c4, #075698);
	background:-o-linear-gradient(#2e88c4, #075698);
	background:linear-gradient(#2e88c4, #075698);
	/*
	NOTES:
	-webkit-border-radius:220px 120px; // produces oval in safari 4 and chrome 4
	-webkit-border-radius:220px / 120px; // produces oval in chrome 4 (again!) but not supported in safari 4
	Not correct application of the current spec, therefore, using longhand to avoid future problems with webkit corrects this
	*/
	-webkit-border-top-left-radius:220px 120px;
	-webkit-border-top-right-radius:220px 120px;
	-webkit-border-bottom-right-radius:220px 120px;
	-webkit-border-bottom-left-radius:220px 120px;
	-moz-border-radius:220px / 120px;
	border-radius:220px / 120px;
}

.oval-thought p {font-size:1.25em;}

/* creates the larger circle */
.oval-thought:before {
	content:"";
	position:absolute;
	bottom:-20px;
	left:50px;
	width:30px;
	height:30px;
	background:#075698;
	/* css3 */
	-webkit-border-radius:30px;
	-moz-border-radius:30px;
	border-radius:30px;
}

/* creates the smaller circle */
.oval-thought:after {
	content:"";
	position:absolute;
	bottom:-30px;
	left:30px;
	width:15px;
	height:15px;
	background:#075698;
	/* css3 */
	-webkit-border-radius:15px;
	-moz-border-radius:15px;
	border-radius:15px;
}

/* ============================================================================================================================
== OVAL SPEECH BUBBLE WITH QUOTATION MARKS (more CSS3)
** ============================================================================================================================ */

.oval-quotes {
	position:relative;
	width:400px;
	height:350px;
	margin:2em auto 10px;
	color:#000;
	background:#ffed26;
	/* css3 */
	/*
	NOTES:
	-webkit-border-radius:Apx Bpx; // produces oval in safari 4 and chrome 4
	-webkit-border-radius:Apx / Bpx; // produces oval in chrome 4 (again!) but not supported in safari 4
	Not correct application of the current spec, therefore, using longhand to avoid future problems with webkit corrects this
	*/
	-webkit-border-top-left-radius:400px 350px;
	-webkit-border-top-right-radius:400px 350px;
	-webkit-border-bottom-right-radius:400px 350px;
	-webkit-border-bottom-left-radius:400px 350px;
	-moz-border-radius:400px / 350px;
	border-radius:400px / 350px;
}

/* creates opening quotation mark */
.oval-quotes:before {
	content:"\201C"; 
	position:absolute; 
	z-index:1; 
	top:20px; 
	left:20px; 
	font:80px/1 Georgia, serif;
	color:#ffed26;
}

/* creates closing quotation mark */
.oval-quotes:after {
	content:"\201D"; 
	position:absolute; 
	z-index:1; 
	bottom:0; 
	right:20px; 
	font:80px/0.25 Georgia, serif;
	color:#ffed26;
}

.oval-quotes p {
	width:250px;
	height:250px;
	padding:50px 0 0;
	margin:0 auto;
	text-align:center;
	font-size:35px;
}

/* creates smaller curve */
.oval-quotes p:before {
	content:"";
	position:absolute;
	z-index:-1;
	bottom:-30px;
	right:55%;
	width:180px; /* wider than necessary to make it look a bit better in IE8 */
	height:60px;
	background:#fff; /* need this for webkit - bug in handling of border-radius */
	/* css3 */
	-webkit-border-bottom-right-radius:40px 50px; 
	-moz-border-radius-bottomright:40px 50px; 
	border-bottom-right-radius:40px 50px; 
	/* using translate to avoid undesired appearance in CSS2.1-capabable but CSS3-incapable browsers */
	-webkit-transform:translate(-30px, -2px);
	-moz-transform:translate(-30px, -2px);
	-ms-transform:translate(-30px, -2px);
	-o-transform:translate(-30px, -2px);
	transform:translate(-30px, -2px);
}

/* creates larger curve */
.oval-quotes p:after {
	content:"";
	position:absolute;
	z-index:-2;
	bottom:-30px;
	right:25%;
	height:80px;
	border-right:200px solid #ffed26;
	background:#ffed26; /* need this for webkit - bug in handling of border-radius */
	/* css3 */
	-webkit-border-bottom-right-radius:200px 100px;
	-moz-border-radius-bottomright:200px 100px;
	border-bottom-right-radius:200px 100px;
	/* using translate to avoid undesired appearance in CSS2.1-capabable but CSS3-incapable browsers */
	-webkit-transform:translate(0, -2px);
	-moz-transform:translate(0, -2px);
	-ms-transform:translate(0, -2px);
	-o-transform:translate(0, -2px);
	transform:translate(0, -2px);
    /* reduce the damage in FF3.0 */
    display:block; 
    width:0;
}

.oval-quotes + p {
	position:relative; /* part of the IE8 width compromise */
	width:150px;
	margin:0 0 2em;
	font-size:18px;
	font-weight:bold;
}


/* ============================================================================================================================
== RECTANGLE-BORDER STYLE WITH CURVE
** ============================================================================================================================ */

.rectangle-speech-border {
	position:relative; 
	padding:50px 15px; 
	margin:1em 0 3em;
	border:10px solid #5a8f00; 
	text-align:center; 
	color:#333;
	background:#fff; 
	/* css3 */
	-webkit-border-radius:20px;
	-moz-border-radius:20px;
	border-radius:20px;
}

/* creates larger curve */
.rectangle-speech-border:before {
	content:""; 
	position:absolute; 
	z-index:10; 
	bottom:-40px; 
	left:50px; 
	width:50px; 
	height:30px;
	border-style:solid; 
	border-width:0 10px 10px 0; 
	border-color:#5a8f00; 
	background:transparent;
	/* css3 */
	-webkit-border-bottom-right-radius:80px 50px;
	-moz-border-radius-bottomright:80px 50px;
	border-bottom-right-radius:80px 50px;
    /* reduce the damage in FF3.0 */
    display:block; 
}

/* creates smaller curve */
.rectangle-speech-border:after {
	content:""; 
	position:absolute; 
	z-index:10; 
	bottom:-40px; 
	left:50px; 
	width:20px; 
	height:30px; 
	border-style:solid; 
	border-width:0 10px 10px 0; 
	border-color:#5a8f00; 
	background:transparent;
	/* css3 */
	-webkit-border-bottom-right-radius:40px 50px; 
	-moz-border-radius-bottomright:40px 50px; 
	border-bottom-right-radius:40px 50px; 
    /* reduce the damage in FF3.0 */
    display:block; 
}

/* creates a small circle to produce a rounded point where the two curves meet */
.rectangle-speech-border > :first-child:before {
	content:""; 
	position:absolute; 
	bottom:-40px; 
	left:45px; 
	width:10px; 
	height:10px;
	background:#5a8f00;
	/* css3 */
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

/* creates a white rectangle to cover part of the oval border*/
.rectangle-speech-border > :first-child:after {
	content:""; 
	position:absolute; 
	bottom:-10px; 
	left:76px; 
	width:24px; 
	height:15px; 
	background:#fff;
}

/* ============================================================================================================================
== OVER SPEECH BUBBLE, EMPTY, WITH BORDER (more CSS3)
** ============================================================================================================================ */

.oval-speech-border {
	position:relative; 
	padding:70px 30px;
	margin:1em auto 60px;
	border:10px solid #f3961c; 
	text-align:center;
	color:#333; 
	background:#fff;
	/* css3 */
	/*
	NOTES:
	-webkit-border-radius:240px 140px; // produces oval in safari 4 and chrome 4
	-webkit-border-radius:240px / 140px; // produces oval in chrome 4 (again!) but not supported in safari 4
	Not correct application of the current spec, therefore, using longhand to avoid future problems with webkit corrects this
	*/
	-webkit-border-top-left-radius:240px 140px;
	-webkit-border-top-right-radius:240px 140px;
	-webkit-border-bottom-right-radius:240px 140px;
	-webkit-border-bottom-left-radius:240px 140px;
	-moz-border-radius:240px / 140px;
	border-radius:240px / 140px;
}

/* creates larger curve */
.oval-speech-border:before {
	content:""; 
	position:absolute; 
	z-index:2; 
	bottom:-40px; 
	right:50%; 
	width:50px; 
	height:30px;
	border-style:solid;
	border-width:0 10px 10px 0;
	border-color:#f3961c;
	margin-right:-10px;
	background:transparent;
	/* css3 */
	-webkit-border-bottom-right-radius:80px 50px;
	-moz-border-radius-bottomright:80px 50px;
	border-bottom-right-radius:80px 50px;
    /* reduce the damage in FF3.0 */
    display:block; 
}

/* creates smaller curve */
.oval-speech-border:after {
	content:""; 
	position:absolute; 
	z-index:2; 
	bottom:-40px; 
	right:50%; 
	width:20px; 
	height:31px; 
	border-style:solid;
	border-width:0 10px 10px 0;
	border-color:#f3961c;
	margin-right:20px;
	background:transparent;
	/* css3 */
	-webkit-border-bottom-right-radius:40px 50px; 
	-moz-border-radius-bottomright:40px 50px; 
	border-bottom-right-radius:40px 50px; 
    /* reduce the damage in FF3.0 */
    display:block; 
}

/* creates a small circle to produce a rounded point where the two curves meet */
.oval-speech-border > :first-child:before {
	content:""; 
	position:absolute; 
	z-index:1; 
	bottom:-40px; 
	right:50%; 
	width:10px; 
	height:10px;
	margin-right:45px;
	background:#f3961c;
	/* css3 */
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius:10px;
}

/* creates a white rectangle to cover part of the oval border*/
.oval-speech-border > :first-child:after {
	content:""; 
	position:absolute; 
	z-index:1; 
	bottom:-10px; 
	right:50%; 
	width:30px; 
	height:15px; 
	background:#fff;
}

/* ============================================================================================================================
== OVER THOUGHT BUBBLE, EMPTY, WITH BORDER (more CSS3)
** ============================================================================================================================ */

.oval-thought-border {
	position:relative; 
	padding:70px 30px;
	margin:1em auto 80px;
	border:10px solid #c81e2b; 
	text-align:center;
	color:#333; 
	background:#fff;
	/* css3 */
	/*
	NOTES:
	-webkit-border-radius:240px 140px; // produces oval in safari 4 and chrome 4
	-webkit-border-radius:240px / 140px; // produces oval in chrome 4 (again!) but not supported in safari 4
	Not correct application of the current spec, therefore, using longhand to avoid future problems with webkit corrects this
	*/
	-webkit-border-top-left-radius:240px 140px;
	-webkit-border-top-right-radius:240px 140px;
	-webkit-border-bottom-right-radius:240px 140px;
	-webkit-border-bottom-left-radius:240px 140px;
	-moz-border-radius:240px / 140px;
	border-radius:240px / 140px;
}

/* creates the larger circle */
.oval-thought-border:before {
	content:""; 
	position:absolute; 
	z-index:10; 
	bottom:-40px; 
	right:100px; 
	width:50px; 
	height:50px;
	border:10px solid #c81e2b;
	background:#fff;
	/* css3 */
	-webkit-border-radius:50px;
	-moz-border-radius:50px;
	border-radius:50px;
    /* reduce the damage in FF3.0 */
    display:block; 
}

/* creates the smaller circle */
.oval-thought-border:after {
	content:""; 
	position:absolute; 
	z-index:10; 
	bottom:-60px; 
	right:50px; 
	width:25px; 
	height:25px; 
	border:10px solid #c81e2b;
	background:#fff;
	/* css3 */
	-webkit-border-radius:25px;
	-moz-border-radius:25px;
	border-radius:25px;
    /* reduce the damage in FF3.0 */
    display:block; 
}