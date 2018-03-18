/*
TODO: instead of this UMD, go full-AMD. Done as a stopgap solution.
*/
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(window.jQuery); // will immediately attache the jQuery plugin
	}
})(function($) {

	'use strict';

	var Tab = function(element, options) {
		this.element = $(element);
		this.options = options;
		this.init();
	};

	Tab.VERSION = '1.0.0';

	// Default settings
	Tab.DEFAULTS = {
		toggleActiveClass: 'is-active',
		contentActiveClass: 'is-active',
		toggleAnimationClass: 'is-slider-active',
		slider: true,
		fade: true,
		sliderElement: 'tab-slider',
		callbackBefore: function () {},
		callbackAfter: function () {}
	};

	Tab.prototype = {

		init: function(){
			if (this.options.slider && typeof this.slider == 'undefined') {
				this.slider = $('<div>', {class: this.options.sliderElement});
				this.element.append(this.slider);
				this.updateSlider(this.getActiveTab());
			}
		},

		getActiveTab: function() {
			if (!this.activeTab) {
				this.activeTab = this.element.find('.' + this.options.toggleActiveClass);
			}

			return this.activeTab;
		},

		toggleTab: function() {

			var $this = this.element,
				selector = this.options.targetTab.attr('href');

			// Only continue if the tabs are not disabled
			if ( !$this.hasClass('is-disabled') ) {

				// Notify what tab we're leaving
				this.options.callbackBefore(this);

				// Deactivate current tab
				this.activeTab = false;
				$this.find('.tabs__item').removeClass(this.options.toggleActiveClass);

				// Move slider and activate the correct tab
				if (this.options.slider) {
					this.updateSlider(this.options.targetTab);
				}
				else {
					$this.addClass(this.options.toggleActiveClass);
				}

				this.options.callbackAfter(this);

				var $target = $(selector);

				$target.parent().find('.tab-content__item').removeClass(this.options.contentActiveClass);

				if (this.options.fade) {
					// last tab content fadeOut(200)
	                // new tab content fadeIn(400);
					$target.addClass(this.options.contentActiveClass);
				} else {
					$target.addClass(this.options.contentActiveClass);
				}
			}
		},

		// The sliding animation of the active tab indicator breaks if the tabs
		// span more than one line.  This method determines if the tabs are
		// single or multi-lined and toggles the animation.  It also updates the
		// slider's position if animation is enabled.
		updateSlider: function(activeTab) {
			if (!activeTab) {
				activeTab = this.getActiveTab();
			}
			var tabsHeight = this.element.height();
			var tabsItemHeight = this.element.find('.tabs__item:first').outerHeight(); // Need outerHeight sinces these items have a bottom border
			var tabsAreMultiLined = tabsHeight > tabsItemHeight;

			// Check to see if the tabs are a single line or multi-line.
			if (tabsAreMultiLined) {
				// Disable animation for multi-line tabs
				this.element.removeClass(this.options.toggleAnimationClass)
			} else {
				// Enable animation for single line tabs
				this.element.addClass(this.options.toggleAnimationClass)

				// Update the slider's position
				if (this.slider) {
					this.slider.css({
						'width': activeTab.outerWidth(),
						'left': activeTab.position().left
					});
				}
			}

			activeTab.addClass(this.options.toggleActiveClass);
		}
	};

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var data  = $this.data('w.tab');
			var options = $.extend({}, Tab.DEFAULTS, $this.data(), typeof option == 'object' && option);

			if (!data) $this.data('w.tab', (data = new Tab(this, options)));
			if (typeof option == 'string') data[option]();
		});
	}

	$.fn.tab             = Plugin;
	$.fn.tab.Constructor = Tab;

	$(document).on('click.w.tab.data-api', '[data-toggle="tab"]', function(e){
		var $target = $('#' + $(this).closest('.tabs').attr('id'));
		var data = $target.data('w.tab');
		data.options.targetTab = $(this);

		Plugin.call($target, 'toggleTab');

		e.preventDefault();
	});

	$(document).ready(function() {
		$('[data-tabs="true"]').each(function() {
			var $tabs = $(this);
			Plugin.call($tabs, $tabs.data());
		});
	});

	function onWindowResize() {
		$('[data-tabs="true"]').each(function() {
			var $tabs = $(this);
			Plugin.call($tabs, 'updateSlider');
		});
	}

	$(window).resize(throttle(onWindowResize, 100));

	function throttle(callback, limit) {
	    var wait = false;

	    return function () {
	        if (!wait) {
	            wait = true;
	            setTimeout(function () {
		            callback.call();
	                wait = false;
	            }, limit);
	        }
	    }
	}

});
