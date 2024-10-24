$(document).ready(function() {

/*==========Menu=============*/
$(".header__burger").on("click", function() {
	$(this).toggleClass("active");
	$(".header__menu").slideToggle();
	$('.blur').fadeToggle();
});
$(".blur").on("click", function() {
	$(this).fadeToggle();
	$(".header__menu").slideToggle();
	$(".header__burger").toggleClass("active");
});
/*=========/menu==============*/

/*==========Account=============*/
$(".account").on("click", function() {
	$(this).toggleClass("active");
	$('.account__dropdown').slideToggle();
	$(".header__menu").slideUp();
	$(".header__burger").removeClass("active");
	$(".blur").fadeOut();
});
/*=========/account==============*/

/*==========Menu=============*/
$(".menu__item").hover(function() {
	if ($(window).width() > 1024){
        $(this).toggleClass("active");
		$(this).find('.menu__sub').fadeToggle();
    };
});

$(".menu__sub .menu__item").hover(function() {
	if ($(window).width() > 1024){
        $(this).toggleClass("active");
		$(this).find('.menu__subsub').fadeToggle(); 
    };
});

$(".submenu-open").on("click", function() {
	if ($(window).width() <= 1024){
        $(this).toggleClass("active");
		$(this).next('.menu__sub').slideToggle();
		$(".submenu-open").not(this).next('.menu__sub').slideUp();
		$(".submenu-open").not(this).removeClass("active");
    };
});

$(".subsubmenu-open").on("click", function() {
	if ($(window).width() <= 1024){
        $(this).toggleClass("active");
		$(this).next('.menu__subsub').slideToggle(); 
		$(".subsubmenu-open").not(this).next('.menu__subsub').slideUp();
		$(".subsubmenu-open").not(this).removeClass("active");
    };
});
/*=========/menu==============*/

/*==========Dropdown=============*/
$(".dropbtn").on("click", function() {
	$(this).toggleClass("active");
	$('.dropbtn__dropdown').slideToggle();
});
/*=========/dropdown==============*/

/*==========Filters=============*/
$(".tools__showbtn").on("click", function() {
	$(this).toggleClass("active");
	$('.filters').slideToggle();
});

$(".filters__hide").on("click", function() {
	$(".tools__showbtn").removeClass("active");
	$('.filters').slideUp();
});
/*=========/filters==============*/

/*==========hint=============*/
$(".workers__stat").hover(function() {
	if ($(window).width() > 1024){
        $(this).find(".hint").fadeToggle();
    };
});
$(".workers__stat").on("click", function() {
	if ($(window).width() <= 1024){
        $(this).find(".hint").fadeToggle();
    };
});
/*=========/hint==============*/

/*==========Password=============*/
$('.form__input-btn').on('click', function(){
	if ($('.form__input_password input').attr('type') == 'password'){
		$(this).addClass('active');
		$('.form__input_password input').attr('type', 'text');
	} else {
		$(this).removeClass('active');
		$('.form__input_password input').attr('type', 'password');
	}
});  
/*=========/password==============*/

});