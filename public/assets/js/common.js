$(document).ready(function() {
    "use strict";
    var menuActive = !1;
    var header = $('.header');
    setHeader();
    initPageMenu();
    windowScroll();

    $(window).on('resize', function() { setHeader() });

    function setHeader() { if (window.innerWidth > 991 && menuActive) { closeMenu() } }

    function windowScroll() {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
		   	var mainHeader = $('.main_nav'),
				scrlTop = $(this).scrollTop();
			if ( scrlTop > 50 && scrlTop <= 2000 ) {
				mainHeader.addClass('fixed-top');
			} else if ( scrlTop <= 500) {
				if ( mainHeader.hasClass('fixed-top') ) {
					mainHeader.addClass('fixed-top');
					setTimeout(function(){
						mainHeader.removeClass('fixed-top');
					}, 100 );
				}
			} 
			
		});
	};
    function initPageMenu() {
        if ($('.page_menu').length && $('.page_menu_content').length) {
            var menu = $('.page_menu');
            var menuContent = $('.page_menu_content');
            var menuTrigger = $('.menu_trigger');
            menuTrigger.on('click', function() { if (!menuActive) { openMenu() } else { closeMenu() } });
            if ($('.page_menu_item').length) {
                var items = $('.page_menu_item');
                items.each(function() {
                    var item = $(this);
                    if (item.hasClass("has-children")) {
                        item.on('click', function(evt) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            var subItem = item.find('> ul');
                            if (subItem.hasClass('active')) { subItem.toggleClass('active');
                                TweenMax.to(subItem, 0.3, { height: 0 }) } else { subItem.toggleClass('active');
                                TweenMax.set(subItem, { height: "auto" });
                                TweenMax.from(subItem, 0.3, { height: 0 }) }
                        })
                    }
                })
            }
        }
    }

    function openMenu() { var menu = $('.page_menu'); var menuContent = $('.page_menu_content');
        TweenMax.set(menuContent, { height: "auto" });
        TweenMax.from(menuContent, 0.3, { height: 0 });
        menuActive = !0 }

    function closeMenu() { var menu = $('.page_menu'); var menuContent = $('.page_menu_content');
        TweenMax.to(menuContent, 0.3, { height: 0 });
        menuActive = !1 }
});
$(function() { $('#nav-accordion').dcAccordion({ eventType: 'click', autoClose: !0, saveState: !0, disableLink: !0, speed: 'slow', showCount: !1, autoExpand: !0, classExpand: 'dcjq-current-parent' }) })