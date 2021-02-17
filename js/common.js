$(document).ready(function () {
	https: //clck.ru/F5MdE
		$('.menu_but').click(function () {
			$('.nav_menu_list').slideToggle(350, function () {
				if ($(this).css('display') === 'none') {
					$(this).removeAttr('style');
				}
			});
		})
});


$(document).ready(function () {
	$(".fancybox").fancybox({
		"imageScale": false,
		"zoomOpacity": true,
		"overlayShow": false,
		"zoomSpeedIn": 500,
		"zoomSpeedOut": 500
	});
});


$(function () {

	var btnUp = $(".but_up");

	var top = $(this).scrollTop();
	if (top > 300) {
		btnUp.fadeIn(500);
	} else {
		btnUp.fadeOut(500);
	}


	$(document).on("scroll", function () {
		var top = $(this).scrollTop();
		if (top > 300) {
			btnUp.fadeIn(500);
		} else {
			btnUp.fadeOut(500);
		}
	});

	btnUp.on("click", function () {
		$("html,body").animate({
			scrollTop: 0
		}, 400);
	});
});


$(".link").on("click", function (e) {
	e.preventDefault();

	var selector = $(this).attr("href"); //получили Атрибут
	var h = $(selector); //получили элемент с данным атрибутом


	$("html,body").animate({
		scrollTop: h.offset().top //мы скролим тег body на высоту h.offset(высоту получаем при клике на элемент меню).top
	}, 500);
});


$(document).ready(function () {
	new WOW().init();
});


// Project code

// mobile menu
const mobileMenu = document.querySelector('.mobile_menu');
const openmenu = document.querySelectorAll('[data-openmenu]');
const closemenu = document.querySelectorAll('[data-closemenu]');

openmenu.forEach(function (item) {
	item.addEventListener('click', function () {
		mobileMenu.style.transform = 'translateY(0)';
	});
});

closemenu.forEach(function (item) {
	item.addEventListener('click', function () {
		mobileMenu.style.transform = 'translateY(-101%)';
	});
});


// delete br

const brs = document.querySelectorAll('.block_1 br');


// slick keys
$('.slider_keys').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
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
	responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},

		{
			breakpoint: 815,
			settings: {
				prevArrow: `<div class="keys_prev slick-prev">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#FDF311"/>
<path d="M22 14.7864H10.9104L14.9346 11.0091L13.8596 10L8 15.5L13.8596 21L14.9346 19.9909L10.9104 16.2136H22V14.7864Z" fill="black"/>
</svg>

				
	</div>`,
				nextArrow: `<div class="keys_prev slick-next">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="15" transform="matrix(-1 0 0 1 15 15)" fill="#FDF311"/>
<path d="M8 14.7864H19.0896L15.0654 11.0091L16.1404 10L22 15.5L16.1404 21L15.0654 19.9909L19.0896 16.2136H8V14.7864Z" fill="black"/>
</svg>

				

	</div>`,
	slidesToShow: 2,
			}
		},

		{
			breakpoint: 667,
			settings: {
				slidesToShow: 1,
				prevArrow: `<div class="keys_prev slick-prev">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#FDF311"/>
<path d="M22 14.7864H10.9104L14.9346 11.0091L13.8596 10L8 15.5L13.8596 21L14.9346 19.9909L10.9104 16.2136H22V14.7864Z" fill="black"/>
</svg>

				
	</div>`,
				nextArrow: `<div class="keys_prev slick-next">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="15" transform="matrix(-1 0 0 1 15 15)" fill="#FDF311"/>
<path d="M8 14.7864H19.0896L15.0654 11.0091L16.1404 10L22 15.5L16.1404 21L15.0654 19.9909L19.0896 16.2136H8V14.7864Z" fill="black"/>
</svg>

				

	</div>`,
			}
		},

	]
});

