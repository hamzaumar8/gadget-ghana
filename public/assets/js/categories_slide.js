$(document).ready(function() {
    "use strict";
    // initDealsSlider();
    initcategorySlider();
    categorySliderZIndex();
    initTabs();

    function initTabs() {
        if ($('.tabbed_container').length) {
            var tabsContainers = $('.tabbed_container');
            tabsContainers.each(function() {
                var tabContainer = $(this);
                var tabs = tabContainer.find('.tabs ul li');
                var panels = tabContainer.find('.panel');
                var sliders = panels.find('.slider');
                tabs.each(function() {
                    var tab = $(this);
                    tab.on('click', function() {
                        panels.removeClass('active');
                        var tabIndex = tabs.index(this);
                        $($(panels[tabIndex]).addClass('active'));
                        sliders.slick("unslick");
                        sliders.each(function() {
                            var slider = $(this);
                            if (slider.hasClass('category_slider<?=$parent_id;?>')) { initCSlider(slider) }
                        })
                    })
                })
            })
        }
    }

    function initcategorySlider() {
        if ($('.category_slider').length) {
            var categorySliders = $('.category_slider');
            categorySliders.each(function() {
                var categorySlider = $(this);
                initCSlider(categorySlider)
            })
        }
    }

    function initCSlider(as) {
        var categorySlider = as;
        categorySlider.on('init', function() {
            var activeItems = categorySlider.find('.slick-slide.slick-active');
            for (var x = 0; x < activeItems.length - 1; x++) {
                var item = $(activeItems[x]);
                item.find('.border_active').removeClass('active');
                if (item.hasClass('slick-active')) {
                    item.find('.border_active').addClass('active')
                }
            }
        }).on({
            afterChange: function(event, slick, current_slide_index, next_slide_index) {
                var activeItems = categorySlider.find('.slick-slide.slick-active');
                activeItems.find('.border_active').removeClass('active');
                for (var x = 0; x < activeItems.length - 1; x++) {
                    var item = $(activeItems[x]);
                    item.find('.border_active').removeClass('active');
                    if (item.hasClass('slick-active')) {
                        item.find('.border_active').addClass('active')
                    }
                }
            }
        }).slick({
            rows: 1,
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: !1,
            arrows: !1,
            dots: !0,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        rows: 1,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: !0
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        rows: 2,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: !1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        rows: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: !1
                    }
                }
            ]
        })
    }

    function categorySliderZIndex() {
        var items = document.getElementsByClassName('category<?=$parent_id;?>');
        for (var x = 0; x < items.length; x++) {
            var item = items[x];
            item.addEventListener('mouseenter', function() {
                $('.category_slider.category_slider<?=$parent_id;?> .slick-dots').css('display', "none")
            });
            item.addEventListener('mouseleave', function() {
                $('.category_slider.category_slider<?=$parent_id;?> .slick-dots').css('display', "block")
            })
        }
    }
});