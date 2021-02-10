$(document).ready(function() {https://clck.ru/F5MdE
   $('.menu_but').click(function()
   {
   	$('.nav_menu_list').slideToggle(350,function()
   		{
   			if($(this).css('display')==='none')
				{
					$(this).removeAttr('style');
				}
   		});
   })
});


$(document).ready(function() {
    $(".fancybox").fancybox({
    	    "imageScale"            : false,
            "zoomOpacity"			: true,
            "overlayShow"			: false,
            "zoomSpeedIn"			: 500,
            "zoomSpeedOut"			: 500
    });
});


$(function()
{

	var btnUp = $(".but_up");

	var top = $(this).scrollTop();
		if( top > 300 ){
			btnUp.fadeIn(500);
		}
		else
		{
			btnUp.fadeOut(500);
		}

		
	$(document).on("scroll",function()
	{
		var top = $(this).scrollTop();
		if( top > 300 ){
			btnUp.fadeIn(500);
		}
		else
		{
			btnUp.fadeOut(500);
		}
	});

	btnUp.on("click",function()
	{
		$("html,body").animate({
			scrollTop:0
		},400);
	});
});


$(".link").on("click",function(e)
	{
		e.preventDefault();

		var selector = $(this).attr("href"); //получили Атрибут
		var h = $(selector);  //получили элемент с данным атрибутом
		

		$("html,body").animate({
			scrollTop: h.offset().top //мы скролим тег body на высоту h.offset(высоту получаем при клике на элемент меню).top
		},500);
	});


$(document).ready(function() {
  new WOW().init();
});


// Project code

// mobile menu
const mobileMenu = document.querySelector('.mobile_menu');
const openmenu = document.querySelectorAll('[data-openmenu]');
const closemenu = document.querySelectorAll('[data-closemenu]');

openmenu.forEach(function(item){
	item.addEventListener('click', function(){
		mobileMenu.style.transform = 'translateY(0)';
	});
});

closemenu.forEach(function(item){
	item.addEventListener('click', function(){
		mobileMenu.style.transform = 'translateY(-101%)';
	});
});


// delete br

const brs = document.querySelectorAll('.block_1 br');
console.log(brs);


// slick keys
$('.slider_keys').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	// autoplay: true,
	autoplaySpeed: 2000,
	arrows: true,
	dots: true,
	prevArrow: `<div class="keys_prev slick-prev">
	<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M18 6.52686H3.74194L8.91593 1.37602L7.53372 0L0 7.5L7.53372 15L8.91593 13.624L3.74194 8.47314H18V6.52686Z"
			fill="#FDF311" />
	</svg>
	</div>`,
	nextArrow: `<div class="keys_prev slick-next">
	<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 6.52686H14.2581L9.08407 1.37602L10.4663 0L18 7.5L10.4663 15L9.08407 13.624L14.2581 8.47314H0V6.52686Z" fill="#FDF311"/>
	</svg>

	</div>`,
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		  }
		},
		
	  ]
  });