$('.slider_reviews').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	// autoplay: true,
	autoplaySpeed: 2000,
	arrows: true,
	dots: true,
	prevArrow: `<div class="slider_reviews__prev">
	<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18 6.52686H3.74194L8.91593 1.37602L7.53372 0L0 7.5L7.53372 15L8.91593 13.624L3.74194 8.47314H18V6.52686Z" fill="#01A089"/>
	</svg>								
</div>`,
	nextArrow: `<div class="slider_reviews__next">
	<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0 6.52686H14.2581L9.08407 1.37602L10.4663 0L18 7.5L10.4663 15L9.08407 13.624L14.2581 8.47314H0V6.52686Z" fill="#01A089"/>
	</svg>								
</div>`,
	responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},

		{
			breakpoint: 815,
			settings: {
				prevArrow: `<div class="keys_prev slick-prev">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#FDF311"/>
<path d="M22 14.7864H10.9104L14.9346 11.0091L13.8596 10L8 15.5L13.8596 21L14.9346 19.9909L10.9104 16.2136H22V14.7864Z" fill="black"/>
</svg>

				
	</div>`,
				nextArrow: `<div class="keys_prev slick-next">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="15" transform="matrix(-1 0 0 1 15 15)" fill="#FDF311"/>
<path d="M8 14.7864H19.0896L15.0654 11.0091L16.1404 10L22 15.5L16.1404 21L15.0654 19.9909L19.0896 16.2136H8V14.7864Z" fill="black"/>
</svg>

				

	</div>`,
	slidesToShow: 2,
			}
		},

		{
			breakpoint: 667,
			settings: {
				slidesToShow: 1,
				prevArrow: `<div class="keys_prev slick-prev">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#FDF311"/>
<path d="M22 14.7864H10.9104L14.9346 11.0091L13.8596 10L8 15.5L13.8596 21L14.9346 19.9909L10.9104 16.2136H22V14.7864Z" fill="black"/>
</svg>

				
	</div>`,
				nextArrow: `<div class="keys_prev slick-next">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="15" transform="matrix(-1 0 0 1 15 15)" fill="#FDF311"/>
<path d="M8 14.7864H19.0896L15.0654 11.0091L16.1404 10L22 15.5L16.1404 21L15.0654 19.9909L19.0896 16.2136H8V14.7864Z" fill="black"/>
</svg>

				

	</div>`,
			}
		},

	]
});


// Questions

$('.quests_block').on('click', function () {
	$(this).children('.quest_answer').slideToggle('normal');
	$(this).find('.icon_toggle__plus').toggleClass('dn');
});

// mobile but tabs 4
$('.block_5__more').on('click', function () {
	$('.tab_uslugi_toggle_mob').slideToggle('normal');
	$('.block_5__more span, .block_5__more svg').toggleClass('dn');
	$('.more_2').toggleClass('dn');
});


// Tabs desc

const tabs = document.querySelectorAll('.tab'),
      menu_links = document.querySelectorAll('.block_5__tabmenu ul li'),
	  menu_parent = document.querySelector('.block_5__tabmenu ul');



	  
	 // Скрываем все табы
	 function hideTabs()
	 {
		 tabs.forEach(function(item){
			 item.style.display = 'none';
		 });
 
		 menu_links.forEach(function(item){
			 item.classList.remove('tab__active');
		 });
	 }

	 // Показываем таб
	 function showTab(i = 0)
	 {
		 tabs[i].style.display = 'block';
		 tabs[i].classList.add('fade_anim');
		 menu_links[i].classList.add('tab__active');
	 }

	 // Делегируем событие на родителя меню
	 function clickMenu()
	 {
		 menu_parent.addEventListener('click', function(e){
			 const target = e.target;
	 
			 if(target && target.classList.contains('tabs_menu_item'))
			 {
				 menu_links.forEach(function(item, i){
					 if(target == item)
					 {
						 hideTabs();
						 showTab(i);
	 
						 item.classList.add('tab__active');
					 }
				 });
			 }
		 });
	 }

	hideTabs();
    showTab();
    clickMenu();



	// mob tabs

	document.addEventListener('DOMContentLoaded', function(){
		const tabs2 = document.querySelectorAll('.tab'),
		menu_links2 = document.querySelectorAll('.select__item span'),
		menu_parent2 = document.querySelector('.select__list');

		// Скрываем все табы
		function hideTabs2()
		{
			tabs2.forEach(function(item){
				item.style.display = 'none';
			});
	
			menu_links2.forEach(function(item){
				item.classList.remove('tab__active');
			});
		}

		// Показываем таб
		function showTab2(i = 0)
		{
			tabs2[i].style.display = 'block';
			tabs2[i].classList.add('fade_anim');
			menu_links2[i].classList.add('tab__active');
		}

		// Делегируем событие на родителя меню
		function clickMenu2()
		{
			menu_parent2.addEventListener('click', function(e){
				
				const target2 = e.target;
				
				
				if(target2 && target2.classList.contains('tabs_mob_trigger'))
				{
					
					menu_links2.forEach(function(item, i){
						if(target2 == item)
						{
							hideTabs2();
							showTab2(i);
		
							item.classList.add('tab__active');
						}
					});
				}
			});
		}
   
	   hideTabs2();
	   showTab2();
	   clickMenu2();

	  
	});
	






	




	// select

	// Select
	$('.select').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 500;

		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: 'Форма сотрудничества'
		}).insertAfter($this);
		
		var selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);		

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text(),
					class: 'tabs_mob_trigger'
					
				})				
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');

					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});		

	});


