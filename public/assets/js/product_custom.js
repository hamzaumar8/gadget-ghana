$(document).ready(function(){
	"use strict";
	
	initViewedSlider();
	initBrandsSlider();
	initQuantity();
	initColor();
	initFavs();
	initImage();

	/* 

	5. Init Recently Viewed Slider

	*/

	function initViewedSlider()
	{
		if($('.viewed_slider').length)
		{
			var viewedSlider = $('.viewed_slider');

			viewedSlider.owlCarousel(
			{
				loop:true,
				margin:30,
				autoplay:true,
				autoplayTimeout:6000,
				nav:false,
				dots:false,
				responsive:
				{
					0:{items:1},
					575:{items:2},
					768:{items:3},
					991:{items:4},
					1199:{items:6}
				}
			});

			if($('.viewed_prev').length)
			{
				var prev = $('.viewed_prev');
				prev.on('click', function()
				{
					viewedSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.viewed_next').length)
			{
				var next = $('.viewed_next');
				next.on('click', function()
				{
					viewedSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	6. Init Brands Slider

	*/

	function initBrandsSlider()
	{
		if($('.brands_slider').length)
		{
			var brandsSlider = $('.brands_slider');

			brandsSlider.owlCarousel(
			{
				loop:true,
				autoplay:true,
				autoplayTimeout:5000,
				nav:false,
				dots:false,
				autoWidth:true,
				items:8,
				margin:42
			});

			if($('.brands_prev').length)
			{
				var prev = $('.brands_prev');
				prev.on('click', function()
				{
					brandsSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.brands_next').length)
			{
				var next = $('.brands_next');
				next.on('click', function()
				{
					brandsSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Init Quantity

	*/

	function initQuantity()
	{
		// Handle product quantity input
		if($('.product_quantity').length)
		{
			var input = $('#quantity_input');
			var incButton = $('#quantity_inc_button');
			var decButton = $('#quantity_dec_button');

			var originalVal;
			var endVal;

			incButton.on('click', function()
			{
				originalVal = input.val();
				endVal = parseFloat(originalVal) + 1;
				input.val(endVal);
			});

			decButton.on('click', function()
			{
				originalVal = input.val();
				if(originalVal > 1)
				{
					endVal = parseFloat(originalVal) - 1;
					input.val(endVal);
				}
			});
		}
	}

	/* 

	8. Init Color

	*/

	function initColor()
	{
		if($('.product_color').length)
		{
			var selectedCol = $('#selected_color');
			var colorItems = $('.color_list li .color_mark');
			colorItems.each(function()
			{
				var colorItem = $(this);
				colorItem.on('click', function()
				{
					var color = colorItem.css('backgroundColor');
					selectedCol.css('backgroundColor', color);
				// selectedCol.attr('col', color);
				});
			});
		}
	}

	/* 

	9. Init Favorites

	*/

	function initFavs()
	{
		// Handle Favorites
		var fav = $('.product_fav');
		fav.on('click', function()
		{
			fav.toggleClass('active');
		});
	}

	/* 

	10. Init Image

	*/

	function initImage()
	{
		var images = $('.image_list li');
		var selected = $('.image_selected img');

		images.each(function()
		{
			var image = $(this);
			image.on('click', function()
			{
				var imagePath = new String(image.data('image'));
				selected.attr('src', imagePath);
			});
		});
	}
});