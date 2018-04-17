// Delay until the DOM is ready and the MOL async bundle loaded
DM.later(['DOM_READY', 'bundle'], function () {

/*
 *  jQuery selectBox - A cosmetic, styleable replacement for SELECT elements
 *
 *  Copyright 2012 Cory LaViska for A Beautiful Site, LLC.
 *
 *  https://github.com/claviska/jquery-selectBox
 *
 *  Licensed under both the MIT license and the GNU GPLv2 (same as jQuery: http://jquery.org/license)
 *
 */
if(jQuery) (function($) {

	$.extend($.fn, {

		selectBox: function(method, data) {

			var typeTimer,
				typeSearch = '',
				isMac = navigator.platform.match(/mac/i);

			//
			// Private methods
			//

			var init = function(select, data) {
				
				var options;
				
				// Disable for iOS devices (their native controls are more suitable for a touch device)
				if( navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i) ) return false;

				// Element must be a select control
				if( select.tagName.toLowerCase() !== 'select' ) return false;

				select = $(select);
				if( select.data('selectBox-control') ) return false;

				var control = $('<a class="selectBox" />'),
					inline = select.attr('multiple') || parseInt(select.attr('size')) > 1;

				var settings = data || {};
				
				control
					.width(select.outerWidth())
					.addClass(select.attr('class'))
					.attr('title', select.attr('title') || '')
					.attr('tabindex', parseInt(select.attr('tabindex')))
					.css('display', 'inline-block')
					.bind('focus.selectBox', function() {
						if( this !== document.activeElement ) $(document.activeElement).blur();
						if( control.hasClass('selectBox-active') ) return;
						control.addClass('selectBox-active');
						select.trigger('focus');
					})
					.bind('blur.selectBox', function() {
						if( !control.hasClass('selectBox-active') ) return;
						control.removeClass('selectBox-active');
						select.trigger('blur');
					});
				
				if( !$(window).data('selectBox-bindings') ) {
					$(window)
						.data('selectBox-bindings', true)
						.bind('scroll.selectBox', hideMenus)
						.bind('resize.selectBox', hideMenus);
				}
				
				if( select.attr('disabled') ) control.addClass('selectBox-disabled');
				
				// Focus on control when label is clicked
				select.bind('click.selectBox', function(event) {
					control.focus();
					event.preventDefault();
				});

				// Generate control
				if( inline ) {

					//
					// Inline controls
					//
					options = getOptions(select, 'inline');

					control
						.append(options)
						.data('selectBox-options', options)
						.addClass('selectBox-inline selectBox-menuShowing')
						.bind('keydown.selectBox', function(event) {
							handleKeyDown(select, event);
						})
						.bind('keypress.selectBox', function(event) {
							handleKeyPress(select, event);
						})
						.bind('mousedown.selectBox', function(event) {
							if( $(event.target).is('A.selectBox-inline') ) event.preventDefault();
							if( !control.hasClass('selectBox-focus') ) control.focus();
						})
						.insertAfter(select);

					// Auto-height based on size attribute
					if( !select[0].style.height ) {

						var size = select.attr('size') ? parseInt(select.attr('size')) : 5;

						// Draw a dummy control off-screen, measure, and remove it
						var tmp = control
							.clone()
							.removeAttr('id')
							.css({
								position: 'absolute',
								top: '-9999em'
							})
							.show()
							.appendTo('body');
						tmp.find('.selectBox-options').html('<li><a>\u00A0</a></li>');
						var optionHeight = parseInt(tmp.find('.selectBox-options A:first').html('&nbsp;').outerHeight());
						tmp.remove();

						control.height(optionHeight * size);

					}

					disableSelection(control);

				} else {

					//
					// Dropdown controls
					//
					var label = $('<span class="selectBox-label" />'),
						arrow = $('<span class="selectBox-arrow" />');
					
					// Update label
					label
						.attr('class', getLabelClass(select))
						.text(getLabelText(select));
					
					options = getOptions(select, 'dropdown');
					options.appendTo('BODY');

					control
						.data('selectBox-options', options)
						.addClass('selectBox-dropdown')
						.append(label)
						.append(arrow)
						.bind('mousedown.selectBox', function(event) {
							if( control.hasClass('selectBox-menuShowing') ) {
								hideMenus();
							} else {
								event.stopPropagation();
								// Webkit fix to prevent premature selection of options
								options.data('selectBox-down-at-x', event.screenX).data('selectBox-down-at-y', event.screenY);
								showMenu(select);
							}
						})
						.bind('keydown.selectBox', function(event) {
							handleKeyDown(select, event);
						})
						.bind('keypress.selectBox', function(event) {
							handleKeyPress(select, event);
						})
						.insertAfter(select);
					
					// Set label width
					var labelWidth = control.width() - arrow.outerWidth() - parseInt(label.css('paddingLeft')) - parseInt(label.css('paddingLeft'));
					label.width(labelWidth);
					
					disableSelection(control);
					
				}

				// Store data for later use and show the control
				select
					.addClass('selectBox')
					.data('selectBox-control', control)
					.data('selectBox-settings', settings)
					.hide();
				
			};


			var getOptions = function(select, type) {
				var options;

				// Private function to handle recursion in the getOptions function.
				var _getOptions = function(select, options) {
					// Loop through the set in order of element children.
					select.children('OPTION, OPTGROUP').each( function() {
						// If the element is an option, add it to the list.
						if ($(this).is('OPTION')) {
							// Check for a value in the option found.
							if($(this).length > 0) {
								// Create an option form the found element.
								generateOptions($(this), options);
							}
							else {
								// No option information found, so add an empty.
								options.append('<li>\u00A0</li>');
							}
						}
						else {
							// If the element is an option group, add the group and call this function on it.
							var optgroup = $('<li class="selectBox-optgroup" />');
							optgroup.text($(this).attr('label'));
							options.append(optgroup);			
							options = _getOptions($(this), options);
						}
					});
					// Return the built string.
					return options;
				}

				switch( type ) {

					case 'inline':

						options = $('<ul class="selectBox-options" />');
						options = _getOptions(select, options);
						
						options
							.find('A')
								.bind('mouseover.selectBox', function(event) {
									addHover(select, $(this).parent());
								})
								.bind('mouseout.selectBox', function(event) {
									removeHover(select, $(this).parent());
								})
								.bind('mousedown.selectBox', function(event) {
									event.preventDefault(); // Prevent options from being "dragged"
									if( !select.selectBox('control').hasClass('selectBox-active') ) select.selectBox('control').focus();
								})
								.bind('mouseup.selectBox', function(event) {
									hideMenus();
									selectOption(select, $(this).parent(), event);
								});

						disableSelection(options);

						return options;

					case 'dropdown':
						options = $('<ul class="selectBox-dropdown-menu selectBox-options" />');
						options = _getOptions(select, options);

						options
							.data('selectBox-select', select)
							.css('display', 'none')
							.appendTo('BODY')
							.find('A')
								.bind('mousedown.selectBox', function(event) {
									event.preventDefault(); // Prevent options from being "dragged"
									if( event.screenX === options.data('selectBox-down-at-x') && event.screenY === options.data('selectBox-down-at-y') ) {
										options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');
										hideMenus();
									}
								})
								.bind('mouseup.selectBox', function(event) {
									if( event.screenX === options.data('selectBox-down-at-x') && event.screenY === options.data('selectBox-down-at-y') ) {
										return;
									} else {
										options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');
									}
									selectOption(select, $(this).parent());
									hideMenus();
								}).bind('mouseover.selectBox', function(event) {
									addHover(select, $(this).parent());
								})
								.bind('mouseout.selectBox', function(event) {
									removeHover(select, $(this).parent());
								});
						
						// Inherit classes for dropdown menu
						var classes = select.attr('class') || '';
						if( classes !== '' ) {
							classes = classes.split(' ');
							for( var i in classes ) options.addClass(classes[i] + '-selectBox-dropdown-menu');
						}						

						disableSelection(options);

						return options;

				}

			};
			
			
			var getLabelClass = function(select) {
				var selected = $(select).find('OPTION:selected');
				return ('selectBox-label ' + (selected.attr('class') || '')).replace(/\s+$/, '');
			};
			
			
			var getLabelText = function(select) {
				var selected = $(select).find('OPTION:selected');
				return selected.text() || '\u00A0';
			};
			
			
			var setLabel = function(select) {
				select = $(select);
				var control = select.data('selectBox-control');
				if( !control ) return;
				control.find('.selectBox-label').attr('class', getLabelClass(select)).text(getLabelText(select));
			};
			
			
			var destroy = function(select) {

				select = $(select);
				var control = select.data('selectBox-control');
				if( !control ) return;
				var options = control.data('selectBox-options');

				options.remove();
				control.remove();
				select
					.removeClass('selectBox')
					.removeData('selectBox-control').data('selectBox-control', null)
					.removeData('selectBox-settings').data('selectBox-settings', null)
					.show();

			};
			
			
			var refresh = function(select) {
				select = $(select);
				select.selectBox('options', select.html());
			};

			
			var showMenu = function(select) {

				select = $(select);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings'),
					options = control.data('selectBox-options');
				if( control.hasClass('selectBox-disabled') ) return false;

				hideMenus();

				var borderBottomWidth = isNaN(control.css('borderBottomWidth')) ? 0 : parseInt(control.css('borderBottomWidth'));
				
				// Menu position
				options
					.width(control.innerWidth())
					.css({
						top: control.offset().top + control.outerHeight() - borderBottomWidth,
						left: control.offset().left
					});

				// Show menu
				switch( settings.menuTransition ) {

					case 'fade':
						options.fadeIn(settings.menuSpeed);
						break;

					case 'slide':
						options.slideDown(settings.menuSpeed);
						break;

					default:
						options.show(settings.menuSpeed);
						break;

				}

				// Center on selected option
				var li = options.find('.selectBox-selected:first');
				keepOptionInView(select, li, true);
				addHover(select, li);

				control.addClass('selectBox-menuShowing');

				$(document).bind('mousedown.selectBox', function(event) {
					if( $(event.target).parents().andSelf().hasClass('selectBox-options') ) return;
					hideMenus();
				});

			};


			var hideMenus = function() {

				if( $(".selectBox-dropdown-menu").length === 0 ) return;
				$(document).unbind('mousedown.selectBox');

				$(".selectBox-dropdown-menu").each( function() {

					var options = $(this),
						select = options.data('selectBox-select'),
						control = select.data('selectBox-control'),
						settings = select.data('selectBox-settings');

					switch( settings.menuTransition ) {

						case 'fade':
							options.fadeOut(settings.menuSpeed);
							break;

						case 'slide':
							options.slideUp(settings.menuSpeed);
							break;

						default:
							options.hide(settings.menuSpeed);
							break;

					}

					control.removeClass('selectBox-menuShowing');

				});

			};


			var selectOption = function(select, li, event) {

				select = $(select);
				li = $(li);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings');

				if( control.hasClass('selectBox-disabled') ) return false;
				if( li.length === 0 || li.hasClass('selectBox-disabled') ) return false;

				if( select.attr('multiple') ) {

					// If event.shiftKey is true, this will select all options between li and the last li selected
					if( event.shiftKey && control.data('selectBox-last-selected') ) {

						li.toggleClass('selectBox-selected');

						var affectedOptions;
						if( li.index() > control.data('selectBox-last-selected').index() ) {
							affectedOptions = li.siblings().slice(control.data('selectBox-last-selected').index(), li.index());
						} else {
							affectedOptions = li.siblings().slice(li.index(), control.data('selectBox-last-selected').index());
						}

						affectedOptions = affectedOptions.not('.selectBox-optgroup, .selectBox-disabled');

						if( li.hasClass('selectBox-selected') ) {
							affectedOptions.addClass('selectBox-selected');
						} else {
							affectedOptions.removeClass('selectBox-selected');
						}

					} else if( (isMac && event.metaKey) || (!isMac && event.ctrlKey) ) {
						console.log(isMac);
						li.toggleClass('selectBox-selected');
					} else {
						li.siblings().removeClass('selectBox-selected');
						li.addClass('selectBox-selected');
					}

				} else {
					li.siblings().removeClass('selectBox-selected');
					li.addClass('selectBox-selected');
				}

				if( control.hasClass('selectBox-dropdown') ) {
					control.find('.selectBox-label').text(li.text());
				}
				
				// Update original control's value
				var i = 0, selection = [];
				if( select.attr('multiple') ) {
					control.find('.selectBox-selected A').each( function() {
						selection[i++] = $(this).attr('rel');
					});
				} else {
					selection = li.find('A').attr('rel');
				}
				
				// Remember most recently selected item
				control.data('selectBox-last-selected', li);

				// Change callback
				if( select.val() !== selection ) {
					select.val(selection);
					setLabel(select);
					select.trigger('change');
				}

				return true;

			};


			var addHover = function(select, li) {
				select = $(select);
				li = $(li);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');

				options.find('.selectBox-hover').removeClass('selectBox-hover');
				li.addClass('selectBox-hover');
			};


			var removeHover = function(select, li) {
				select = $(select);
				li = $(li);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');
				options.find('.selectBox-hover').removeClass('selectBox-hover');
			};


			var keepOptionInView = function(select, li, center) {

				if( !li || li.length === 0 ) return;

				select = $(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options'),
					scrollBox = control.hasClass('selectBox-dropdown') ? options : options.parent(),
					top = parseInt(li.offset().top - scrollBox.position().top),
					bottom = parseInt(top + li.outerHeight());

				if( center ) {
					scrollBox.scrollTop( li.offset().top - scrollBox.offset().top + scrollBox.scrollTop() - (scrollBox.height() / 2) );
				} else {
					if( top < 0 ) {
						scrollBox.scrollTop( li.offset().top - scrollBox.offset().top + scrollBox.scrollTop() );
					}
					if( bottom > scrollBox.height() ) {
						scrollBox.scrollTop( (li.offset().top + li.outerHeight()) - scrollBox.offset().top + scrollBox.scrollTop() - scrollBox.height() );
					}
				}

			};


			var handleKeyDown = function(select, event) {

				//
				// Handles open/close and arrow key functionality
				//

				select = $(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options'),
					settings = select.data('selectBox-settings'),
					totalOptions = 0,
					i = 0;

				if( control.hasClass('selectBox-disabled') ) return;

				switch( event.keyCode ) {

					case 8: // backspace
						event.preventDefault();
						typeSearch = '';
						break;

					case 9: // tab
					case 27: // esc
						hideMenus();
						removeHover(select);
						break;

					case 13: // enter
						if( control.hasClass('selectBox-menuShowing') ) {
							selectOption(select, options.find('LI.selectBox-hover:first'), event);
							if( control.hasClass('selectBox-dropdown') ) hideMenus();
						} else {
							showMenu(select);
						}
						break;

					case 38: // up
					case 37: // left

						event.preventDefault();

						if( control.hasClass('selectBox-menuShowing') ) {

							var prev = options.find('.selectBox-hover').prev('LI');
							totalOptions = options.find('LI:not(.selectBox-optgroup)').length;
							i = 0;

							while( prev.length === 0 || prev.hasClass('selectBox-disabled') || prev.hasClass('selectBox-optgroup') ) {
								prev = prev.prev('LI');
								if( prev.length === 0 ) {
									if (settings.loopOptions) {
										prev = options.find('LI:last');
									} else {
										prev = options.find('LI:first');
									}
								}
								if( ++i >= totalOptions ) break;
							}

							addHover(select, prev);
							selectOption(select, prev, event);
							keepOptionInView(select, prev);

						} else {
							showMenu(select);
						}

						break;

					case 40: // down
					case 39: // right

						event.preventDefault();

						if( control.hasClass('selectBox-menuShowing') ) {

							var next = options.find('.selectBox-hover').next('LI');
							totalOptions = options.find('LI:not(.selectBox-optgroup)').length;
							i = 0;

							while( next.length === 0 || next.hasClass('selectBox-disabled') || next.hasClass('selectBox-optgroup') ) {
								next = next.next('LI');
								if( next.length === 0 ) {
									if (settings.loopOptions) {
										next = options.find('LI:first');
									} else {
										next = options.find('LI:last');
									}
								}
								if( ++i >= totalOptions ) break;
							}

							addHover(select, next);
							selectOption(select, next, event);
							keepOptionInView(select, next);

						} else {
							showMenu(select);
						}

						break;

				}

			};


			var handleKeyPress = function(select, event) {

				//
				// Handles type-to-find functionality
				//

				select = $(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');

				if( control.hasClass('selectBox-disabled') ) return;

				switch( event.keyCode ) {

					case 9: // tab
					case 27: // esc
					case 13: // enter
					case 38: // up
					case 37: // left
					case 40: // down
					case 39: // right
						// Don't interfere with the keydown event!
						break;

					default: // Type to find

						if( !control.hasClass('selectBox-menuShowing') ) showMenu(select);

						event.preventDefault();

						clearTimeout(typeTimer);
						typeSearch += String.fromCharCode(event.charCode || event.keyCode);

						options.find('A').each( function() {
							if( $(this).text().substr(0, typeSearch.length).toLowerCase() === typeSearch.toLowerCase() ) {
								addHover(select, $(this).parent());
								keepOptionInView(select, $(this).parent());
								return false;
							}
						});

						// Clear after a brief pause
						typeTimer = setTimeout( function() { typeSearch = ''; }, 1000);

						break;

				}

			};


			var enable = function(select) {
				select = $(select);
				select.attr('disabled', false);
				var control = select.data('selectBox-control');
				if( !control ) return;
				control.removeClass('selectBox-disabled');
			};


			var disable = function(select) {
				select = $(select);
				select.attr('disabled', true);
				var control = select.data('selectBox-control');
				if( !control ) return;
				control.addClass('selectBox-disabled');
			};


			var setValue = function(select, value) {
				select = $(select);
				select.val(value);
				value = select.val();
				var control = select.data('selectBox-control');
				if( !control ) return;
				var settings = select.data('selectBox-settings'),
					options = control.data('selectBox-options');

				// Update label
				setLabel(select);
				
				// Update control values
				options.find('.selectBox-selected').removeClass('selectBox-selected');
				options.find('A').each( function() {
					if( typeof(value) === 'object' ) {
						for( var i = 0; i < value.length; i++ ) {
							if( $(this).attr('rel') == value[i] ) {
								$(this).parent().addClass('selectBox-selected');
							}
						}
					} else {
						if( $(this).attr('rel') == value ) {
							$(this).parent().addClass('selectBox-selected');
						}
					}
				});

				if( settings.change ) settings.change.call(select);

			};


			var setOptions = function(select, options) {

				select = $(select);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings');

				switch( typeof(data) ) {

					case 'string':
						select.html(data);
						break;

					case 'object':
						select.html('');
						for( var i in data ) {
							if( data[i] === null ) continue;
							if( typeof(data[i]) === 'object' ) {
								var optgroup = $('<optgroup label="' + i + '" />');
								for( var j in data[i] ) {
									optgroup.append('<option value="' + j + '">' + data[i][j] + '</option>');
								}
								select.append(optgroup);
							} else {
								var option = $('<option value="' + i + '">' + data[i] + '</option>');
								select.append(option);
							}
						}
						break;

				}

				if( !control ) return;

				// Remove old options
				control.data('selectBox-options').remove();

				// Generate new options
				var type = control.hasClass('selectBox-dropdown') ? 'dropdown' : 'inline',
					options = getOptions(select, type);
				control.data('selectBox-options', options);

				switch( type ) {
					case 'inline':
						control.append(options);
						break;
					case 'dropdown':
						// Update label
						setLabel(select);
						$("BODY").append(options);
						break;
				}

			};


			var disableSelection = function(selector) {
				$(selector)
					.css('MozUserSelect', 'none')
					.bind('selectstart', function(event) {
						event.preventDefault();
					});
			};

			var generateOptions = function(self, options){
				var li = $('<li />'),
				a = $('<a />');
				li.addClass( self.attr('class') );
				li.data( self.data() );
				a.attr('rel', self.val()).text( self.text() );
				li.append(a);
				if( self.attr('disabled') ) li.addClass('selectBox-disabled');
				if( self.attr('selected') ) li.addClass('selectBox-selected');
				options.append(li);
			};

			//
			// Public methods
			//

			switch( method ) {

				case 'control':
					return $(this).data('selectBox-control');

				case 'settings':
					if( !data ) return $(this).data('selectBox-settings');
					$(this).each( function() {
						$(this).data('selectBox-settings', $.extend(true, $(this).data('selectBox-settings'), data));
					});
					break;

				case 'options':
					$(this).each( function() {
						setOptions(this, data);
					});
					break;

				case 'value':
                    // Empty string is a valid value
					if( data === undefined ) return $(this).val();
					$(this).each( function() {
						setValue(this, data);
					});
					break;
				
				case 'refresh':
					$(this).each( function() {
						refresh(this);
					});
					break;

				case 'enable':
					$(this).each( function() {
						enable(this);
					});
					break;

				case 'disable':
					$(this).each( function() {
						disable(this);
					});
					break;

				case 'destroy':
					$(this).each( function() {
						destroy(this);
					});
					break;

				default:
					$(this).each( function() {
						init(this, method);
					});
					break;

			}

			return $(this);

		}

	});

})(jQuery);
/*jshint undef: true */
/*global jQuery: true */

/*
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.0b2.120519
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license

   + Documentation: http://infinite-scroll.com/
*/

(function (window, $, undefined) {
	"use strict";

    $.infinitescroll = function infscr(options, callback, element) {
        this.element = $(element);

        // Flag the object in the event of a failed creation
        if (!this._create(options, callback)) {
            this.failed = true;
        }
    };

    $.infinitescroll.defaults = {
        loading: {
            finished: undefined,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
			img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
            msg: null,
            msgText: "<em>Loading the next set of posts...</em>",
            selector: null,
            speed: 'fast',
            start: undefined
        },
        state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false, // For when it goes all the way through the archive.
            isPaused: false,
            isBeyondMaxPage: false,
            currPage: 1
        },
        debug: false,
		behavior: undefined,
        binder: $(window), // used to cache the selector
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null, // rename to pageFragment
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: false,
        pathParse: undefined,
        dataType: 'html',
        appendCallback: true,
        bufferPx: 40,
        errorCallback: function () { },
        infid: 0, //Instance ID
        pixelsFromNavToBottom: undefined,
        path: undefined, // Either parts of a URL as an array (e.g. ["/page/", "/"] or a function that takes in the page number and returns a URL
		prefill: false, // When the document is smaller than the window, load data until the document is larger or links are exhausted
        maxPage: undefined // to manually control maximum page (when maxPage is undefined, maximum page limitation is not work)
	};

    $.infinitescroll.prototype = {

        /*	
            ----------------------------
            Private methods
            ----------------------------
            */

        // Bind or unbind from scroll
        _binding: function infscr_binding(binding) {

            var instance = this,
            opts = instance.options;

            opts.v = '2.0b2.120520';

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_binding_'+opts.behavior] !== undefined) {
                this['_binding_'+opts.behavior].call(this);
                return;
            }

            if (binding !== 'bind' && binding !== 'unbind') {
                this._debug('Binding value  ' + binding + ' not valid');
                return false;
            }

            if (binding === 'unbind') {
                (this.options.binder).unbind('smartscroll.infscr.' + instance.options.infid);
            } else {
                (this.options.binder)[binding]('smartscroll.infscr.' + instance.options.infid, function () {
                    instance.scroll();
                });
            }

            this._debug('Binding', binding);
        },

        // Fundamental aspects of the plugin are initialized
        _create: function infscr_create(options, callback) {

            // Add custom options to defaults
            var opts = $.extend(true, {}, $.infinitescroll.defaults, options);
			this.options = opts;
			var $window = $(window);
			var instance = this;

			// Validate selectors
            if (!instance._validate(options)) {
				return false;
			}

            // Validate page fragment path
            var path = $(opts.nextSelector).attr('href');
            if (!path) {
                this._debug('Navigation selector not found');
                return false;
            }

            // Set the path to be a relative URL from root.
            opts.path = opts.path || this._determinepath(path);

            // contentSelector is 'page fragment' option for .load() / .ajax() calls
            opts.contentSelector = opts.contentSelector || this.element;

            // loading.selector - if we want to place the load message in a specific selector, defaulted to the contentSelector
            opts.loading.selector = opts.loading.selector || opts.contentSelector;

            // Define loading.msg
            opts.loading.msg = opts.loading.msg || $('<div id="infscr-loading"><img alt="Loading..." src="' + opts.loading.img + '" /><div>' + opts.loading.msgText + '</div></div>');

            // Preload loading.img
            (new Image()).src = opts.loading.img;

            // distance from nav links to bottom
            // computed as: height of the document + top offset of container - top offset of nav link
            if(opts.pixelsFromNavToBottom === undefined) {
				opts.pixelsFromNavToBottom = $(document).height() - $(opts.navSelector).offset().top;
				this._debug("pixelsFromNavToBottom: " + opts.pixelsFromNavToBottom);
			}

			var self = this;

            // determine loading.start actions
            opts.loading.start = opts.loading.start || function() {
                $(opts.navSelector).hide();
                opts.loading.msg
                .appendTo(opts.loading.selector)
                .show(opts.loading.speed, $.proxy(function() {
					this.beginAjax(opts);
				}, self));
            };

            // determine loading.finished actions
            opts.loading.finished = opts.loading.finished || function() {
                if (!opts.state.isBeyondMaxPage)
                    opts.loading.msg.fadeOut(opts.loading.speed);
            };

			// callback loading
            opts.callback = function(instance, data, url) {
                if (!!opts.behavior && instance['_callback_'+opts.behavior] !== undefined) {
                    instance['_callback_'+opts.behavior].call($(opts.contentSelector)[0], data, url);
                }

                if (callback) {
                    callback.call($(opts.contentSelector)[0], data, opts, url);
                }

				if (opts.prefill) {
					$window.bind("resize.infinite-scroll", instance._prefill);
				}
            };

			if (options.debug) {
				// Tell IE9 to use its built-in console
				if (Function.prototype.bind && (typeof console === 'object' || typeof console === 'function') && typeof console.log === "object") {
					["log","info","warn","error","assert","dir","clear","profile","profileEnd"]
						.forEach(function (method) {
							console[method] = this.call(console[method], console);
						}, Function.prototype.bind);
				}
			}

            this._setup();

			// Setups the prefill method for use
			if (opts.prefill) {
				this._prefill();
			}

            // Return true to indicate successful creation
            return true;
        },

		_prefill: function infscr_prefill() {
			var instance = this;
			var $window = $(window);

			function needsPrefill() {
				return (instance.options.contentSelector.height() <= $window.height());
			}

			this._prefill = function() {
				if (needsPrefill()) {
					instance.scroll();
				}

				$window.bind("resize.infinite-scroll", function() {
					if (needsPrefill()) {
						$window.unbind("resize.infinite-scroll");
						instance.scroll();
					}
				});
			};

			// Call self after setting up the new function
			this._prefill();
		},

        // Console log wrapper
        _debug: function infscr_debug() {
			if (true !== this.options.debug) {
				return;
			}

			if (typeof console !== 'undefined' && typeof console.log === 'function') {
				// Modern browsers
				// Single argument, which is a string
				if ((Array.prototype.slice.call(arguments)).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === 'string') {
					console.log( (Array.prototype.slice.call(arguments)).toString() );
				} else {
					console.log( Array.prototype.slice.call(arguments) );
				}
			} else if (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object') {
				// IE8
				Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
			}
        },

        // find the number to increment in the path.
        _determinepath: function infscr_determinepath(path) {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_determinepath_'+opts.behavior] !== undefined) {
                return this['_determinepath_'+opts.behavior].call(this,path);
            }

            if (!!opts.pathParse) {

                this._debug('pathParse manual');
                return opts.pathParse(path, this.options.state.currPage+1);

            } else if (path.match(/^(.*?)\b2\b(.*?$)/)) {
                path = path.match(/^(.*?)\b2\b(.*?$)/).slice(1);

                // if there is any 2 in the url at all.    
            } else if (path.match(/^(.*?)2(.*?$)/)) {

                // page= is used in django:
                // http://www.infinite-scroll.com/changelog/comment-page-1/#comment-127
                if (path.match(/^(.*?page=)2(\/.*|$)/)) {
                    path = path.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    return path;
                }

                path = path.match(/^(.*?)2(.*?$)/).slice(1);

            } else {

                // page= is used in drupal too but second page is page=1 not page=2:
                // thx Jerod Fritz, vladikoff
                if (path.match(/^(.*?page=)1(\/.*|$)/)) {
                    path = path.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    return path;
                } else {
                    this._debug('Sorry, we couldn\'t parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.');
                    // Get rid of isInvalidPage to allow permalink to state
                    opts.state.isInvalidPage = true;  //prevent it from running on this page.
                }
            }
            this._debug('determinePath', path);
            return path;

        },

        // Custom error
        _error: function infscr_error(xhr) {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_error_'+opts.behavior] !== undefined) {
                this['_error_'+opts.behavior].call(this,xhr);
                return;
            }

            if (xhr !== 'destroy' && xhr !== 'end') {
                xhr = 'unknown';
            }

            this._debug('Error', xhr);

            if (xhr === 'end' || opts.state.isBeyondMaxPage) {
                this._showdonemsg();
            }

            opts.state.isDone = true;
            opts.state.currPage = 1; // if you need to go back to this instance
            opts.state.isPaused = false;
            opts.state.isBeyondMaxPage = false;
            this._binding('unbind');

        },

        // Load Callback
        _loadcallback: function infscr_loadcallback(box, data, url) {
            var opts = this.options,
            callback = this.options.callback, // GLOBAL OBJECT FOR CALLBACK
            result = (opts.state.isDone) ? 'done' : (!opts.appendCallback) ? 'no-append' : 'append',
            frag;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_loadcallback_'+opts.behavior] !== undefined) {
                this['_loadcallback_'+opts.behavior].call(this,box,data);
                return;
            }

			switch (result) {
				case 'done':
					this._showdonemsg();
					return false;

				case 'no-append':
					if (opts.dataType === 'html') {
						data = '<div>' + data + '</div>';
						data = $(data).find(opts.itemSelector);
					}
					break;

				case 'append':
					var children = box.children();
					// if it didn't return anything
					if (children.length === 0) {
						return this._error('end');
					}

					// use a documentFragment because it works when content is going into a table or UL
					frag = document.createDocumentFragment();
					while (box[0].firstChild) {
						frag.appendChild(box[0].firstChild);
					}

					this._debug('contentSelector', $(opts.contentSelector)[0]);
					$(opts.contentSelector)[0].appendChild(frag);
					// previously, we would pass in the new DOM element as context for the callback
					// however we're now using a documentfragment, which doesn't have parents or children,
					// so the context is the contentContainer guy, and we pass in an array
					// of the elements collected as the first argument.

					data = children.get();
					break;
			}

            // loadingEnd function
            opts.loading.finished.call($(opts.contentSelector)[0],opts);

            // smooth scroll to ease in the new content
            if (opts.animate) {
                var scrollTo = $(window).scrollTop() + $(opts.loading.msg).height() + opts.extraScrollPx + 'px';
                $('html,body').animate({ scrollTop: scrollTo }, 800, function () { opts.state.isDuringAjax = false; });
            }

            if (!opts.animate) {
				// once the call is done, we can allow it again.
				opts.state.isDuringAjax = false;
			}

            callback(this, data, url);

			if (opts.prefill) {
				this._prefill();
			}
		},

        _nearbottom: function infscr_nearbottom() {

            var opts = this.options,
            pixelsFromWindowBottomToBottom = 0 + $(document).height() - (opts.binder.scrollTop()) - $(window).height();

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_nearbottom_'+opts.behavior] !== undefined) {
                return this['_nearbottom_'+opts.behavior].call(this);
            }

            this._debug('math:', pixelsFromWindowBottomToBottom, opts.pixelsFromNavToBottom);

            // if distance remaining in the scroll (including buffer) is less than the orignal nav to bottom....
            return (pixelsFromWindowBottomToBottom - opts.bufferPx < opts.pixelsFromNavToBottom);

        },

        // Pause / temporarily disable plugin from firing
        _pausing: function infscr_pausing(pause) {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_pausing_'+opts.behavior] !== undefined) {
                this['_pausing_'+opts.behavior].call(this,pause);
                return;
            }

            // If pause is not 'pause' or 'resume', toggle it's value
            if (pause !== 'pause' && pause !== 'resume' && pause !== null) {
                this._debug('Invalid argument. Toggling pause value instead');
            }

            pause = (pause && (pause === 'pause' || pause === 'resume')) ? pause : 'toggle';

            switch (pause) {
                case 'pause':
                    opts.state.isPaused = true;
                break;

                case 'resume':
                    opts.state.isPaused = false;
                break;

                case 'toggle':
                    opts.state.isPaused = !opts.state.isPaused;
                break;
            }

            this._debug('Paused', opts.state.isPaused);
            return false;

        },

        // Behavior is determined
        // If the behavior option is undefined, it will set to default and bind to scroll
        _setup: function infscr_setup() {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_setup_'+opts.behavior] !== undefined) {
                this['_setup_'+opts.behavior].call(this);
                return;
            }

            this._binding('bind');

            return false;

        },

        // Show done message
        _showdonemsg: function infscr_showdonemsg() {

            var opts = this.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_showdonemsg_'+opts.behavior] !== undefined) {
                this['_showdonemsg_'+opts.behavior].call(this);
                return;
            }

            opts.loading.msg
            .find('img')
            .hide()
            .parent()
            .find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
                $(this).parent().fadeOut(opts.loading.speed);
            });

            // user provided callback when done    
            opts.errorCallback.call($(opts.contentSelector)[0],'done');
        },

        // grab each selector option and see if any fail
        _validate: function infscr_validate(opts) {
            for (var key in opts) {
                if (key.indexOf && key.indexOf('Selector') > -1 && $(opts[key]).length === 0) {
                    this._debug('Your ' + key + ' found no elements.');
                    return false;
                }
            }

            return true;
        },

        /*	
            ----------------------------
            Public methods
            ----------------------------
            */

        // Bind to scroll
        bind: function infscr_bind() {
            this._binding('bind');
        },

        // Destroy current instance of plugin
        destroy: function infscr_destroy() {
            this.options.state.isDestroyed = true;
			this.options.loading.finished();
            return this._error('destroy');
        },

        // Set pause value to false
        pause: function infscr_pause() {
            this._pausing('pause');
        },

        // Set pause value to false
        resume: function infscr_resume() {
            this._pausing('resume');
        },

		beginAjax: function infscr_ajax(opts) {
			var instance = this,
				path = opts.path,
				box, desturl, method, condition;

			// increment the URL bit. e.g. /page/3/
			opts.state.currPage++;

            // Manually control maximum page 
            if ( opts.maxPage != undefined && opts.state.currPage > opts.maxPage ){
                opts.state.isBeyondMaxPage = true;
                this.destroy();
                return;
            }

			// if we're dealing with a table we can't use DIVs
			box = $(opts.contentSelector).is('table, tbody') ? $('<tbody/>') : $('<div/>');

			desturl = (typeof path === 'function') ? path(opts.state.currPage) : path.join(opts.state.currPage);
			instance._debug('heading into ajax', desturl);

			method = (opts.dataType === 'html' || opts.dataType === 'json' ) ? opts.dataType : 'html+callback';
			if (opts.appendCallback && opts.dataType === 'html') {
				method += '+callback';
			}

			switch (method) {
				case 'html+callback':
					instance._debug('Using HTML via .load() method');
					box.load(desturl + ' ' + opts.itemSelector, undefined, function infscr_ajax_callback(responseText) {
						instance._loadcallback(box, responseText, desturl);
					});

					break;

				case 'html':
					instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
					$.ajax({
						// params
						url: desturl,
						dataType: opts.dataType,
						complete: function infscr_ajax_callback(jqXHR, textStatus) {
							condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === "success" || textStatus === "notmodified");
							if (condition) {
								instance._loadcallback(box, jqXHR.responseText, desturl);
							} else {
								instance._error('end');
							}
						}
					});

					break;
				case 'json':
					instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
					$.ajax({
						dataType: 'json',
						type: 'GET',
						url: desturl,
						success: function (data, textStatus, jqXHR) {
							condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === "success" || textStatus === "notmodified");
							if (opts.appendCallback) {
								// if appendCallback is true, you must defined template in options.
								// note that data passed into _loadcallback is already an html (after processed in opts.template(data)).
								if (opts.template !== undefined) {
									var theData = opts.template(data);
									box.append(theData);
									if (condition) {
										instance._loadcallback(box, theData);
									} else {
										instance._error('end');
									}
								} else {
									instance._debug("template must be defined.");
									instance._error('end');
								}
							} else {
								// if appendCallback is false, we will pass in the JSON object. you should handle it yourself in your callback.
								if (condition) {
									instance._loadcallback(box, data, desturl);
								} else {
									instance._error('end');
								}
							}
						},
						error: function() {
							instance._debug("JSON ajax request failed.");
							instance._error('end');
						}
					});

					break;
			}
		},

        // Retrieve next set of content items
        retrieve: function infscr_retrieve(pageNum) {
			pageNum = pageNum || null;

			var instance = this,
            opts = instance.options;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['retrieve_'+opts.behavior] !== undefined) {
                this['retrieve_'+opts.behavior].call(this,pageNum);
                return;
            }

            // for manual triggers, if destroyed, get out of here
            if (opts.state.isDestroyed) {
                this._debug('Instance is destroyed');
                return false;
            }

            // we dont want to fire the ajax multiple times
            opts.state.isDuringAjax = true;

            opts.loading.start.call($(opts.contentSelector)[0],opts);
        },

        // Check to see next page is needed
        scroll: function infscr_scroll() {

            var opts = this.options,
            state = opts.state;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['scroll_'+opts.behavior] !== undefined) {
                this['scroll_'+opts.behavior].call(this);
                return;
            }

            if (state.isDuringAjax || state.isInvalidPage || state.isDone || state.isDestroyed || state.isPaused) {
				return;
			}

            if (!this._nearbottom()) {
				return;
			}

            this.retrieve();

        },

        // Toggle pause value
        toggle: function infscr_toggle() {
            this._pausing();
        },

        // Unbind from scroll
        unbind: function infscr_unbind() {
            this._binding('unbind');
        },

        // update options
        update: function infscr_options(key) {
            if ($.isPlainObject(key)) {
                this.options = $.extend(true,this.options,key);
            }
        }
    };


    /*	
        ----------------------------
        Infinite Scroll function
        ----------------------------

        Borrowed logic from the following...

        jQuery UI
        - https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js

        jCarousel
        - https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js

        Masonry
        - https://github.com/desandro/masonry/blob/master/jquery.masonry.js		

*/

    $.fn.infinitescroll = function infscr_init(options, callback) {


        var thisCall = typeof options;

        switch (thisCall) {

            // method 
            case 'string':
                var args = Array.prototype.slice.call(arguments, 1);

				this.each(function () {
					var instance = $.data(this, 'infinitescroll');

					if (!instance) {
						// not setup yet
						// return $.error('Method ' + options + ' cannot be called until Infinite Scroll is setup');
						return false;
					}

					if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
						// return $.error('No such method ' + options + ' for Infinite Scroll');
						return false;
					}

					// no errors!
					instance[options].apply(instance, args);
				});

            break;

            // creation 
            case 'object':

                this.each(function () {

                var instance = $.data(this, 'infinitescroll');

                if (instance) {

                    // update options of current instance
                    instance.update(options);

                } else {

                    // initialize new instance
                    instance = new $.infinitescroll(options, callback, this);

                    // don't attach if instantiation failed
                    if (!instance.failed) {
                        $.data(this, 'infinitescroll', instance);
                    }

                }

            });

            break;

        }

        return this;
    };



    /* 
     * smartscroll: debounced scroll event for jQuery *
     * https://github.com/lukeshumard/smartscroll
     * Based on smartresize by @louis_remi: https://github.com/lrbabe/jquery.smartresize.js *
     * Copyright 2011 Louis-Remi & Luke Shumard * Licensed under the MIT license. *
     */

    var event = $.event,
    scrollTimeout;

    event.special.smartscroll = {
        setup: function () {
            $(this).bind("scroll", event.special.smartscroll.handler);
        },
        teardown: function () {
            $(this).unbind("scroll", event.special.smartscroll.handler);
        },
        handler: function (event, execAsap) {
            // Save the context
            var context = this,
            args = arguments;

            // set correct event type
            event.type = "smartscroll";

            if (scrollTimeout) { clearTimeout(scrollTimeout); }
            scrollTimeout = setTimeout(function () {
                $(context).trigger('smartscroll', args);
            }, execAsap === "execAsap" ? 0 : 100);
        }
    };

    $.fn.smartscroll = function (fn) {
        return fn ? this.bind("smartscroll", fn) : this.trigger("smartscroll", ["execAsap"]);
    };


})(window, jQuery);

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var mustache = {};
    factory(mustache);
    if (typeof define === "function" && define.amd) {
      define(mustache); // AMD
    } else {
      root.Mustache = mustache; // <script>
    }
  }
}(this, function (mustache) {

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;
  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (object) {
    return Object_toString.call(object) === '[object Array]';
  };

  function isFunction(object) {
    return typeof object === 'function';
  }

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function escapeTags(tags) {
    if (!isArray(tags) || tags.length !== 2) {
      throw new Error('Invalid tags: ' + tags);
    }

    return [
      new RegExp(escapeRegExp(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRegExp(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all template text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices
   * in the original template of the token, respectively.
   *
   * Tokens that are the root node of a subtree contain two more elements: an
   * array of tokens in the subtree and the index in the original template at which
   * the closing tag for that section begins.
   */
  function parseTemplate(template, tags) {
    tags = tags || mustache.tags;
    template = template || '';

    if (typeof tags === 'string') {
      tags = tags.split(spaceRe);
    }

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          delete tokens[spaces.pop()];
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(tagRes[0]);
      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(['text', chr, start, start + 1]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) break;
      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === '{') {
        value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = '&';
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error('Unclosed tag at ' + scanner.pos);
      }

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection) {
          throw new Error('Unopened section "' + value + '" at ' + start);
        }
        if (openSection[1] !== value) {
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
        }
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        tagRes = escapeTags(tags = value.split(spaceRe));
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();
    if (openSection) {
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    }

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      var string = match[0];
      this.tail = this.tail.substring(string.length);
      this.pos += string.length;
      return string;
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context(view, parentContext) {
    this.view = view == null ? {} : view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function (name) {
    var value;
    if (name in this.cache) {
      value = this.cache[name];
    } else {
      var context = this;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;

          var names = name.split('.'), i = 0;
          while (value != null && i < names.length) {
            value = value[names[i++]];
          }
        } else {
          value = context.view[name];
        }

        if (value != null) break;

        context = context.parent;
      }

      this.cache[name] = value;
    }

    if (isFunction(value)) {
      value = value.call(this.view);
    }

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer() {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null) {
      tokens = cache[template] = parseTemplate(template, tags);
    }

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
    var buffer = '';

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    var self = this;
    function subRender(template) {
      return self.render(template, context, partials);
    }

    var token, value;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
        value = context.lookup(token[1]);
        if (!value) continue;

        if (isArray(value)) {
          for (var j = 0, jlen = value.length; j < jlen; ++j) {
            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
          }
        } else if (typeof value === 'object' || typeof value === 'string') {
          buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
        } else if (isFunction(value)) {
          if (typeof originalTemplate !== 'string') {
            throw new Error('Cannot use higher-order sections without the original template');
          }

          // Extract the portion of the original template that the section contains.
          value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

          if (value != null) buffer += value;
        } else {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }

        break;
      case '^':
        value = context.lookup(token[1]);

        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || (isArray(value) && value.length === 0)) {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }

        break;
      case '>':
        if (!partials) continue;
        value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null) buffer += this.renderTokens(this.parse(value), context, partials, value);
        break;
      case '&':
        value = context.lookup(token[1]);
        if (value != null) buffer += value;
        break;
      case 'name':
        value = context.lookup(token[1]);
        if (value != null) buffer += mustache.escape(value);
        break;
      case 'text':
        buffer += token[1];
        break;
      }
    }

    return buffer;
  };

  mustache.name = "mustache.js";
  mustache.version = "0.8.1";
  mustache.tags = [ "{{", "}}" ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));

/*! jCarousel - v0.3.3 - 2015-02-28
 * http://sorgalla.com/jcarousel/
 * Copyright (c) 2006-2015 Jan Sorgalla; Licensed MIT */
(function($) {
    'use strict';

    var jCarousel = $.jCarousel = {};

    jCarousel.version = '0.3.3';

    var rRelativeTarget = /^([+\-]=)?(.+)$/;

    jCarousel.parseTarget = function(target) {
        var relative = false,
            parts    = typeof target !== 'object' ?
                rRelativeTarget.exec(target) :
                null;

        if (parts) {
            target = parseInt(parts[2], 10) || 0;

            if (parts[1]) {
                relative = true;
                if (parts[1] === '-=') {
                    target *= -1;
                }
            }
        } else if (typeof target !== 'object') {
            target = parseInt(target, 10) || 0;
        }

        return {
            target: target,
            relative: relative
        };
    };

    jCarousel.detectCarousel = function(element) {
        var carousel;

        while (element.length > 0) {
            carousel = element.filter('[data-jcarousel]');

            if (carousel.length > 0) {
                return carousel;
            }

            carousel = element.find('[data-jcarousel]');

            if (carousel.length > 0) {
                return carousel;
            }

            element = element.parent();
        }

        return null;
    };

    jCarousel.base = function(pluginName) {
        return {
            version:  jCarousel.version,
            _options:  {},
            _element:  null,
            _carousel: null,
            _init:     $.noop,
            _create:   $.noop,
            _destroy:  $.noop,
            _reload:   $.noop,
            create: function() {
                this._element
                    .attr('data-' + pluginName.toLowerCase(), true)
                    .data(pluginName, this);

                if (false === this._trigger('create')) {
                    return this;
                }

                this._create();

                this._trigger('createend');

                return this;
            },
            destroy: function() {
                if (false === this._trigger('destroy')) {
                    return this;
                }

                this._destroy();

                this._trigger('destroyend');

                this._element
                    .removeData(pluginName)
                    .removeAttr('data-' + pluginName.toLowerCase());

                return this;
            },
            reload: function(options) {
                if (false === this._trigger('reload')) {
                    return this;
                }

                if (options) {
                    this.options(options);
                }

                this._reload();

                this._trigger('reloadend');

                return this;
            },
            element: function() {
                return this._element;
            },
            options: function(key, value) {
                if (arguments.length === 0) {
                    return $.extend({}, this._options);
                }

                if (typeof key === 'string') {
                    if (typeof value === 'undefined') {
                        return typeof this._options[key] === 'undefined' ?
                            null :
                            this._options[key];
                    }

                    this._options[key] = value;
                } else {
                    this._options = $.extend({}, this._options, key);
                }

                return this;
            },
            carousel: function() {
                if (!this._carousel) {
                    this._carousel = jCarousel.detectCarousel(this.options('carousel') || this._element);

                    if (!this._carousel) {
                        $.error('Could not detect carousel for plugin "' + pluginName + '"');
                    }
                }

                return this._carousel;
            },
            _trigger: function(type, element, data) {
                var event,
                    defaultPrevented = false;

                data = [this].concat(data || []);

                (element || this._element).each(function() {
                    event = $.Event((pluginName + ':' + type).toLowerCase());

                    $(this).trigger(event, data);

                    if (event.isDefaultPrevented()) {
                        defaultPrevented = true;
                    }
                });

                return !defaultPrevented;
            }
        };
    };

    jCarousel.plugin = function(pluginName, pluginPrototype) {
        var Plugin = $[pluginName] = function(element, options) {
            this._element = $(element);
            this.options(options);

            this._init();
            this.create();
        };

        Plugin.fn = Plugin.prototype = $.extend(
            {},
            jCarousel.base(pluginName),
            pluginPrototype
        );

        $.fn[pluginName] = function(options) {
            var args        = Array.prototype.slice.call(arguments, 1),
                returnValue = this;

            if (typeof options === 'string') {
                this.each(function() {
                    var instance = $(this).data(pluginName);

                    if (!instance) {
                        return $.error(
                                'Cannot call methods on ' + pluginName + ' prior to initialization; ' +
                                'attempted to call method "' + options + '"'
                        );
                    }

                    if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                        return $.error(
                                'No such method "' + options + '" for ' + pluginName + ' instance'
                        );
                    }

                    var methodValue = instance[options].apply(instance, args);

                    if (methodValue !== instance && typeof methodValue !== 'undefined') {
                        returnValue = methodValue;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var instance = $(this).data(pluginName);

                    if (instance instanceof Plugin) {
                        instance.reload(options);
                    } else {
                        new Plugin(this, options);
                    }
                });
            }

            return returnValue;
        };

        return Plugin;
    };
}(jQuery));

(function($, window) {
    'use strict';

    var toFloat = function(val) {
        return parseFloat(val) || 0;
    };

    $.jCarousel.plugin('jcarousel', {
        animating:   false,
        tail:        0,
        inTail:      false,
        resizeTimer: null,
        lt:          null,
        vertical:    false,
        rtl:         false,
        circular:    false,
        underflow:   false,
        relative:    false,

        _options: {
            list: function() {
                return this.element().children().eq(0);
            },
            items: function() {
                return this.list().children();
            },
            animation:   400,
            transitions: false,
            wrap:        null,
            vertical:    null,
            rtl:         null,
            center:      false
        },

        // Protected, don't access directly
        _list:         null,
        _items:        null,
        _target:       $(),
        _first:        $(),
        _last:         $(),
        _visible:      $(),
        _fullyvisible: $(),
        _init: function() {
            var self = this;

            this.onWindowResize = function() {
                if (self.resizeTimer) {
                    clearTimeout(self.resizeTimer);
                }

                self.resizeTimer = setTimeout(function() {
                    self.reload();
                }, 100);
            };

            return this;
        },
        _create: function() {
            this._reload();

            $(window).on('resize.jcarousel', this.onWindowResize);
        },
        _destroy: function() {
            $(window).off('resize.jcarousel', this.onWindowResize);
        },
        _reload: function() {
            this.vertical = this.options('vertical');

            if (this.vertical == null) {
                this.vertical = this.list().height() > this.list().width();
            }

            this.rtl = this.options('rtl');

            if (this.rtl == null) {
                this.rtl = (function(element) {
                    if (('' + element.attr('dir')).toLowerCase() === 'rtl') {
                        return true;
                    }

                    var found = false;

                    element.parents('[dir]').each(function() {
                        if ((/rtl/i).test($(this).attr('dir'))) {
                            found = true;
                            return false;
                        }
                    });

                    return found;
                }(this._element));
            }

            this.lt = this.vertical ? 'top' : 'left';

            // Ensure before closest() call
            this.relative = this.list().css('position') === 'relative';

            // Force list and items reload
            this._list  = null;
            this._items = null;

            var item = this.index(this._target) >= 0 ?
                this._target :
                this.closest();

            // _prepare() needs this here
            this.circular  = this.options('wrap') === 'circular';
            this.underflow = false;

            var props = {'left': 0, 'top': 0};

            if (item.length > 0) {
                this._prepare(item);
                this.list().find('[data-jcarousel-clone]').remove();

                // Force items reload
                this._items = null;

                this.underflow = this._fullyvisible.length >= this.items().length;
                this.circular  = this.circular && !this.underflow;

                props[this.lt] = this._position(item) + 'px';
            }

            this.move(props);

            return this;
        },
        list: function() {
            if (this._list === null) {
                var option = this.options('list');
                this._list = $.isFunction(option) ? option.call(this) : this._element.find(option);
            }

            return this._list;
        },
        items: function() {
            if (this._items === null) {
                var option = this.options('items');
                this._items = ($.isFunction(option) ? option.call(this) : this.list().find(option)).not('[data-jcarousel-clone]');
            }

            return this._items;
        },
        index: function(item) {
            return this.items().index(item);
        },
        closest: function() {
            var self    = this,
                pos     = this.list().position()[this.lt],
                closest = $(), // Ensure we're returning a jQuery instance
                stop    = false,
                lrb     = this.vertical ? 'bottom' : (this.rtl && !this.relative ? 'left' : 'right'),
                width;

            if (this.rtl && this.relative && !this.vertical) {
                pos += this.list().width() - this.clipping();
            }

            this.items().each(function() {
                closest = $(this);

                if (stop) {
                    return false;
                }

                var dim = self.dimension(closest);

                pos += dim;

                if (pos >= 0) {
                    width = dim - toFloat(closest.css('margin-' + lrb));

                    if ((Math.abs(pos) - dim + (width / 2)) <= 0) {
                        stop = true;
                    } else {
                        return false;
                    }
                }
            });


            return closest;
        },
        target: function() {
            return this._target;
        },
        first: function() {
            return this._first;
        },
        last: function() {
            return this._last;
        },
        visible: function() {
            return this._visible;
        },
        fullyvisible: function() {
            return this._fullyvisible;
        },
        hasNext: function() {
            if (false === this._trigger('hasnext')) {
                return true;
            }

            var wrap = this.options('wrap'),
                end = this.items().length - 1,
                check = this.options('center') ? this._target : this._last;

            return end >= 0 && !this.underflow &&
                ((wrap && wrap !== 'first') ||
                    (this.index(check) < end) ||
                    (this.tail && !this.inTail)) ? true : false;
        },
        hasPrev: function() {
            if (false === this._trigger('hasprev')) {
                return true;
            }

            var wrap = this.options('wrap');

            return this.items().length > 0 && !this.underflow &&
                ((wrap && wrap !== 'last') ||
                    (this.index(this._first) > 0) ||
                    (this.tail && this.inTail)) ? true : false;
        },
        clipping: function() {
            return this._element['inner' + (this.vertical ? 'Height' : 'Width')]();
        },
        dimension: function(element) {
            return element['outer' + (this.vertical ? 'Height' : 'Width')](true);
        },
        scroll: function(target, animate, callback) {
            if (this.animating) {
                return this;
            }

            if (false === this._trigger('scroll', null, [target, animate])) {
                return this;
            }

            if ($.isFunction(animate)) {
                callback = animate;
                animate  = true;
            }

            var parsed = $.jCarousel.parseTarget(target);

            if (parsed.relative) {
                var end    = this.items().length - 1,
                    scroll = Math.abs(parsed.target),
                    wrap   = this.options('wrap'),
                    current,
                    first,
                    index,
                    start,
                    curr,
                    isVisible,
                    props,
                    i;

                if (parsed.target > 0) {
                    var last = this.index(this._last);

                    if (last >= end && this.tail) {
                        if (!this.inTail) {
                            this._scrollTail(animate, callback);
                        } else {
                            if (wrap === 'both' || wrap === 'last') {
                                this._scroll(0, animate, callback);
                            } else {
                                if ($.isFunction(callback)) {
                                    callback.call(this, false);
                                }
                            }
                        }
                    } else {
                        current = this.index(this._target);

                        if ((this.underflow && current === end && (wrap === 'circular' || wrap === 'both' || wrap === 'last')) ||
                            (!this.underflow && last === end && (wrap === 'both' || wrap === 'last'))) {
                            this._scroll(0, animate, callback);
                        } else {
                            index = current + scroll;

                            if (this.circular && index > end) {
                                i = end;
                                curr = this.items().get(-1);

                                while (i++ < index) {
                                    curr = this.items().eq(0);
                                    isVisible = this._visible.index(curr) >= 0;

                                    if (isVisible) {
                                        curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                                    }

                                    this.list().append(curr);

                                    if (!isVisible) {
                                        props = {};
                                        props[this.lt] = this.dimension(curr);
                                        this.moveBy(props);
                                    }

                                    // Force items reload
                                    this._items = null;
                                }

                                this._scroll(curr, animate, callback);
                            } else {
                                this._scroll(Math.min(index, end), animate, callback);
                            }
                        }
                    }
                } else {
                    if (this.inTail) {
                        this._scroll(Math.max((this.index(this._first) - scroll) + 1, 0), animate, callback);
                    } else {
                        first  = this.index(this._first);
                        current = this.index(this._target);
                        start  = this.underflow ? current : first;
                        index  = start - scroll;

                        if (start <= 0 && ((this.underflow && wrap === 'circular') || wrap === 'both' || wrap === 'first')) {
                            this._scroll(end, animate, callback);
                        } else {
                            if (this.circular && index < 0) {
                                i    = index;
                                curr = this.items().get(0);

                                while (i++ < 0) {
                                    curr = this.items().eq(-1);
                                    isVisible = this._visible.index(curr) >= 0;

                                    if (isVisible) {
                                        curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                                    }

                                    this.list().prepend(curr);

                                    // Force items reload
                                    this._items = null;

                                    var dim = this.dimension(curr);

                                    props = {};
                                    props[this.lt] = -dim;
                                    this.moveBy(props);

                                }

                                this._scroll(curr, animate, callback);
                            } else {
                                this._scroll(Math.max(index, 0), animate, callback);
                            }
                        }
                    }
                }
            } else {
                this._scroll(parsed.target, animate, callback);
            }

            this._trigger('scrollend');

            return this;
        },
        moveBy: function(properties, opts) {
            var position = this.list().position(),
                multiplier = 1,
                correction = 0;

            if (this.rtl && !this.vertical) {
                multiplier = -1;

                if (this.relative) {
                    correction = this.list().width() - this.clipping();
                }
            }

            if (properties.left) {
                properties.left = (position.left + correction + toFloat(properties.left) * multiplier) + 'px';
            }

            if (properties.top) {
                properties.top = (position.top + correction + toFloat(properties.top) * multiplier) + 'px';
            }

            return this.move(properties, opts);
        },
        move: function(properties, opts) {
            opts = opts || {};

            var option       = this.options('transitions'),
                transitions  = !!option,
                transforms   = !!option.transforms,
                transforms3d = !!option.transforms3d,
                duration     = opts.duration || 0,
                list         = this.list();

            if (!transitions && duration > 0) {
                list.animate(properties, opts);
                return;
            }

            var complete = opts.complete || $.noop,
                css = {};

            if (transitions) {
                var backup = {
                        transitionDuration: list.css('transitionDuration'),
                        transitionTimingFunction: list.css('transitionTimingFunction'),
                        transitionProperty: list.css('transitionProperty')
                    },
                    oldComplete = complete;

                complete = function() {
                    $(this).css(backup);
                    oldComplete.call(this);
                };
                css = {
                    transitionDuration: (duration > 0 ? duration / 1000 : 0) + 's',
                    transitionTimingFunction: option.easing || opts.easing,
                    transitionProperty: duration > 0 ? (function() {
                        if (transforms || transforms3d) {
                            // We have to use 'all' because jQuery doesn't prefix
                            // css values, like transition-property: transform;
                            return 'all';
                        }

                        return properties.left ? 'left' : 'top';
                    })() : 'none',
                    transform: 'none'
                };
            }

            if (transforms3d) {
                css.transform = 'translate3d(' + (properties.left || 0) + ',' + (properties.top || 0) + ',0)';
            } else if (transforms) {
                css.transform = 'translate(' + (properties.left || 0) + ',' + (properties.top || 0) + ')';
            } else {
                $.extend(css, properties);
            }

            if (transitions && duration > 0) {
                list.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', complete);
            }

            list.css(css);

            if (duration <= 0) {
                list.each(function() {
                    complete.call(this);
                });
            }
        },
        _scroll: function(item, animate, callback) {
            if (this.animating) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            if (typeof item !== 'object') {
                item = this.items().eq(item);
            } else if (typeof item.jquery === 'undefined') {
                item = $(item);
            }

            if (item.length === 0) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            this.inTail = false;

            this._prepare(item);

            var pos     = this._position(item),
                currPos = this.list().position()[this.lt];

            if (pos === currPos) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            var properties = {};
            properties[this.lt] = pos + 'px';

            this._animate(properties, animate, callback);

            return this;
        },
        _scrollTail: function(animate, callback) {
            if (this.animating || !this.tail) {
                if ($.isFunction(callback)) {
                    callback.call(this, false);
                }

                return this;
            }

            var pos = this.list().position()[this.lt];

            if (this.rtl && this.relative && !this.vertical) {
                pos += this.list().width() - this.clipping();
            }

            if (this.rtl && !this.vertical) {
                pos += this.tail;
            } else {
                pos -= this.tail;
            }

            this.inTail = true;

            var properties = {};
            properties[this.lt] = pos + 'px';

            this._update({
                target:       this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            });

            this._animate(properties, animate, callback);

            return this;
        },
        _animate: function(properties, animate, callback) {
            callback = callback || $.noop;

            if (false === this._trigger('animate')) {
                callback.call(this, false);
                return this;
            }

            this.animating = true;

            var animation = this.options('animation'),
                complete  = $.proxy(function() {
                    this.animating = false;

                    var c = this.list().find('[data-jcarousel-clone]');

                    if (c.length > 0) {
                        c.remove();
                        this._reload();
                    }

                    this._trigger('animateend');

                    callback.call(this, true);
                }, this);

            var opts = typeof animation === 'object' ?
                    $.extend({}, animation) :
                {duration: animation},
                oldComplete = opts.complete || $.noop;

            if (animate === false) {
                opts.duration = 0;
            } else if (typeof $.fx.speeds[opts.duration] !== 'undefined') {
                opts.duration = $.fx.speeds[opts.duration];
            }

            opts.complete = function() {
                complete();
                oldComplete.call(this);
            };

            this.move(properties, opts);

            return this;
        },
        _prepare: function(item) {
            var index  = this.index(item),
                idx    = index,
                wh     = this.dimension(item),
                clip   = this.clipping(),
                lrb    = this.vertical ? 'bottom' : (this.rtl ? 'left'  : 'right'),
                center = this.options('center'),
                update = {
                    target:       item,
                    first:        item,
                    last:         item,
                    visible:      item,
                    fullyvisible: wh <= clip ? item : $()
                },
                curr,
                isVisible,
                margin,
                dim;

            if (center) {
                wh /= 2;
                clip /= 2;
            }

            if (wh < clip) {
                while (true) {
                    curr = this.items().eq(++idx);

                    if (curr.length === 0) {
                        if (!this.circular) {
                            break;
                        }

                        curr = this.items().eq(0);

                        if (item.get(0) === curr.get(0)) {
                            break;
                        }

                        isVisible = this._visible.index(curr) >= 0;

                        if (isVisible) {
                            curr.after(curr.clone(true).attr('data-jcarousel-clone', true));
                        }

                        this.list().append(curr);

                        if (!isVisible) {
                            var props = {};
                            props[this.lt] = this.dimension(curr);
                            this.moveBy(props);
                        }

                        // Force items reload
                        this._items = null;
                    }

                    dim = this.dimension(curr);

                    if (dim === 0) {
                        break;
                    }

                    wh += dim;

                    update.last    = curr;
                    update.visible = update.visible.add(curr);

                    // Remove right/bottom margin from total width
                    margin = toFloat(curr.css('margin-' + lrb));

                    if ((wh - margin) <= clip) {
                        update.fullyvisible = update.fullyvisible.add(curr);
                    }

                    if (wh >= clip) {
                        break;
                    }
                }
            }

            if (!this.circular && !center && wh < clip) {
                idx = index;

                while (true) {
                    if (--idx < 0) {
                        break;
                    }

                    curr = this.items().eq(idx);

                    if (curr.length === 0) {
                        break;
                    }

                    dim = this.dimension(curr);

                    if (dim === 0) {
                        break;
                    }

                    wh += dim;

                    update.first   = curr;
                    update.visible = update.visible.add(curr);

                    // Remove right/bottom margin from total width
                    margin = toFloat(curr.css('margin-' + lrb));

                    if ((wh - margin) <= clip) {
                        update.fullyvisible = update.fullyvisible.add(curr);
                    }

                    if (wh >= clip) {
                        break;
                    }
                }
            }

            this._update(update);

            this.tail = 0;

            if (!center &&
                this.options('wrap') !== 'circular' &&
                this.options('wrap') !== 'custom' &&
                this.index(update.last) === (this.items().length - 1)) {

                // Remove right/bottom margin from total width
                wh -= toFloat(update.last.css('margin-' + lrb));

                if (wh > clip) {
                    this.tail = wh - clip;
                }
            }

            return this;
        },
        _position: function(item) {
            var first  = this._first,
                pos    = first.position()[this.lt],
                center = this.options('center'),
                centerOffset = center ? (this.clipping() / 2) - (this.dimension(first) / 2) : 0;

            if (this.rtl && !this.vertical) {
                if (this.relative) {
                    pos -= this.list().width() - this.dimension(first);
                } else {
                    pos -= this.clipping() - this.dimension(first);
                }

                pos += centerOffset;
            } else {
                pos -= centerOffset;
            }

            if (!center &&
                (this.index(item) > this.index(first) || this.inTail) &&
                this.tail) {
                pos = this.rtl && !this.vertical ? pos - this.tail : pos + this.tail;
                this.inTail = true;
            } else {
                this.inTail = false;
            }

            return -pos;
        },
        _update: function(update) {
            var self = this,
                current = {
                    target:       this._target,
                    first:        this._first,
                    last:         this._last,
                    visible:      this._visible,
                    fullyvisible: this._fullyvisible
                },
                back = this.index(update.first || current.first) < this.index(current.first),
                key,
                doUpdate = function(key) {
                    var elIn  = [],
                        elOut = [];

                    update[key].each(function() {
                        if (current[key].index(this) < 0) {
                            elIn.push(this);
                        }
                    });

                    current[key].each(function() {
                        if (update[key].index(this) < 0) {
                            elOut.push(this);
                        }
                    });

                    if (back) {
                        elIn = elIn.reverse();
                    } else {
                        elOut = elOut.reverse();
                    }

                    self._trigger(key + 'in', $(elIn));
                    self._trigger(key + 'out', $(elOut));

                    self['_' + key] = update[key];
                };

            for (key in update) {
                doUpdate(key);
            }

            return this;
        }
    });
}(jQuery, window));

/*! jCarousel - v0.3.3 - 2015-02-28
 * http://sorgalla.com/jcarousel/
 * Copyright (c) 2006-2015 Jan Sorgalla; Licensed MIT */
(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselControl', {
        _options: {
            target: '+=1',
            event:  'click',
            method: 'scroll'
        },
        _active: null,
        _init: function() {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);
            this.onReload = $.proxy(this._reload, this);
            this.onEvent = $.proxy(function(e) {
                e.preventDefault();

                var method = this.options('method');

                if ($.isFunction(method)) {
                    method.call(this);
                } else {
                    this.carousel()
                        .jcarousel(this.options('method'), this.options('target'));
                }
            }, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy)
                .on('jcarousel:reloadend jcarousel:scrollend', this.onReload);

            this._element
                .on(this.options('event') + '.jcarouselcontrol', this.onEvent);

            this._reload();
        },
        _destroy: function() {
            this._element
                .off('.jcarouselcontrol', this.onEvent);

            this.carousel()
                .off('jcarousel:destroy', this.onDestroy)
                .off('jcarousel:reloadend jcarousel:scrollend', this.onReload);
        },
        _reload: function() {
            var parsed   = $.jCarousel.parseTarget(this.options('target')),
                carousel = this.carousel(),
                active;

            if (parsed.relative) {
                active = carousel
                    .jcarousel(parsed.target > 0 ? 'hasNext' : 'hasPrev');
            } else {
                var target = typeof parsed.target !== 'object' ?
                    carousel.jcarousel('items').eq(parsed.target) :
                    parsed.target;

                active = carousel.jcarousel('target').index(target) >= 0;
            }

            if (this._active !== active) {
                this._trigger(active ? 'active' : 'inactive');
                this._active = active;
            }

            return this;
        }
    });
}(jQuery));
/*! jCarousel - v0.3.3 - 2015-02-28
 * http://sorgalla.com/jcarousel/
 * Copyright (c) 2006-2015 Jan Sorgalla; Licensed MIT */
(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselPagination', {
        _options: {
            perPage: null,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            },
            event:  'click',
            method: 'scroll'
        },
        _carouselItems: null,
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function() {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);
            this.onReload = $.proxy(this._reload, this);
            this.onScroll = $.proxy(this._update, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy)
                .on('jcarousel:reloadend', this.onReload)
                .on('jcarousel:scrollend', this.onScroll);

            this._reload();
        },
        _destroy: function() {
            this._clear();

            this.carousel()
                .off('jcarousel:destroy', this.onDestroy)
                .off('jcarousel:reloadend', this.onReload)
                .off('jcarousel:scrollend', this.onScroll);

            this._carouselItems = null;
        },
        _reload: function() {
            var perPage = this.options('perPage');

            this._pages = {};
            this._items = {};

            // Calculate pages
            if ($.isFunction(perPage)) {
                perPage = perPage.call(this);
            }

            if (perPage == null) {
                this._pages = this._calculatePages();
            } else {
                var pp    = parseInt(perPage, 10) || 0,
                    items = this._getCarouselItems(),
                    page  = 1,
                    i     = 0,
                    curr;

                while (true) {
                    curr = items.eq(i++);

                    if (curr.length === 0) {
                        break;
                    }

                    if (!this._pages[page]) {
                        this._pages[page] = curr;
                    } else {
                        this._pages[page] = this._pages[page].add(curr);
                    }

                    if (i % pp === 0) {
                        page++;
                    }
                }
            }

            this._clear();

            var self     = this,
                carousel = this.carousel().data('jcarousel'),
                element  = this._element,
                item     = this.options('item'),
                numCarouselItems = this._getCarouselItems().length;

            $.each(this._pages, function(page, carouselItems) {
                var currItem = self._items[page] = $(item.call(self, page, carouselItems));

                currItem.on(self.options('event') + '.jcarouselpagination', $.proxy(function() {
                    var target = carouselItems.eq(0);

                    // If circular wrapping enabled, ensure correct scrolling direction
                    if (carousel.circular) {
                        var currentIndex = carousel.index(carousel.target()),
                            newIndex     = carousel.index(target);

                        if (parseFloat(page) > parseFloat(self._currentPage)) {
                            if (newIndex < currentIndex) {
                                target = '+=' + (numCarouselItems - currentIndex + newIndex);
                            }
                        } else {
                            if (newIndex > currentIndex) {
                                target = '-=' + (currentIndex + (numCarouselItems - newIndex));
                            }
                        }
                    }

                    carousel[this.options('method')](target);
                }, self));

                element.append(currItem);
            });

            this._update();
        },
        _update: function() {
            var target = this.carousel().jcarousel('target'),
                currentPage;

            $.each(this._pages, function(page, carouselItems) {
                carouselItems.each(function() {
                    if (target.is(this)) {
                        currentPage = page;
                        return false;
                    }
                });

                if (currentPage) {
                    return false;
                }
            });

            if (this._currentPage !== currentPage) {
                this._trigger('inactive', this._items[this._currentPage]);
                this._trigger('active', this._items[currentPage]);
            }

            this._currentPage = currentPage;
        },
        items: function() {
            return this._items;
        },
        reloadCarouselItems: function() {
            this._carouselItems = null;
            return this;
        },
        _clear: function() {
            this._element.empty();
            this._currentPage = null;
        },
        _calculatePages: function() {
            var carousel = this.carousel().data('jcarousel'),
                items    = this._getCarouselItems(),
                clip     = carousel.clipping(),
                wh       = 0,
                idx      = 0,
                page     = 1,
                pages    = {},
                curr,
                dim;

            while (true) {
                curr = items.eq(idx++);

                if (curr.length === 0) {
                    break;
                }

                dim = carousel.dimension(curr);

                if ((wh + dim) > clip) {
                    page++;
                    wh = 0;
                }

                wh += dim;

                if (!pages[page]) {
                    pages[page] = curr;
                } else {
                    pages[page] = pages[page].add(curr);
                }
            }

            return pages;
        },
        _getCarouselItems: function() {
            if (!this._carouselItems) {
                this._carouselItems = this.carousel().jcarousel('items');
            }

            return this._carouselItems;
        }
    });
}(jQuery));
/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */

//Customised for MailOnline, originally named touchwipe
(function($) {
    $.fn.touchswipe = function(settings) {
        var config = {
            min_move_x: 40,
            swipeLeft: function() { },
            swipeRight: function() { },
            preventDefaultEvents: true,
            stopPropagation: false
        };

        if (settings) $.extend(config, settings);

        return this.each(function() {
            var startX;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                this.removeEventListener('pointermove', onTouchMove);
                this.removeEventListener('MSPointerMove', onTouchMove);
                startX = null;
                isMoving = false;
            }

            function onTouchEnd(e) {
                if(config.stopPropagation) {
                    e.stopImmediatePropagation();
                }
                this.removeEventListener('touchend', onTouchEnd);
                this.removeEventListener('pointerup', onTouchEnd);
                this.removeEventListener('MSPointerUp', onTouchEnd);
            }

            function onTouchMove(e) {
                if(config.preventDefaultEvents) {
                    e.preventDefault();
                }
                if(config.stopPropagation) {
                    e.stopImmediatePropagation();
                }
                if(isMoving) {
                    var x = e.touches[0].pageX;
                    var dx = startX - x;
                    if(Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if(dx > 0) {
                            config.swipeLeft();
                        }
                        else {
                            config.swipeRight();
                        }
                    }
                }
            }

            function onTouchStart(e)
            {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false);
                    this.addEventListener('pointermove', onTouchMove, false);
                    this.addEventListener('MSPointerMove', onTouchMove, false);
                    this.addEventListener('touchend', onTouchEnd, false);
                    this.addEventListener('pointerup', onTouchEnd, false);
                    this.addEventListener('MSPointerUp', onTouchEnd, false);
                }
            }
            if ('ontouchstart' in window || 'onmsgesturestart' in window) {
                this.addEventListener('touchstart', onTouchStart, false);
                this.addEventListener('pointerdown', onTouchStart, false);
                this.addEventListener('MSPointerDown', onTouchStart, false);
            }
        });
    };
})(jQuery);
TINY={};

TINY.box=function(){
	var j,m,b,g,v,p=0;
	return{
		show:function(o){
			v={fade:true, opacity:70,close:1,animate:1,fixed:1,mask:1,maskid:'',boxid:'',innerid:'',topsplit:2,url:0,post:0,height:0,width:0,html:0,iframe:0};
			for(var s in o){v[s]=o[s]}
			if(!p){
				j=document.createElement('div'); j.className='tbox';
				p=document.createElement('div'); p.className='tinner';
				b=document.createElement('div'); b.className='tcontent';
				m=document.createElement('div'); m.className='tmask';
				g=document.createElement('div'); g.className='tclose'; g.v=0;
				document.body.appendChild(m); document.body.appendChild(j); j.appendChild(p); p.appendChild(b);
				m.onclick=g.onclick= function(e) {
                    if (e) {e.stopPropagation();} else { window.event.cancelBubble = true; }
                    TINY.box.hide();
                }
                window.onresize=TINY.box.resize
			}else{
				j.style.display='none'; clearTimeout(p.ah); if(g.v){p.removeChild(g); g.v=0}
			}
            j.className= 'tbox '+v.innerclass; p.id=v.boxid; m.id=v.maskid; j.style.position=v.fixed?'fixed':'absolute';
			if(v.html&&!v.animate){
				p.style.backgroundImage='none'; b.innerHTML=v.html; b.style.display='';
				p.style.width=v.width?v.width+'px':'auto'; p.style.height=v.height?v.height+'px':'auto'
			}else{
				b.style.display='none'; 
				if(!v.animate&&v.width&&v.height){
					p.style.width=v.width+'px'; p.style.height=v.height+'px'
				}else{
					p.style.width=p.style.height='100px'
				}
			}
			if(v.mask){this.mask(); this.alpha(m,1,v.opacity)}else{this.alpha(j,1,100)}
			if(v.autohide){p.ah=setTimeout(TINY.box.hide,1000*v.autohide)}else{document.onkeyup=TINY.box.esc}
		},
		fill:function(c,u,k,a,w,h){
			if(u){
				if(v.image){
					var i=new Image(); i.onload=function(){w=w||i.width; h=h||i.height; TINY.box.psh(i,a,w,h)}; i.src=v.image
				}else if(v.iframe){
					this.psh('<iframe src="'+v.iframe+'" width="'+v.width+'" frameborder="0" height="'+v.height+'"></iframe>',a,w,h)
				}else{
					var x=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
					x.onreadystatechange=function(){
						if(x.readyState==4&&x.status==200){p.style.backgroundImage=''; TINY.box.psh(x.responseText,a,w,h)}
					};
					if(k){
    	            	x.open('POST',c,true); x.setRequestHeader('Content-type','application/x-www-form-urlencoded'); x.send(k)
					}else{
       	         		x.open('GET',c,true); x.send(null)
					}
				}
			}else{
				this.psh(c,a,w,h)
			}
		},
		psh:function(c,a,w,h){
			if(typeof c=='object'){b.appendChild(c)}else{b.innerHTML=c}
			var x=p.style.width, y=p.style.height;
			if(!w||!h){
				p.style.width=w?w+'px':''; p.style.height=h?h+'px':''; b.style.display='';
				if(!h){h=parseInt(b.offsetHeight)}
				if(!w){w=parseInt(b.offsetWidth)}
				b.style.display='none'
			}
			p.style.width=x; p.style.height=y;
			this.size(w,h,a)
		},
		esc:function(e){e=e||window.event; if(e.keyCode==27){TINY.box.hide()}},
        hide:function(){if(v.closejs){v.closejs()} else{TINY.box.alpha(j,-1,0,3); document.onkeypress=null;}},
//        hide:function(){console.log("hide TINY.box");TINY.box.alpha(j,-1,0,3); document.onkeypress=null; if(v.closejs){v.closejs()}},
        closetbox: function() {TINY.box.alpha(j,-1,0,3);document.onkeypress=null;},
		resize:function(){TINY.box.pos(); TINY.box.mask()},
		mask:function(){ return; m.style.height=this.total(1)+'px'; m.style.width=this.total(0)+'px'},
		pos:function(){
			var t;
			if(typeof v.top!='undefined'){t=v.top}else{t=(this.height()/v.topsplit)-(j.offsetHeight/2); t=t<20?20:t}
			if(!v.fixed&&!v.top){t+=this.top()}
			j.style.top=t+'px'; 
			j.style.left=typeof v.left!='undefined'?v.left+'px':(this.width()/2)-(j.offsetWidth/2)+'px'
		},
		alpha:function(e,d,a){
			if(e) {
                clearInterval(e.ai);
                if(d){
                    var s = v.fade ? 0 : a/100;
                    e.style.opacity=s; e.style.filter='alpha(opacity='+(s*100)+')'; e.style.display='block'; TINY.box.pos()
                }
                e.ai=setInterval(function(){TINY.box.ta(e,a,d)},20)
            }
		},
		ta:function(e,a,d){
			var o=Math.round(e.style.opacity*100);
			if(o==a){
				clearInterval(e.ai);
				if(d==-1){
					e.style.display='none';
					e==j?TINY.box.alpha(m,-1,0,2):b.innerHTML=p.style.backgroundImage=''
				}else{
					if(e==m){
						this.alpha(j,1,100);
					}else{
						j.style.filter='';
						TINY.box.fill(v.html||v.url,v.url||v.iframe||v.image,v.post,v.animate,v.width,v.height)
					}
				}
			}else{
                var n=a-Math.floor(Math.abs(a-o)*.5)*d;
                e.style.opacity=n/100; e.style.filter='alpha(opacity='+n+')'
			}
		},
		size:function(w,h,a){
			if(a){
				clearInterval(p.si); var wd=parseInt(p.style.width)>w?-1:1, hd=parseInt(p.style.height)>h?-1:1;
				p.si=setInterval(function(){TINY.box.ts(w,wd,h,hd)},20)
			}else{
				p.style.backgroundImage='none'; if(v.close){p.appendChild(g); g.v=1}
				p.style.width=w+'px'; p.style.height=h+'px'; b.style.display=''; this.pos();
				if(v.openjs){v.openjs()}
			}
		},
		ts:function(w,wd,h,hd){
			var cw=parseInt(p.style.width), ch=parseInt(p.style.height);
			if(cw==w&&ch==h){
				clearInterval(p.si); p.style.backgroundImage='none'; b.style.display='block'; if(v.close){p.appendChild(g); g.v=1}
				if(v.openjs){v.openjs()}
			}else{
				if(cw!=w){p.style.width=(w-Math.floor(Math.abs(w-cw)*.6)*wd)+'px'}
				if(ch!=h){p.style.height=(h-Math.floor(Math.abs(h-ch)*.6)*hd)+'px'}
				this.pos()
			}
		},
		top:function(){return document.documentElement.scrollTop||document.body.scrollTop},
		width:function(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},
		height:function(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},
		total:function(d){
			var b=document.body, e=document.documentElement;
			return d?Math.max(Math.max(b.scrollHeight,e.scrollHeight),Math.max(b.clientHeight,e.clientHeight)):
			Math.max(Math.max(b.scrollWidth,e.scrollWidth),Math.max(b.clientWidth,e.clientWidth))
		}
	}
}();

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var HORIZONTAL_CAROUSEL_SCROLL_OFFSET = 3;
var VERTICAL_CAROUSEL_SCROLL_OFFSET = 2;
var MOBILE_HORIZONTAL_CAROUSEL_SCROLL_OFFSET = 2;
var moveTypeTargetSignMapping = {
    prev: '-',
    next: '+'
};
var debouncedFunction;

function isMobileInline() {
    var mobileInline = $('.fff-m-inline');
    return  mobileInline && mobileInline.length > 0;
}

function setCarouselItemsWidthForMobile($carousel) {
    if(isMobileInline()) {
        var carouselItems = $('.fff-m-inline .fff-carousel li');
        setCarouselItemsWidth(carouselItems, $carousel);
        keepCarouselItemsWidthToHalfOfScreenSize(carouselItems, $carousel);
    }
}

function setUpCarouselControls(carouselInstance, fffCarouselSelectorPrefix) {
    $(fffCarouselSelectorPrefix + ' .fff-carousel-control.prev').jcarouselControl(getCarouselOptions(carouselInstance, 'prev'));
    $(fffCarouselSelectorPrefix + ' .fff-carousel-control.next').jcarouselControl(getCarouselOptions(carouselInstance, 'next'));

    $(fffCarouselSelectorPrefix + ' .fff-carousel-control')
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        });
}

function setUpCarouselPagination() {
    var jCarouselPagination = $('.fff-carousel-pagination');
    jCarouselPagination
        .jcarouselPagination({
            perPage: 2,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        })
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        });
    $($('.fff-carousel-pagination a')[0]).addClass('active');
}

function setUpSwipeFunctionalityForMobile($carousel) {
    $carousel.touchswipe({
        swipeLeft: function() {
            $('.fff-carousel-control.next').click();
        },
        swipeRight: function() {
            $('.fff-carousel-control.prev').click();
        },
        min_move_x: 10,
        preventDefaultEvents: false,
        stopPropagation: true
    });
}

function setCarouselItemsWidth(carouselItems, $carousel) {
    var carouselWrapWidth = parseInt($('.fff-m-inline').css('width'));
    var carouselItemWidth = Math.floor(carouselWrapWidth / 2);
    carouselItems.css('width', carouselItemWidth + 'px');
    $carousel.jcarousel('reload');//Reloading the carousel so the new width is picked up when setting the current visible items
}

function keepCarouselItemsWidthToHalfOfScreenSize(carouselItems, $carousel) {
    window.addEventListener('resize', function() {
        debounce(setCarouselItemsWidth, [carouselItems, $carousel], 150);
    });
    window.addEventListener('orientationchange', function() {
        debounce(setCarouselItemsWidth, [carouselItems, $carousel], 150);
    });
}

function debounce(fn, params, timeout) {
    if(debouncedFunction) {
        clearTimeout(debouncedFunction);
    }
    debouncedFunction = setTimeout(function() {
        debounced(fn, params);
    }, timeout);
    function debounced(fn, params) {
        fn.apply(null, params);
        debouncedFunction = null;
    }
}

function getCarouselOptions(carouselInstance, moveType) {
    return addCarouselMethodForMobile(moveType, getDefaultCarouselOptions(carouselInstance, moveType));
}

function getDefaultCarouselOptions(carouselInstance, moveType) {
    return {
        target: getTargetSignForMoveType(moveType) + getCarouselScrollOffset(carouselInstance)
    };
}

function getCarouselScrollOffset(carouselInstance) {
    if(isMobileInline()) return MOBILE_HORIZONTAL_CAROUSEL_SCROLL_OFFSET;
    if(carouselInstance && carouselInstance._options && carouselInstance._options.vertical) return VERTICAL_CAROUSEL_SCROLL_OFFSET;
    return HORIZONTAL_CAROUSEL_SCROLL_OFFSET;
}

function getTargetSignForMoveType(moveType) {
    return moveTypeTargetSignMapping[moveType] + '=';
}

function addCarouselMethodForMobile(moveType, options) {
    if(isMobileInline()) {
        var pagination = $('.fff-carousel-pagination');
        if (moveType === 'prev') {
            options.method = function () {
                pagination.find('.active').prev().trigger('click');
            };
        } else {
            options.method = function() {
                pagination.find('.active').next().trigger('click');
            }
        }
    }
    return options;
}

module.exports = {
    isMobileInline: isMobileInline,
    setCarouselItemsWidthForMobile: setCarouselItemsWidthForMobile,
    setUpCarouselControls: setUpCarouselControls,
    setUpCarouselPagination: setUpCarouselPagination,
    setUpSwipeFunctionalityForMobile: setUpSwipeFunctionalityForMobile
};

},{}],2:[function(require,module,exports){
(function($) {
    //handle when no DM Logging available
    //DM.Log doesn't seem to work in IE
    if (!window.DM) {
        window.DM = {
            Log: {
                log: function () {
                    window.console && console.log && console.log(arguments);
                }
            }
        };
    }
    window.FFF = window.FFF || {};
    window.FFF.templateCache = window.FFF.templateCache || {};
    window.FFF.viewCache = window.FFF.viewCache || {};
    var templateCache = window.FFF.templateCache;
    var carousel = require('./carousel');

    window.FFF.isIpad = function () {
        return navigator.userAgent.match(/ipad/i);
    };

    function decorateWithExtraInformation(viewData) {
        if(window.FFF.env.showFFFHubRelatedBanners) {
            viewData.showFFFHubRelatedBanners = window.FFF.env.showFFFHubRelatedBanners;
            viewData.fffHubHost = window.FFF.env.fffHubHost;
        }
        viewData.currency = viewData && viewData.geo && viewData.geo.toLowerCase() === 'us' ? '$' : '£';
        viewData.showFFFPartnerLinks = !viewData || !viewData.geo || viewData.geo.toLowerCase() !== 'us';
        return viewData;
    }

    function openPopup(viewData, viewId, e) {
        var mask = true;
        var withBorder = 'without-border';
        var defaultWidth = 800;

        if (!templateCache[viewId]) {
            initPopup();
        } else {
            showPopup();
        }

        function initPopup() {
            templateCache[viewId] = Mustache.render(window.FFF.views.popup, decorateWithExtraInformation(viewData));
            templateCache[viewId] = addAd(templateCache[viewId]);
            showPopup();
        }

        function showPopup() {
            if(hasAd()) defaultWidth = 840;

            cacheAndExtendViewData(viewData);

            TINY.box.show({
                boxid: 'fff-overlay',
                innerclass: withBorder,
                fade:false,
                mask: mask,
                animate:true,
                html:$(templateCache[viewId]).clone()[0], //CLONING FOR FIX A IE BUG
                top:$(window).scrollTop() + 25,
                width:defaultWidth,
                height:550,
                close:true,
                fixed:false,
                opacity:50,
                openjs:function () {
                    sharedOnPopupOpen(viewData, e);
                },
                closejs:function () {
                    sharedOnPopupClose();
                }
            });
            hoverEnabled = false;
            $(this).parent().find('> .fff-hover-overlay').hide();
        }
    }

    function cacheAndExtendViewData(viewData) {
        viewData.absoluteUrl = viewData.url;
        viewData.body = $.isArray(viewData.body) ? viewData.body : viewData.body ? viewData.body.split(/\n+/) : [];
        window.FFF.viewCache[viewData.url] = viewData;
    }

    function sharedOnPopupClose() {
        TINY.box.closetbox();
    }

    function positionFromEvent(event) {
        var pos = $(event.target).closest('li').index();
        return  typeof(pos) != 'undefined' ? pos + 1 : '';
    }

    function sharedOnPopupOpen(viewData, event) {
        var position = positionFromEvent(event);
        window.FFF.openOverlayEvent = event;

        prepareFFFImpression(viewData.url, fffType(event), fffSource(event), position);

        $('#fff-overlay .fff-carousel')
            .on('jcarousel:create', function(event, carouselInstance) { onCarouselCreate(carouselInstance) })
            .jcarousel({ list: '#related-products' , items: '.fff-carousel-item' });

        bindMainProductaAndPartnerLinksTrackingEvents(viewData.url, '.tbox .fff-popup', fffSource(event), position);

        //Until we don't switch on Google Plus sharing
        if (!googleApi) {
            var googleApi = document.createElement('script');
            googleApi.type = 'text/javascript';
            googleApi.async = true;
            googleApi.src = 'https://apis.google.com/js/client:plusone.js';
            document.body.appendChild(googleApi);
        }

        function onCarouselCreate(carouselInstance) {
            //Keep the binding of the tracking for carousel before setting up the carousel controls. Otherwise, the last
            //click on an active carousel control will not be tracked because the control will be inactive by the time
            //the callback of the tracking binding event executes
            bindCarouselTrackingEvents(viewData.url, '.tbox .fff-popup', fffSource(event), position);
            carousel.setUpCarouselControls(carouselInstance, '#fff-overlay');
        }
    }

    function getProductTypes(viewData) {
        return viewData.productTypes ? viewData.productTypes.sort().join(',') : '';
    }

    function getTrends(viewData) {
        return viewData.trends ? viewData.trends.sort().join(',') : '';
    }

    function prepareFFFImpression(imageUrl, fffType, fffSource, position) {
        var fffData = window.FFF.viewCache[imageUrl];
        window.FFF.trackFFFImpression(fffData, fffType, fffSource, getProductTypes(fffData), getTrends(fffData), position);
    }

    function prepareFFFImpressionWhenNoResponse(fffData, fffType, fffSource) {
        window.FFF.trackFFFImpression(fffData, fffType, fffSource, getProductTypes(fffData), getTrends(fffData), undefined, 'fff not fully loaded');
    }

    function fffSource(event) {
        if(event) {
            var $target = $(event.target);
            if ($target.closest('.fff-hottest').length > 0) {
                return "hottest";
            }
            if ($target.closest('.fff-product-list').length > 0) {
                return "product-list";
            }
            if ($target.closest('.fff-more-fashion-finds').length > 0) {
                return "more-fashion-finds";
            }
            if ($target.closest('.fff-trending').length > 0) {
                return "trending";
            }
        }
        return 'article';
    }

    function fffType(event) {
        if(event) {
            var $target = $(event.target),
                onHoverOverlay = $('.tbox.with-border');
            if ((onHoverOverlay.length > 0) && (onHoverOverlay.css('display') !== 'none')) {
                return 'mouseover';
            }
            var inline = $target.closest('.fff-inline');
            var mobileInline = $target.closest('.fff-m-inline');
            if(inline.length > 0 || mobileInline.length > 0) {
                return !inline.hasClass('fff-partial') || mobileInline.length > 0 ? 'inline' : 'inline-partial';
            }
        }
        return 'click';
    }

    function addAd(template) {
        if(hasAd()) {
            var $adWrap = $('<div class="overlay-ad"></div>');
            $adWrap.append($('#fff_overlay_top').clone());
            $adWrap.append($('#fff_overlay_back').clone());
            $adWrap.append($('#fff_overlay_bottom').clone());
            $adWrap.find('#fff_overlay_back').append(template);
            return $adWrap[0];
        }
        return template;
    }

    function hasAd() {
        return $('#fff_overlay_top').length;
    }

    function bindCarouselTrackingEvents(imageUrl, selectorPrefix, fffSource, position) {
        var fffData       = window.FFF.viewCache[imageUrl];
        var celebrity     = FFFOverlayHelpers.celebrityOrDefault(fffData.personName, fffData);
        var mainProduct   = FFFOverlayHelpers.mainProductOrDefault(fffData.productId);
        var carouselPosition = 0;
        bindCarouselControlsTrackingEvents(selectorPrefix, carouselPosition, celebrity, mainProduct);
        setupRelatedProductsTracking(selectorPrefix, fffData, fffSource, position, celebrity, mainProduct);
    }

    function setupRelatedProductsTracking(selectorPrefix, fffData, fffSource, position, celebrity, mainProduct) {
        var productTypes  = getProductTypes(fffData);
        var trends        = getTrends(fffData);

        $(selectorPrefix + ' .fff-carousel-item a').unbind('click').click(function (event) {
            bindRelatedProductClickBuy.call(this, event);
        });
        $(selectorPrefix + ' .fff-related-product-item a').unbind('click').click(function (event) {
            bindRelatedProductClickBuy.call(this, event);
        });

        function bindRelatedProductClickBuy(event) {
            var itemData = $(this).data();
            window.FFF.trackClickBuyRelated(celebrity, mainProduct, itemData.product_id, productTypes, trends, event, fffSource, position);
        }
    }

    function bindCarouselControlsTrackingEvents(selectorPrefix, carouselPosition, celebrity, mainProduct) {
        if(carousel.isMobileInline()) {
            //The mouseup event fires before the click, we want this event handler to be executed before the pagination
            //active/inactive events to prevent the click on the current active page to fire the tracking
            $(selectorPrefix).on('mouseup', '.fff-carousel-pagination a', (function () {
                if (!($(this).hasClass('active'))) {
                    window.FFF.trackClickCarouselArrows(celebrity, mainProduct, parseInt($(this).text())-1);
                }
            }));
        } else {
            $(selectorPrefix + ' .fff-carousel-control.next').click(function () {
                if (!$(this).hasClass('inactive')) {
                    carouselPosition++;
                    window.FFF.trackClickCarouselArrows(celebrity, mainProduct, carouselPosition);
                }
            });
            $(selectorPrefix + ' .fff-carousel-control.prev').click(function () {
                if (!$(this).hasClass('inactive')) {
                    carouselPosition--;
                    window.FFF.trackClickCarouselArrows(celebrity, mainProduct, carouselPosition);
                }
            });
        }
    }

    function bindMainProductaAndPartnerLinksTrackingEvents(imageUrl, selectorPrefix, fffSource, position) {
        var fffData       = window.FFF.viewCache[imageUrl];
        var celebrity     = FFFOverlayHelpers.celebrityOrDefault(fffData.personName, fffData);
        var mainProduct   = FFFOverlayHelpers.mainProductOrDefault(fffData.productId);
        var productTypes  = getProductTypes(fffData);
        var trends        = getTrends(fffData);

        $(selectorPrefix + ' .fff-main-product').unbind('click').click(function (event) {
            if (!$(this).hasClass('fff-unclickable')) {
                window.FFF.trackClickBuyMain(celebrity, mainProduct, productTypes, trends, event, fffSource, position);
            }
        });
        $(selectorPrefix + ' .fff-accessory a').unbind('click').click(function (event) {
            window.FFF.trackClickBuyAccessory(celebrity, mainProduct, $(this).data().product_id, productTypes, trends, event, fffSource);
        });
        $(selectorPrefix + ' .fff-partners-links li').unbind('click').click(function (event) {
            var title = $(this).attr('title');
            window.FFF.trackClickToAffiliate(celebrity, mainProduct, productTypes, trends, event, fffSource, title);
        });
    }

    function bindTrackingEventsWhenNoResponse(fffData, selectorPrefix, fffSource) {
        var celebrity     = FFFOverlayHelpers.celebrityOrDefault(fffData.personName, fffData);
        var mainProduct   = FFFOverlayHelpers.mainProductOrDefault(fffData.productId);
        var productTypes  = getProductTypes(fffData);
        var trends        = getTrends(fffData);

        $(selectorPrefix + ' .fff-main-product').unbind('click').click(function (event) {
            if (!$(this).hasClass('fff-unclickable')) {
                window.FFF.trackClickBuyMain(celebrity, mainProduct, productTypes, trends, event, fffSource);
            }
        });
        $(selectorPrefix + ' .fff-accessorise a').on('click', function (event) {
            window.FFF.trackClickBuyAccessory(celebrity, mainProduct, accessory, productTypes, trends, event, fffSource);
        });
    }

    function getPageCriteriaGeo() {
        return typeof PageCriteria !== 'undefined' && PageCriteria ? PageCriteria.geo.toLowerCase() : window.FFF.parent.pageCriteriaGeo.toLowerCase();
    }

    function getPageCriteriaArticleId() {
        return typeof PageCriteria !== 'undefined' && PageCriteria ? PageCriteria.articleId : window.FFF.parent.articleId;
    }

    function getGeoUrlParameter(geo) {
        return geo && geo.toLowerCase() === 'us' ? '&geo=us' : '&geo=gb';
    }

    function hideAllInlinesAfterTheFirstOnMobile() {
        Array.prototype.slice.call(document.getElementsByClassName('fff-inline'), 1).forEach(function(fffInline) {
            fffInline.style.display = 'none';
        });
    }

    window.FFF.prepareFFFImpression = prepareFFFImpression;
    window.FFF.prepareFFFImpressionWhenNoResponse = prepareFFFImpressionWhenNoResponse;
    window.FFF.bindCarouselTrackingEvents = bindCarouselTrackingEvents;
    window.FFF.bindMainProductaAndPartnerLinksTrackingEvents = bindMainProductaAndPartnerLinksTrackingEvents;
    window.FFF.bindTrackingEventsWhenNoResponse = bindTrackingEventsWhenNoResponse;
    window.FFF.getGeoUrlParameter = getGeoUrlParameter;
    window.FFF.getPageCriteriaGeo = getPageCriteriaGeo;
    window.FFF.hideAllInlinesAfterTheFirstOnMobile = hideAllInlinesAfterTheFirstOnMobile;
    window.FFF.getPageCriteriaArticleId = getPageCriteriaArticleId;
    window.FFF.onPopupClose = sharedOnPopupClose;
    window.FFF.onPopupOpen = sharedOnPopupOpen;
    window.FFF.openHubOverlay = function (viewData, viewId, e) {
        FFFOverlayHelpers.extendViewData(viewData);
        openPopup(viewData, viewId, e);
    };
    window.FFF.decorateWithExtraInformation = decorateWithExtraInformation;
    window.FFF.fffType = function(event) {
        return fffType(event);
    };
    window.FFF.fffSource = function(event) {
        return fffSource(event);
    };
})(window.jQuery);

},{"./carousel":1}]},{},[2]);

FFFOverlayHelpers = {
    extendViewData: function (viewData) {
        viewData.expired = (new Date()).getTime() > viewData.msExpiryDate;

        viewData.getButtonText_FUNC = function () {
            return viewData.expired ? 'Visit site' : 'Buy now';
        };
        viewData.isPriceBadgeVisible_FUNC = function () {
            return (viewData.price && !viewData.expired) ? 'block' : 'none';
        };
        //remove &pound; from templates when moved to utf8
        viewData.getPrice_FUNC = function () {
            return viewData.price;
        };
        //remove &pound; from templates when moved to utf8
        viewData.getCurrency_FUNC = function () {
            return  window.FFF.getPageCriteriaGeo() === 'us' ? '$' : '£';
        };
        viewData.isPriceMiniBadgeVisible_FUNC = function () {
            return !viewData.expired ? 'block' : 'none';
        };
        viewData.accessoryIndex = 0;
        viewData.showAccessorise_FUNC = function() {
            return viewData.hasAccessorise ? '' : 'hidden';
        };
        viewData.isAccessoryPriceVisible_FUNC_INDEX = function () {
            var i = Math.floor(viewData.accessoryIndex);
            return viewData.accessories[i].accessoryPrice ? 'inline-block' : 'none';
        };
        viewData.isBuyNowButtonVisible_FUNC = function () {
            return viewData.productUrl ? 'block' : 'none';
        };
        viewData.isAccessoryBuyNowButtonVisible_FUNC_INDEX = function () {
            var i = Math.floor(viewData.accessoryIndex);
            //This accessoryIndex is a hack, following same approach that on relatedIndex. It needs re thinking how to handle this.
            //Increment the index only in the last function called from the accessorise template part
            viewData.accessoryIndex++;
            return viewData.accessories[i].accessoryUrl ? 'block' : 'none';
        };
        viewData.isAccessoryUrlClickable_FUNC_INDEX = function () {
            var i = Math.floor(viewData.accessoryIndex);
            return viewData.accessories[i].accessoryUrl ? '' : 'fff-unclickable';
        };
        viewData.isAccessoryDottedLineVisible_FUNC_INDEX = function () {
            var i = Math.floor(viewData.accessoryIndex);
            return !viewData.accessories[i].accessoryUrl && !viewData.accessories[i].accessoryPrice ? 'none' : 'block';
        };
        viewData.getProductUrl_FUNC = function () {
            return viewData.expired ? viewData.spikedUrl : viewData.productUrl;
        };

        viewData.hasCroppedImage = testProperty(viewData, 'article.cropImages.overlay');
        viewData.hasNoCroppedImage = !viewData.hasCroppedImage;

        viewData.imageUnclickableBehaviour_FUNC = function() {
            if(!viewData.getProductUrl_FUNC()) {
                return 'return false;';
            }
            return '';
        };
        viewData.imageUnclickableClass_FUNC = function() {
            if(!viewData.getProductUrl_FUNC()) {
                return " fff-unclickable";
            }
            return '';
        };
        viewData.relatedIndex = 0;

        viewData.getRelatedProductUrl_FUNC_INDEX = function () {
            var i = Math.floor(viewData.relatedIndex / 2);
            viewData.relatedIndex++;
            return viewData.expired ? viewData.relatedProducts[i].spikedUrl : viewData.relatedProducts[i].relatedUrl;
        };

        viewData.croppedImagesPath = window.FFF.env.croppedImagesPath;
    },
    celebrityOrDefault: function(celebrity, fffData) {
        if(!celebrity) {return fffData.articleId;}
        return celebrity;
    },
    mainProductOrDefault: function(mainProduct) {
        if(!mainProduct) {return 'notavailable';}
        return mainProduct;
    },
};

function testProperty(obj, prop) {
    var parts = prop.split('.');
    for(var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if(obj !== null && typeof obj === "object" && part in obj) {
            obj = obj[part];
        }
        else {
            return false;
        }
    }
    return true;
}

//do module.exports only for NodeJS, not in the front end as module is not defined there
if(typeof window === 'undefined') {
    module.exports = FFFOverlayHelpers;
}

if (window.FFF === undefined) {
    window.FFF = {};
}

function getShareUrl (articleUrl, imageUrl, socialMediaPlatform) {
  return articleUrl + '?ito=' + socialMediaPlatform + '#' + imageUrl;
}
window.FFF.getInlineData = function () {
    var fffInline = $('.fff-inline');
    if(!fffInline.length) return undefined;
    return {
        absoluteUrl: fffInline.data().fff_url,
        articleId: fffInline.data().fff_article_id,
        articleUrl: fffInline.data().fff_article_url,
        body: [fffInline.data().fff_capped_bodys_first_paragraph],
        mainTitle: fffInline.data().fff_main_title,
        openMainOverlayOnHover: fffInline.data().fff_open_main_overlay_on_hover,
        personName: fffInline.data().fff_person_name,
        previewTitle: fffInline.data().fff_preview_title,
        productId: fffInline.data().fff_product_id,
        shareUrl: fffInline.data().fff_share_url,
        url: fffInline.data().fff_url
    };
};

window.FFF.postToFB = function (event, imageUrl, inline) {
    var data = window.FFF.getInlineData() || window.FFF.viewCache[imageUrl];
    var celebrity = FFFOverlayHelpers.celebrityOrDefault(data.personName, data);
    var mainProduct = FFFOverlayHelpers.mainProductOrDefault(data.productId);
    window.FFF.trackClickSocial('facebook', celebrity, mainProduct, window.FFF.openOverlayEvent || event, inline);
    var sharingUrl = 'https://www.facebook.com/dialog/feed?' +
    DMS.buildUrlParameters({
        app_id: window.FFF.env.facebookAppId,
        link: getShareUrl(data.articleUrl, data.url, 'facebook_share-fff'),
        picture: data.absoluteUrl,
        name: data.mainTitle,
        caption: 'Latest from Femail Fashion Finder',
        description: data.body[0],
        redirect_uri: 'http://i.dailymail.co.uk/i/pix/facebook/close.html'
    });
    window.open(sharingUrl, "", DMS.getWindowDimensions(1024, 600));
};

window.FFF.postToTWTTR = function (event, imageUrl, inline) {
    var TWITTER_VIA_PREFIX = " via @";
    var HASHTAG_PREFIX = " #";
    var WHITE_SPACE = " ";
    var TWITTER_MESSAGE_LIMIT = 140;
    var data = window.FFF.getInlineData() || window.FFF.viewCache[imageUrl];
    var celebrity = FFFOverlayHelpers.celebrityOrDefault(data.personName, data);
    var mainProduct = FFFOverlayHelpers.mainProductOrDefault(data.productId);
    window.FFF.trackClickSocial('twitter', celebrity, mainProduct, window.FFF.openOverlayEvent || event, inline);

    var via = "Femail";
    var related = "Femail,DMAILshowbiz,DailyMailCeleb,MailOnline,DailyMailUS";
    var hashtag = "FashionFinder";

    var previewTitle = data.previewTitle || '';
    var shareUrl = getShareUrl(data.articleUrl, data.url, 'twitter_share-fff');
    var shareUrlLength = 23; //Twitter uses 23 characters for not shortened urls
    var twitterMessageLength = previewTitle.length + WHITE_SPACE.length + shareUrlLength + HASHTAG_PREFIX.length + hashtag.length + TWITTER_VIA_PREFIX.length + via.length;
    if (twitterMessageLength > TWITTER_MESSAGE_LIMIT) {
        previewTitle = previewTitle.substr(0, previewTitle.length - (twitterMessageLength - TWITTER_MESSAGE_LIMIT) - 3) + "...";
    }

    var sharingUrl = 'https://twitter.com/share?' +
    DMS.buildUrlParameters({
        url: shareUrl,
        via: via,
        text: previewTitle,
        related: related,
        hashtags: hashtag
    });
    window.open(sharingUrl, "", DMS.getWindowDimensions(550, 470));
};

window.FFF.postToPinterest = function (event, imageUrl, inline) {
    var data = window.FFF.getInlineData() || window.FFF.viewCache[imageUrl];
    var celebrity = FFFOverlayHelpers.celebrityOrDefault(data.personName, data);
    var mainProduct = FFFOverlayHelpers.mainProductOrDefault(data.productId);
    window.FFF.trackClickSocial('pinterest', celebrity, mainProduct, data.openMainOverlayOnHover || event, inline);
    DMS.Pinterest.postToPinterest('fff', {
        type: 'fff',
        media : imageUrl,
        description : data.mainTitle + ' #DailyMail',
        url : getShareUrl(data.articleUrl, data.url, 'pinterest_share-fff')
    });
};

window.FFF.postToGPlus = function (event, imageUrl, inline) {
    var CALL_TO_ACTION_LABEL = 'WANT';
    var COOKIE_POLICY = 'single_host_origin';
    var PREFILL_TEXT = 'Look what I found with the #FemailFashionFinder... ';
    var GOOGLE_POST_ID = 'googleSharePost';
    var data = window.FFF.getInlineData () || window.FFF.viewCache[imageUrl];
    var celebrity = FFFOverlayHelpers.celebrityOrDefault(data.personName, data);
    var mainProduct = FFFOverlayHelpers.mainProductOrDefault(data.productId);
    window.FFF.trackClickSocial('google-plus', celebrity, mainProduct, window.FFF.openOverlayEvent || event, inline);
    var options = {
        contenturl: window.FFF.env.fffHost + '/googleplussharing?url=' + imageUrl,
        clientid: window.FFF.env.googlePlusId,
        cookiepolicy: COOKIE_POLICY,
        prefilltext: PREFILL_TEXT,
        calltoactionlabel: CALL_TO_ACTION_LABEL,
        calltoactionurl: getShareUrl(data.articleUrl, data.url)
    };
    gapi.interactivepost.render(GOOGLE_POST_ID, options);
};

(function ($) {

    if (window.FFF === undefined) {
        window.FFF = {};
    }

    //for local testing s is not defined
    s = typeof(s) === 'undefined' ? { tl: function () {
    }} : s;

    window.onfocus = function () {
        s.modalFocus = new Date();
    };

    window.FFF.trackFFFImpression = function (fffData, fffType, fffSource, items, trends, position, fffNotFullyLoaded) {
        var mainProduct = FFFOverlayHelpers.mainProductOrDefault(fffData.productId);
        var celebrity = FFFOverlayHelpers.celebrityOrDefault(fffData.personName, fffData);

        var data = {
            celebrity: celebrity,
            mainProduct: mainProduct,
            pageMetaData: DM.getPageMetadata(),
            fffType: fffType,
            fffSource: fffSource,
            position: position,
            items: items,
            trends: trends,
            fffNotFullyLoaded: fffNotFullyLoaded
        };
        DM.pageEvents.fireEvent(DM.pageEvents.FFF_CONTENT_VIEWED, data);
        DM.Log.log('fff', 'fff:FFF_CONTENT_VIEWED event fired with data', data);
        if (!fffType.match(/^inline/)) {
            overlayAdImpression();
        }
    };

    window.FFF.trackClickSocial = function (socialSite, celebrity, mainProduct, event, inline) {
        var data = {
            celebrity: celebrity,
            mainProduct: mainProduct,
            socialSite: socialSite,
            pageMetaData: DM.getPageMetadata(),
            fffType: inline || window.FFF.fffType(event),
            fffSource: window.FFF.fffSource(event)
        };
        DM.pageEvents.fireEvent(DM.pageEvents.FFF_SOCIAL_CLICKED, data);
        DM.Log.log('fff', 'fff:FFF_SOCIAL_CLICKED event fired with data', data);
    };

    window.FFF.trackClickBuyMain = function (celebrity, mainProduct, items, trends, event, fffSource, position) {
        var data = {
            celebrity: celebrity,
            mainProduct: mainProduct,
            items: items,
            trends: trends,
            fffType: window.FFF.fffType(event),
            fffSource: fffSource,
            position: position,
            pageMetaData: DM.getPageMetadata()
        };
        DM.pageEvents.fireEvent(DM.pageEvents.FFF_BUY_MAIN_CLICKED, data);
        DM.Log.log('fff', 'fff:FFF_BUY_MAIN_CLICKED event fired with data', data);
    };

    window.FFF.trackClickBuyRelated = function (celebrity, mainProduct, relatedProduct, items, trends, event, fffSource, position) {
        var data = {
            celebrity: celebrity,
            mainProduct: mainProduct,
            relatedProduct: relatedProduct,
            items: items,
            trends: trends,
            fffType: window.FFF.fffType(event),
            fffSource: fffSource,
            position: position,
            pageMetaData: DM.getPageMetadata()
        };
        DM.pageEvents.fireEvent(DM.pageEvents.FFF_BUY_RELATED_CLICKED, data);
        DM.Log.log('fff', 'fff:FFF_BUY_RELATED_CLICKED event fired with data', data);
    };

    window.FFF.trackClickBuyAccessory = function (celebrity, mainProduct, accessory, items, trends, event, fffSource, position) {
        var data = {
            celebrity: celebrity,
            mainProduct: mainProduct,
            accessoryProduct: accessory,
            items: items,
            trends: trends,
            fffType: window.FFF.fffType(event),
            fffSource: fffSource,
            position: position,
            pageMetaData: DM.getPageMetadata()
        };
        DM.pageEvents.fireEvent(DM.pageEvents.FFF_BUY_ACCESSORY_CLICKED, data);
        DM.Log.log('fff', 'fff:FFF_BUY_ACCESSORY_CLICKED event fired with data', data);
    };

    window.FFF.trackClickCarouselArrows = function (celebrity, mainProduct, depth) {
        var data = {
            celebrity: celebrity,
            mainProduct: mainProduct,
            depth: depth
        };
        DM.pageEvents.fireEvent(DM.pageEvents.FFF_CAROUSEL_CLICKED, data);
        DM.Log.log('fff', 'fff:FFF_CAROUSEL_CLICKED event fired with data', data);
    };

    window.FFF.trackClickToFFFHub = function(bannerMode) {
        var data = {
            bannerMode: bannerMode
        };
        DM.pageEvents.FFF_LINK_TO_HUB_CLICKED && DM.pageEvents.fireEvent(DM.pageEvents.FFF_LINK_TO_HUB_CLICKED, data);
        DM.Log.log('fff', 'fff:FFF_LINK_TO_HUB_CLICKED event fired with data', data);
    };

    window.FFF.trackClickToFFFArticle = function(articleId) {
        var data = { articleId: articleId};
        DM.pageEvents.FFF_LINK_TO_ARTICLE_CLICKED && DM.pageEvents.fireEvent(DM.pageEvents.FFF_LINK_TO_ARTICLE_CLICKED, data);
        DM.Log.log('fff', 'fff:FFF_LINK_TO_ARTICLE_CLICKED event fired with data', data);
    };

    window.FFF.trackClickToAffiliate = function(celebrity, mainProduct, items, trends, event, fffSource, affiliate) {
        var data = {
            celebrity: celebrity,
            mainProduct: mainProduct,
            items: items,
            trends: trends,
            fffType: window.FFF.fffType(event),
            fffSource: fffSource,
            affiliate: affiliate,
            pageMetaData: DM.getPageMetadata()
        };
        DM.pageEvents.FFF_LINK_TO_AFFILIATE_CLICKED && DM.pageEvents.fireEvent(DM.pageEvents.FFF_LINK_TO_AFFILIATE_CLICKED, data);
        DM.Log.log('fff', 'fff:FFF_AFFILIATE_CLICKED event fired with data', data);
    };

    function overlayAdImpression() {
        var fffOverlay = $('#fff_overlay');
        if ($('#fff_overlay_top').length && !fffOverlay.hasClass('impression_registered')) {
            fffOverlay.addClass('impression_registered');
            AdImpression.registerImpression(document.getElementById('fff_overlay'), function () {
                DM.Log.log('ad impression registered');
            });
        }
    }

})(window.jQuery);
if (window.FFF === undefined) {
    window.FFF = {}
}

window.FFF.addProductButton = function ($) {
    var editorFrame;
    var helloAckReceived;
    var host = window.FFF.env.editorHost;

    var openEditorForImage = function () {
        var hashMatch = window.location.hash.match(/#(.*)/);

        if(hashMatch && window.FFF.getParameterFromUrl("openEditor") == 'y') {
            openAdmin(hashMatch[1], null);
        }
    };

    var openEditor = function() {
        editorFrame = $('#fff-editor iframe')[0].contentWindow;
        var attempts = 0;
        var ts = setInterval(function() {
            if (attempts++ >= 10 && helloAckReceived) {
                clearInterval(ts);
                helloAckReceived = false;
                return;
            }
            editorFrame.postMessage({hello:true, fff:true}, host);
        }, 500);
        //Unbinding the mouse leave event for the tbox which could have been bound for the overlay
        $('.tbox').unbind('mouseleave');//TODO review whether blocking the event propagation is enough
        $('.tinner iframe').bind( 'mousewheel DOMMouseScroll', function ( e ) {
            var delta = e.wheelDelta || -e.detail;
            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });
    };

    var closeEditor = function () {
        var editorFrame = $('#fff-editor iframe')[0].contentWindow;

        // Will close Tiny box if the iframe is offline or not responding.
        var timeoutId = setTimeout(function () {
            TINY.box.closetbox();
        }, 2000);

        editorFrame.postMessage({close_editor:true, timeoutId:timeoutId, fff:true}, host);
    };

    window.addEventListener('message', function (event) {
        if (typeof event != 'object' || !event.data.fff) {
            return;
        }

        clearTimeout(event.data.timeoutId);

        if (event.data.closeWindow) {
            if (event.data.unsaved_changes) {
                var answer = confirm("You have unsaved changes which would be lost. Do you want to continue? \n Press cancel to abort.");
                if (answer) {
                    TINY.box.closetbox();
                }
            } else {
                TINY.box.closetbox();
            }
        }
        if(event.data.reload) {
            window.FFF.init($);
        }
        if (event.data.helloAck) {
            helloAckReceived = true;
        }

    });

    var openAdmin = function (imageUrl, event) {
        if(event) event.stopPropagation();

        var parentDataForIframe = {
            host:window.location.host,
            hostname:window.location.hostname,
            href:window.location.href,
            pathname:window.location.pathname,
            port:window.location.ports,
            imageUrl:imageUrl,
            pageCriteriaGeo:window.FFF.getPageCriteriaGeo(),
            articleId:window.FFF.getPageCriteriaArticleId()
        };

        var iframeHeight = $(window).height() - 80;
        var iframeUrl = host + '/admin/main?data=' + encodeURIComponent(JSON.stringify(parentDataForIframe));

        TINY.box.show({
            boxid:'fff-editor',
            iframe:iframeUrl,
            width:1300,
            height:iframeHeight,
            close:true,
            opacity:50,
            fixed:true,
            animate:true,
            openjs: openEditor,
            closejs:closeEditor
        });
    };

    $(function () {
        $('img.blkBorder').map(function () {
            $(this).parent().addClass('fff-admin');

            $(this).parent().append('' +
                '<div class="fff-control-box-hover"></div>' +
                '<a class="fff-control-box fff-control-add-product" href="javascript:void(0)">Add Product</a>'
            );
        });

        $('.fff-control-box-hover, .fff-control-box').on('mouseenter', function (e) {
            $(this).parent().find('.fff-control-box').show();
        });

        $('.fff-control-box-hover, .fff-control-box').on('mouseleave', function (e) {
            $(this).parent().find('.fff-control-box').hide();
        });

        $('.fff-control-add-product').click(function (e) {
            openAdmin($(this).closest('.fff-admin').find('.blkBorder').attr('src'), e);
        });

        setTimeout(function () {
            openEditorForImage();
        }, 1000);
    });

};

(function ($) {
    var fff = window.FFF,
        resetScrollHack,
        currentTop,
        isAndroidBrowser42x = navigator.userAgent.search(/Android 4\.[23456789].*Chrome\/[1]/i) !== -1,
        $stickyBanner,
        $popup;

    function displayIcon(fffDocument, Mustache, forceDisplayIcon) {
        var iconDisplayed = false;
        //We only want one FFF on mobile article pages. Either an inline or an overlay when there is no inline
        if(forceDisplayIcon) {
            iconDisplayed = attachFFFHoverIconClickHandler(addFFFHoverIconMarkup(getElement(getImageElement())));
        }
        return iconDisplayed;

        function getImageElement() {
            var deferredSrc = $('img[data-src="' + fffDocument.url + '"]');
            return deferredSrc && deferredSrc.length > 0 ? deferredSrc : $('img[src="' + fffDocument.url + '"]');
        }

        function addFFFHoverIconMarkup($element) {
            var html = Mustache.render(fff.views.overlay, fffDocument);
            return $element.after(['<div class="fff-hover-icon fff-m-hover-icon" data-id="', fffDocument.url, '">', html, '</div>'].join(''));
        }

        function attachFFFHoverIconClickHandler($element) {
            $element.next('.fff-hover-icon').on('click', onFFFHoverIconClick);
            return $element && $element.length > 0;

            function onFFFHoverIconClick() {
                _displayPopup(fffDocument, fffDocument.url, Mustache);
            }
        }

        function getElement($image) {
            var $element = $image.parent('.fff-pic').first();
            if ($element.is('figure')) {
                $element = $image;
            }
            return $element;
        }
    }

    var _displayPopup = function(fffDocument, id, Mustache) {
        if (!$popup) {
            $('body').append('<div id="fff-popup"></div>');
            $popup = $('#fff-popup');
        }
        if (!fff.templateCache[id]) {
            var accessoriseNativeAdHtml = '';
            var accessoriseNativeAd = $('.fff-accessorise');
            if(accessoriseNativeAd.length) {
                accessoriseNativeAdHtml = accessoriseNativeAd[0].innerHTML;
            }
            fff.templateCache[id] = Mustache.render(fff.views.popup, fff.decorateWithExtraInformation(fffDocument), {accessoriseNativeAd: accessoriseNativeAdHtml});
        }
        _showPopup(fffDocument, id);
    };

    var displayPopup = function(event, src, Mustache) {
        _displayPopup(fff.viewCache[src], src, Mustache);
    };

    var _showPopup = function(fffDocument, id) {

        if (!navigator.userAgent.match(/msie/i)) $('html').addClass('noscroll');
        currentTop = $(window).scrollTop();
        /* TL;DR this is an hack for the Samsung S4 android browser (4.2.2) */
        /* Every android browser tested has a bug managing position fixed windows:
         They continue scrolling the window despite of overflow: hidden on
         html.
         The Samsung S4 has another nasty bug: it cannot detect correctly the
         coordinates of a touch event on a fixed box if the window below is scrolled.
         For these reasons I reset (for this browser only) the window scroll position.
         Without this the close button doesn't work.
         */
        if(isAndroidBrowser42x){
            resetScrollHack = setInterval(function (){
              var top = $(window).scrollTop();
              if (top !== 0){
                window.scrollTo(0, 0)
              }
            }, 800);
        }

        $popup.html(fff.templateCache[id]);
        $popup.scrollTop(0);
        $popup.find('.fff-back, .fff-close').on('click', _closePopup);
        $popup.addClass('active');

        if(!$stickyBanner) $stickyBanner = $('#stickyBanner');
        $stickyBanner.toggleClass('sticky-disabled');

        fff.trackFFFImpression(fffDocument,
            'click',
            'article',
            fffDocument.productTypes ? fffDocument.productTypes.sort().join(',') : '',
            fffDocument.trends ? fffDocument.trends.sort().join(',') : '',
            '');
        fff.bindCarouselTrackingEvents(fffDocument.url, '.fff-m-popup', 'article');
        fff.bindMainProductaAndPartnerLinksTrackingEvents(fffDocument.url, '.fff-m-popup', 'article');
    };

    var _closePopup = function() {
        if(isAndroidBrowser42x){
            clearInterval(resetScrollHack);
        }
        window.scrollTo(0, currentTop);
        $stickyBanner.toggleClass('sticky-disabled');
        if (!navigator.userAgent.match(/msie/i)) $('html').removeClass('noscroll');

        $popup.removeClass('active');
        fff.isOverlayOpen = false;
    };

    function expandMobileInline() {
        $('.fff-read-more').addClass('hidden');
        $('.fff-m-expandable').removeClass('hidden');
    }

    function hideAllInlinesAfterTheFirstOnMobile() {
        Array.prototype.slice.call(document.getElementsByClassName('fff-m-inline'), 1).forEach(function(fffInline) {
            fffInline.style.display = 'none';
        });
    }

    if (fff && fff.env && (fff.env.platform === 'mobile'))  {
        // mobile overrides
        fff.templateCache = fff.templateCache || {};
        fff.templatesPath = '/mobile/templates';
        fff.imgSelector = 'img[id^=i-]';
        fff.displayIcon = displayIcon;
        fff.displayPopup = displayPopup;
        fff.expandMobileInline = expandMobileInline;
        fff.hideAllInlinesAfterTheFirstOnMobile = hideAllInlinesAfterTheFirstOnMobile;
    }

})(window.jQuery);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var HORIZONTAL_CAROUSEL_SCROLL_OFFSET = 3;
var VERTICAL_CAROUSEL_SCROLL_OFFSET = 2;
var MOBILE_HORIZONTAL_CAROUSEL_SCROLL_OFFSET = 2;
var moveTypeTargetSignMapping = {
    prev: '-',
    next: '+'
};
var debouncedFunction;

function isMobileInline() {
    var mobileInline = $('.fff-m-inline');
    return  mobileInline && mobileInline.length > 0;
}

function setCarouselItemsWidthForMobile($carousel) {
    if(isMobileInline()) {
        var carouselItems = $('.fff-m-inline .fff-carousel li');
        setCarouselItemsWidth(carouselItems, $carousel);
        keepCarouselItemsWidthToHalfOfScreenSize(carouselItems, $carousel);
    }
}

function setUpCarouselControls(carouselInstance, fffCarouselSelectorPrefix) {
    $(fffCarouselSelectorPrefix + ' .fff-carousel-control.prev').jcarouselControl(getCarouselOptions(carouselInstance, 'prev'));
    $(fffCarouselSelectorPrefix + ' .fff-carousel-control.next').jcarouselControl(getCarouselOptions(carouselInstance, 'next'));

    $(fffCarouselSelectorPrefix + ' .fff-carousel-control')
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        });
}

function setUpCarouselPagination() {
    var jCarouselPagination = $('.fff-carousel-pagination');
    jCarouselPagination
        .jcarouselPagination({
            perPage: 2,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        })
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        });
    $($('.fff-carousel-pagination a')[0]).addClass('active');
}

function setUpSwipeFunctionalityForMobile($carousel) {
    $carousel.touchswipe({
        swipeLeft: function() {
            $('.fff-carousel-control.next').click();
        },
        swipeRight: function() {
            $('.fff-carousel-control.prev').click();
        },
        min_move_x: 10,
        preventDefaultEvents: false,
        stopPropagation: true
    });
}

function setCarouselItemsWidth(carouselItems, $carousel) {
    var carouselWrapWidth = parseInt($('.fff-m-inline').css('width'));
    var carouselItemWidth = Math.floor(carouselWrapWidth / 2);
    carouselItems.css('width', carouselItemWidth + 'px');
    $carousel.jcarousel('reload');//Reloading the carousel so the new width is picked up when setting the current visible items
}

function keepCarouselItemsWidthToHalfOfScreenSize(carouselItems, $carousel) {
    window.addEventListener('resize', function() {
        debounce(setCarouselItemsWidth, [carouselItems, $carousel], 150);
    });
    window.addEventListener('orientationchange', function() {
        debounce(setCarouselItemsWidth, [carouselItems, $carousel], 150);
    });
}

function debounce(fn, params, timeout) {
    if(debouncedFunction) {
        clearTimeout(debouncedFunction);
    }
    debouncedFunction = setTimeout(function() {
        debounced(fn, params);
    }, timeout);
    function debounced(fn, params) {
        fn.apply(null, params);
        debouncedFunction = null;
    }
}

function getCarouselOptions(carouselInstance, moveType) {
    return addCarouselMethodForMobile(moveType, getDefaultCarouselOptions(carouselInstance, moveType));
}

function getDefaultCarouselOptions(carouselInstance, moveType) {
    return {
        target: getTargetSignForMoveType(moveType) + getCarouselScrollOffset(carouselInstance)
    };
}

function getCarouselScrollOffset(carouselInstance) {
    if(isMobileInline()) return MOBILE_HORIZONTAL_CAROUSEL_SCROLL_OFFSET;
    if(carouselInstance && carouselInstance._options && carouselInstance._options.vertical) return VERTICAL_CAROUSEL_SCROLL_OFFSET;
    return HORIZONTAL_CAROUSEL_SCROLL_OFFSET;
}

function getTargetSignForMoveType(moveType) {
    return moveTypeTargetSignMapping[moveType] + '=';
}

function addCarouselMethodForMobile(moveType, options) {
    if(isMobileInline()) {
        var pagination = $('.fff-carousel-pagination');
        if (moveType === 'prev') {
            options.method = function () {
                pagination.find('.active').prev().trigger('click');
            };
        } else {
            options.method = function() {
                pagination.find('.active').next().trigger('click');
            }
        }
    }
    return options;
}

module.exports = {
    isMobileInline: isMobileInline,
    setCarouselItemsWidthForMobile: setCarouselItemsWidthForMobile,
    setUpCarouselControls: setUpCarouselControls,
    setUpCarouselPagination: setUpCarouselPagination,
    setUpSwipeFunctionalityForMobile: setUpSwipeFunctionalityForMobile
};

},{}],2:[function(require,module,exports){
var carousel = require('./carousel');

if (window.FFF === undefined) window.FFF = {};

function bindEventsAndRegisterImpressionWhenNoResponse() {
    var fffInlineTrackingMetadata = getFFFInlineTrackingMetadata();
    if (fffInlineTrackingMetadata) {
        var fffDataFromInlineDataTags = getFFFDataFromInline(fffInlineTrackingMetadata.fffInline);
        window.FFF.bindTrackingEventsWhenNoResponse(fffDataFromInlineDataTags, fffInlineTrackingMetadata.selector, 'article');
        window.FFF.prepareFFFImpressionWhenNoResponse(fffDataFromInlineDataTags, fffInlineTrackingMetadata.type, 'article');
    }
}

function getFFFInlineTrackingMetadata() {
    var fffPartialInline = $('.fff-partial');
    var fffMobileInline = $('.fff-m-inline');
    var fffFullInline = $('.fff-inline');
    if (fffPartialInline && fffPartialInline.length) {
        return {type: 'inline-partial', selector: '.fff-inline .fff-popup', fffInline: fffPartialInline};
    } else if (fffMobileInline && fffMobileInline.length) {
        return {type: 'inline', selector: '.fff-m-inline.fff-m-popup', fffInline: fffMobileInline};
    } else if (fffFullInline && fffFullInline.length) {
        return {type: 'inline', selector: '.fff-inline .fff-popup', fffInline: fffFullInline};
    }
    return null;
}

function initialiseCarousel(viewCache) {
    var $inlineCarousel = getInlineCarousel();
    if ($inlineCarousel) {
        var vertical = $inlineCarousel.attr('data-fff_vertical') === 'true';
        $inlineCarousel
            .on('jcarousel:createend', function(event, carouselInstance) { onInlineCarouselCreate(viewCache, carouselInstance, $inlineCarousel) })
            .jcarousel({ list: '.fff-inline-related-products' , items: '.fff-carousel-item', vertical: vertical});
    }
}


function getFFFDataFromInline(fffInline) {
    return {
        personName: fffInline.data().fff_person_name,
        productId: fffInline.data().fff_product_id,
        productTypes: fffInline.data().fff_product_types ? fffInline.data().fff_product_types.split(',') : [],
        trends: fffInline.data().fff_trends ? fffInline.data().fff_trends.split(',') : [],
        articleId: fffInline.data().fff_article_id
    };
}

function getInlineCarousel() {
    var inlineCarousel = $('.fff-carousel');
    return inlineCarousel && inlineCarousel.length && $(inlineCarousel[0]);
}

function onInlineCarouselCreate(viewCache, carouselInstance, $inlineCarousel) {
    //Keep the binding of the tracking for carousel before setting up the carousel controls. Otherwise, the last
    //click on an active carousel control will not be tracked because the control will be inactive by the time
    //the callback of the tracking binding event executes
    bindCarouselTrackingEvents(viewCache);
    carousel.setUpCarouselControls(carouselInstance, '');
    carousel.setUpCarouselPagination();
    carousel.setCarouselItemsWidthForMobile($inlineCarousel);
    carousel.setUpSwipeFunctionalityForMobile($inlineCarousel);
    makeInlineCarouselVisible();
}

function makeInlineCarouselVisible() {
    var loader = $('.loader');
    if (loader && loader.length) {
        loader.addClass('hidden');
        $('.fff-carousel-with-controls').removeClass('hidden');

        //TODO remove after the back end with the new template gets released
        $('.fff-carousel').removeClass('hidden');
    }
}

function bindCarouselTrackingEvents(viewCache) {
    if (getInlineCarousel()) {
        var fffInlineTrackingMetadata = getFFFInlineTrackingMetadata();
        var fffInlineUrl = fffInlineTrackingMetadata.fffInline.data().fff_url;
        if (fffInlineTrackingMetadata && viewCache[fffInlineUrl]) {
            window.FFF.bindCarouselTrackingEvents(fffInlineUrl, fffInlineTrackingMetadata.selector, 'article');
        }
    }
}

module.exports = {
    bindEventsAndRegisterImpressionWhenNoResponse: bindEventsAndRegisterImpressionWhenNoResponse,
    getFFFInlineTrackingMetadata: getFFFInlineTrackingMetadata,
    initialiseCarousel: initialiseCarousel
};

},{"./carousel":1}],3:[function(require,module,exports){
(function (window, $, Mustache) {

    if (window.FFF === undefined) window.FFF = {};

    window.FFF.iconHeight = 61;
    window.FFF.iconWidth = 60;
    window.FFF.iconBorder = 10;
    window.FFF.openOverlayHoverDelay = 1000;
    window.FFF.isOverlayOpen = false;
    window.FFF.templatesPath = window.FFF.templatesPath || '/templates';
    window.FFF.imgSelector = window.FFF.imgSelector || 'img.blkBorder';

    var openOnHoverOverlayTimeOut;
    var inline = require('./inline');

    //get parameter from window.location
    window.FFF.getParameterFromUrl = function (name) {
        if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search))
            return decodeURIComponent(name[1]);
    };

    window.FFF.isIpad = function () {
        return navigator.userAgent.match(/ipad/i);
    };

    window.FFF.onImageError = function (img) {
        window.jQuery(img).attr('src', 'http://i.mol.im/i/furniture/fff/hub/placeholder.png');
        window.jQuery(img).attr('onerror', '');
    };

    window.FFF.getFFFHost = function () {
        return (window.FFF.isPreviewMode && window.FFF.env.fffPreviewHost)
            ? window.FFF.env.fffPreviewHost : window.FFF.env.fffHost;
    };

    window.FFF.viewCache = {};

    window.FFF.init = function ($, reload) {
        var hoverEnabled = true;
        var viewCache = window.FFF.viewCache;
        var templateCache = window.FFF.templateCache = {};

        hideIcons();

        if (reload) {
            showIcons();
            return;
        }

        function findClosestBlockElement(element) {
            return $.grep(element.parents(), function (closeElement) {
                var elementStyle = closeElement.currentStyle || window.getComputedStyle(closeElement, '');
                return elementStyle.display == 'block';
            })[0];
        }

        function addFFFPictureClass(cb) {
            $(function () {
                $(window.FFF.imgSelector).each(function () {
                    var el = findClosestBlockElement($(this));
                    if (el) {
                        $(el).addClass('fff-pic');
                    }
                });
                cb();
            });
        }

        function buildBackendUrl(articleId) {
            return window.FFF.getFFFHost() + '/products?articleId=' + articleId + window.FFF.getGeoUrlParameter(window.FFF.getPageCriteriaGeo());
        }

        function openOverlayIfHashExists() {
            if (!window.FFF.getParameterFromUrl('openEditor')) {
                var hash = window.location.hash.match(/#(.*)/);
                if (hash) {
                    var src = hash[1];
                    var matchedImages = $([window.FFF.imgSelector + '[data-src="' + src + '"]', window.FFF.imgSelector + '[src="' + src + '"]'].join());
                    if (matchedImages.length > 0) {
                        var newTop = matchedImages.offset().top;
                        window.scroll(0, newTop);
                        setTimeout(function () {
                            window.FFF.displayPopup({type: 'mock', stopPropagation: function () {
                            }}, src, Mustache);
                        }, 100);
                    }
                }
            }
        }

        function requestAccessoriseOvelayAd() {
            adsRenderer.requestDelayedAdvert('fff-overlay-accessorise-ad');
        }

        function processResponse(data, cb) {
            if (adsRenderer && data.length) {
                //Request the accessorise native ad as a delayed ad for the overlay if it has not been requested and got by the inline
                var overlay = document.createElement('div');
                var names = data.map(function (item) {
                    return item.personName;
                }).filter(function (item, index, array) {
                    return array.indexOf(item) === index;
                });
                overlay.id = 'fff_overlay';
                document.body.appendChild(overlay);
                adsRenderer.addLoadListener(requestAccessoriseOvelayAd);
                adverts.addToArray({id:overlay.id, type:'964x114', pos:'fff', extraZoneOptions:{FFFtype:'overlay', FFFname:names, fff:true}, command: 'pfadj', dcopt: true});
                initialiseAccessoriseNativeAdRequestSlot(requestAccessoriseOvelayAd);
            }

            $.each(data, function (index, viewData) {
                if (!viewData) return;
                FFFOverlayHelpers.extendViewData(viewData);
                cacheAndExtendViewData(viewData);
            });

            addFFFPictureClass(function () {
                showIcons();
                openOverlayIfHashExists();
                if (window.addEventListener) {
                    window.addEventListener('hashchange', openOverlayIfHashExists, false);
                } else {
                    window.attachEvent("onhashchange", openOverlayIfHashExists);
                }
                cb();
            });
        }

        function cacheAndExtendViewData(viewData) {
            var selector = selectImageByUrl(viewData.url);
            if (selector && selector.length) {
                viewData.absoluteUrl = selector.get(0).src;
                viewData.body = $.isArray(viewData.body) ? viewData.body : viewData.body ? viewData.body.split(/\n+/) : [];
            }
            // Cache
            viewCache[viewData.url] = viewData;
        }

        function hideIcons() {
            $('.fff-hover-icon').remove();
        }

        function showIcons() {
            //Show only one overlay on mobile, giving higher priority to the FFF acting as inline
            var inlineWasShown = false;
            var iconDisplayed;
            var nonInlineOverlaysToShowOnMobile = [];
            for (var key in viewCache) {
                var viewData = viewCache[key];
                if (viewData.status === 'live' && isCompleteFFF()) {
                    iconDisplayed = window.FFF.displayIcon(viewData, Mustache);
                    createDataToDisplayOnlyOneOverlayBannerOnMobile();
                }
            }
            showOneOverlayIfNoInlineWasShown();

            function showOneOverlayIfNoInlineWasShown() {
                if(window.FFF.env.platform === 'mobile' && !inlineWasShown && nonInlineOverlaysToShowOnMobile.length) {
                    var i = 0;
                    while(i < nonInlineOverlaysToShowOnMobile.length && !iconDisplayed) {
                        iconDisplayed = window.FFF.displayIcon(nonInlineOverlaysToShowOnMobile[i], Mustache, true);
                        i++;
                    }
                }
            }

            function createDataToDisplayOnlyOneOverlayBannerOnMobile() {
                if(window.FFF.env.platform === 'mobile') {
                    if(!viewData.usedAsInline) {
                        nonInlineOverlaysToShowOnMobile.push(viewData);
                    }
                    if(viewData.usedAsInline) {
                        inlineWasShown = true;
                    }
                }
            }

            function isCompleteFFF() {
                return viewData.image && viewData.relatedProducts && viewData.relatedProducts.length && viewData.body.length;
            }
        }

        function selectImageByUrl(url) {
            var deferredSource = $(window.FFF.imgSelector + '[data-src="' + url + '"]');
            if (deferredSource && deferredSource.length > 0) {
                return deferredSource;
            }
            return $(window.FFF.imgSelector + '[src="' + url + '"]');
        }

        window.FFF.displayIcon = window.FFF.displayIcon || function displayIcon(viewData) {
            var selector = selectImageByUrl(viewData.url);
            if (!selector || !selector.length) return; //There is no image so we do not need to display icon
            var height = parseInt((selector).css('height').replace('\D', ''));
            var iconTop = height - window.FFF.iconHeight - window.FFF.iconBorder;

            if (window.FFF.isIpad()) {
                iconTop = iconTop - 30;
                selector.parent().append('' +
                        '<div class="fff-hover-icon" data-id="' + viewData.url + '" style="top:' + iconTop + 'px;">' +
                        '<img src="http://f.mol.im/i/furniture/fff/fff-hover-ipad.png" alt="Edit"/>' +
                        '</div>'
                );

                if (window.FFF.galleryMode) {
                    var gallerNavHeight = 66;
                    var iconMargin = 10;
                    var iconSize = 80;
                    var noFurniture = ($('#mobileGalleryModal .no-furniture').length == 0) ? 0 : gallerNavHeight;

                    iconTop = $('#mobileGalleryModal .caption-bar').offset().top - $(window).scrollTop() - iconMargin - iconSize - noFurniture;
                    $('#mobileGalleryModal .fff-hover-icon').css({top: iconTop + 'px', position: "absolute"});
                }

                bindIconEvents(selector.parent().children('.fff-hover-icon'), viewData.url);

            } else {
                iconTop = iconTop - 10;
                var overlay_html = Mustache.render(window.FFF.views.overlay, viewData);
                selector.parent().append('' +
                        '<div class="fff-hover-icon" data-id="' + viewData.url + '" style="top:' + iconTop + 'px;">' +
                        '<img src="http://f.mol.im/i/furniture/fff/fff-hover.png" alt="Edit"/>' +
                        overlay_html +
                        '</div>'
                );
                bindIconEvents(selector.parent().children('.fff-hover-icon'), viewData.url);
            }
        };

        function stopPropagationAndPreventDefault(e) {
            //http://stackoverflow.com/questions/7993085/ie-9-showing-displaying-member-not-found
            if (e) {
                try {
                    e.stopPropagation();
                    e.preventDefault();
                } catch (e) {
                }
            }
        }

        function bindIconEvents(icon, viewId) {
            var overlay = icon.closest('.fff-pic').children('.fff-hover-icon').children('.fff-hover-overlay');

            icon.unbind('mouseenter');
            icon.unbind('mouseleave');
            icon.unbind('click');
            overlay.unbind('click');

            if (!window.FFF.isIpad()) {
                if (viewCache[viewId].openMainOverlayOnHover) {
                    icon.on('mouseenter', bindIconDisplayPopup);
                    icon.on('mouseleave', bindOverlyHide);
                    icon.on('click', stopPropagationAndPreventDefault);
                } else {
                    icon.on('mouseenter', bindIconOverlyShow);
                    icon.on('mouseleave', bindIconOverlyHide);
                    overlay.on('click', bindOverlayDisplayPopup);
                }
            } else {
                icon.on('click', bindIconDisplayPopup);
            }

            function bindIconDisplayPopup(e) {
                stopPropagationAndPreventDefault(e);
                if (viewCache[viewId].openMainOverlayOnHover && !window.FFF.isIpad()) {
                    openOnHoverOverlayTimeOut = setTimeout(function () {
                        window.FFF.displayPopup(e, viewId);
                    }, window.FFF.openOverlayHoverDelay);
                } else {
                    window.FFF.displayPopup(e, viewId);
                }

            }

            function bindIconOverlyShow() {
                overlay.show();
            }

            function bindIconOverlyHide() {
                overlay.hide();
            }

            function bindOverlyHide() {
                clearTimeout(openOnHoverOverlayTimeOut);
                closeOverlay(viewCache[viewId]);
            }

            function bindOverlayDisplayPopup(e) {
                window.FFF.displayPopup(e, viewId);
            }
        }

        window.FFF.displayPopup = window.FFF.displayPopup || function displayPopup(e, viewId) {
            stopPropagationAndPreventDefault(e);

            if (!window.FFF.isOverlayOpen) {
                window.FFF.isOverlayOpen = true;

                var mask = true;
                var withBorder = 'without-border';
                var defaultWidth = 800;
                viewData = viewCache[viewId];
                viewData.relatedIndex = 0;
                viewData.accessoryIndex = 0;

                if (viewData.openMainOverlayOnHover && !window.FFF.isIpad()) {
                    mask = false;
                    withBorder = 'with-border';
                }

                if (!templateCache[viewId]) {
                    initPopup();
                } else {
                    showPopup();
                }
            }

            function initPopup() {
                var accessoriseNativeAdHtml = '';
                var accessoriseNativeAd = $('.fff-accessorise');
                if(accessoriseNativeAd.length) {
                    accessoriseNativeAdHtml = accessoriseNativeAd[0].innerHTML;
                }

                templateCache[viewId] = Mustache.render(window.FFF.views.popup, window.FFF.decorateWithExtraInformation(viewData), {accessoriseNativeAd: accessoriseNativeAdHtml});

                var fffOverlayTop = $('#fff_overlay_top');
                if (fffOverlayTop.length) {
                    //add wrap around the template
                    var $adWrap = $('<div class="overlay-ad"></div>');
                    $adWrap.append(fffOverlayTop.clone());
                    $adWrap.append($('#fff_overlay_back').clone());
                    $adWrap.append($('#fff_overlay_bottom').clone());

                    $adWrap.find('#fff_overlay_back').append(templateCache[viewId]);
                    templateCache[viewId] = $adWrap[0];
                }
                showPopup();
            }

            function showPopup() {
                if ($('#fff_overlay_top').length) {
                    defaultWidth = 840;
                }

                TINY.box.show({
                    boxid: 'fff-overlay',
                    innerclass: withBorder,
                    fade: false,
                    mask: mask,
                    animate: true,
                    html: $(templateCache[viewId]).clone()[0], //CLONING FOR FIX A IE BUG
                    top: $(window).scrollTop() + 25,
                    width: defaultWidth,
                    height: 550,
                    close: true,
                    fixed: false,
                    opacity: 50,
                    openjs: function () {
                        onPopupOpen(viewData, e);
                    },
                    closejs: function () {
                        onPopupClose(viewData);
                    }
                });

                hoverEnabled = false;

                $(this).parent().find('> .fff-hover-overlay').hide();
            }
        };

        function onPopupClose(viewData) {
            window.FFF.onPopupClose(viewData);

            hoverEnabled = true;
            window.FFF.isOverlayOpen = false;
            $('.tbox').unbind('mouseleave');
        }

        function onPopupOpen(viewData, event) {
            window.FFF.onPopupOpen(viewData, event);

            if (viewData.openMainOverlayOnHover) {
                var tbox = $('.tbox');
                tbox.unbind('mouseleave').on('mouseleave', function () {
                    closeOverlay(viewData);
                });
            }
        }

        function closeOverlay(viewData) {
            setTimeout(function () {
                if (!isOverlayHovered() && !hoverEnabled) {
                    onPopupClose(viewData);
                }
            }, 10);
        }

        function isOverlayHovered() {
            /*** Hack with 10px for Opera to get hover state ***/
            return $('.tbox').css('min-width') == '10px';
            /*// Hack with 10px for Opera to get hover state //*/
        }

        function doProcessResponse(data, cb) {
            processResponse(data, cb);
        }

        var timesProductsRequested = 0;

        function fireRequest(url, cb) {
            if (timesProductsRequested >= 5) {
                inline.bindEventsAndRegisterImpressionWhenNoResponse();
                inline.initialiseCarousel(viewCache);
                return;
            }
            timesProductsRequested++;

            if (navigator.userAgent.indexOf('MSIE') != -1 && window.XDomainRequest) {
                var xdr = new XDomainRequest();
                xdr.open("GET", url);
                xdr.onload = function () {
                    doProcessResponse(JSON.parse(this.responseText), cb);
                };
                xdr.onerror = function () {
                    console.log('Error while getting response for request', url);
                    fireRequest(url, cb);
                };
                xdr.ontimeout = function () {
                    console.log('Time out while getting response for request', url);
                    fireRequest(url, cb);
                };
                xdr.onprogress = function () {
                };
                setTimeout(function () {
                    xdr.send();
                }, 0);
            } else {
                if (url){
                  $.ajax({
                      url: url,
                      method: 'GET',
                      crossDomain: true,
                      dataType: 'json',
                      success: function (data, textStatus, jqXHR) {
                          doProcessResponse(data, cb);
                      },
                      error: function (jqXHR, textStatus, errorThrown) {
                          console.log('Error while getting products', timesProductsRequested, jqXHR, textStatus, errorThrown);
                          setTimeout(function() {
                              fireRequest(url, cb);
                          }, 200);
                      }
                  });
                }
                else {
                  console.log('Error while getting products (url undefined)');
                }
            }
        }

        function queryBackend(cb) {
            var articleMatches = document.location.href.match(/article-(\d+)/);

            if (articleMatches && articleMatches.length > 1) {
                var articleId = articleMatches[1];
                fireRequest(buildBackendUrl(articleId), cb);
            }
        }

        (function () {
            queryBackend(function () {
                var fffInlineTrackingMetadata = inline.getFFFInlineTrackingMetadata();
                if (fffInlineTrackingMetadata) {
                    window.FFF.bindMainProductaAndPartnerLinksTrackingEvents(fffInlineTrackingMetadata.fffInline.data().fff_url, fffInlineTrackingMetadata.selector, 'article');
                    window.FFF.prepareFFFImpression(fffInlineTrackingMetadata.fffInline.data().fff_url, fffInlineTrackingMetadata.type, 'article');
                    inline.initialiseCarousel(viewCache);
                }
            });
        })();
    };

    function provideAdInlineCallback () {
        if (!window.FFF.ad) {
            window.FFF.ad = {inline: {adCallback: null}};
        }
        window.FFF.ad.inline.adCallback = window.FFF.ad.inline.adCallback || function (content, infix) {
            var inline,
                back;
            if (!infix) {
                inline = document.getElementById('fff-inline');
                infix = '';
            } else {
                infix = '_' + infix.replace(/^_/g, '');
                inline = document.getElementById('fff' + infix) && document.getElementById('fff' + infix).firstChild;
            }
            back = getBackElementById();
            if (isAsyncMode() && inline) setAdInCompatibilityMode();

            if (back && !infix) {
                back.appendChild(inline);
            }
            //delay the call because AdImpression.registerThirdPartyImpression has a timeout
            setTimeout(function () {
                DM.onDocReady(function () {
                    AdImpression.registerImpression(document.getElementById('fff'), function () {
                        DM.Log.log('ad impression registered');
                    });
                });
            }, 50);

            function isAsyncMode() {
                return content && (typeof content === 'string') && !back;
            }

            function setAdInCompatibilityMode() {
                var container = document.createElement('div'), i = 0, element, children;
                container.innerHTML = content;
                children = container.childNodes;
                // Going in reverse order as it is prepending the elements
                for (i = children.length; i--;) {
                    element = children[i];
                    if (element && element.tagName === 'DIV') {
                        inline.parentNode.insertBefore(element, inline.nextSibling);
                        if (isElementIdEqualsToBackElementId(element.id)) {
                            back = element;
                        }
                    }
                }
                if (children.length && !infix) {
                    (document.getElementById('fff') || {style: {}}).style.display = 'none';
                    (document.getElementById('fff-oop') || {style: {}}).style.display = 'none';
                }
            }

            function isElementIdEqualsToBackElementId(elementId) {
                return elementId === 'fff' + infix + '_back' || elementId === 'fff' + infix + '_back_wide';
            }

            function getBackElementById() {
                return document.getElementById('fff' + infix + '_back') || document.getElementById('fff' + infix + '_back_wide');
            }
        };
    }

    function initialiseAccessoriseNativeAdRequestSlot(cb) {
        function onAccessoriseAdSlot(adCallResponse) {
            var element = document.createElement('div');
            element.innerHTML = adCallResponse;
            document.body.appendChild(element);
            adverts && adverts.addToArray({id:"fff-overlay-accessorise-ad", type:"632x132", pos:"native_fff_overlay_accessorise", FFFtype:"overlay", fff:true});
            cb();
        }

        var accessoriseAdFromInline = $('.fff-accessorise');
        if(!accessoriseAdFromInline.length) {
            var url = window.FFF.env.accessoriseNativeAdUrl;
            if (navigator.userAgent.indexOf('MSIE') != -1 && window.XDomainRequest) {
                var xdr = new XDomainRequest();
                xdr.open("GET", url);
                xdr.onload = function () {
                    onAccessoriseAdSlot(this.responseText);
                };
                xdr.onerror = function () {
                    console.log('There was an error while getting overlay accessorise native ad');
                };
                xdr.ontimeout = function () {
                    console.log('Getting overlay accessorise native ad timeout');
                };
                xdr.onprogress = function () {
                };
                setTimeout(function () {
                    xdr.send();
                }, 0);
            } else {
                if (url){
                  $.ajax({
                      url: url,
                      method: 'GET',
                      crossDomain: true,
                      success: onAccessoriseAdSlot,
                      error: function (jqXHR, textStatus, errorThrown) {
                          console.log('There was an error while getting overlay accessorise native ad, error', textStatus, errorThrown);
                      }

                  });
                }
                else {
                  console.log('There was an error while getting overlay accessorise native ad, error (url undefined)');
                }

            }
        }
    }

    (function (window, $) {
        //No config means feature disabled
        if (typeof window.FFF.env === 'undefined') return;

        //Hack to fake geo US when using localhost-us or liveint-us.andintweb.dmgt.net //TODO remove
        if (window.location.hostname === 'liveint-us.andintweb.dmgt.net' || window.location.hostname === 'localhost-us') {
            typeof PageCriteria !== 'undefined' && PageCriteria ? PageCriteria.geo = 'US' : window.FFF.parent.pageCriteriaGeo = 'US';
        }

        provideAdInlineCallback();

        if (window.FFF.env.previewHostNames.indexOf(window.location.hostname) > -1) {
            window.FFF.isPreviewMode = true;
        }

        function cacheTemplates(initCallBack) {
            if (!window.FFF.views) {
                window.FFF.views = {};
            }

            var timesTemplatesRequested = 0;

            var getTemplates = function (url, onsuccess) {
                if (timesTemplatesRequested >= 5) {
                    inline.bindEventsAndRegisterImpressionWhenNoResponse();
                    inline.initialiseCarousel({});
                    return;
                }
                timesTemplatesRequested++;

                if (navigator.userAgent.indexOf('MSIE') != -1 && window.XDomainRequest) {
                    var xdr = new XDomainRequest();
                    xdr.open("GET", url);
                    xdr.onload = function () {
                        onsuccess(JSON.parse(this.responseText));
                    };
                    xdr.onerror = function () {
                        console.log('There was an error while getting the templates, retrying');
                        getTemplates(url, onsuccess);
                    };
                    xdr.ontimeout = function () {
                        console.log('Getting the templates timeout, retrying');
                        getTemplates(url, onsuccess);
                    };
                    xdr.onprogress = function () {
                    };
                    setTimeout(function () {
                        xdr.send();
                    }, 0);
                } else {
                    if (url){
                      $.ajax({
                          url: url,
                          method: 'GET',
                          crossDomain: true,
                          success: onsuccess,
                          error: function (jqXHR, textStatus, errorThrown) {
                              console.log('Retrying to get the templates, after error', timesTemplatesRequested, textStatus, errorThrown);
                              setTimeout(function() {
                                  getTemplates(url, onsuccess);
                              }, 200);
                          }
                      });
                    }
                    else {
                      console.log('Error getting the templates (url undefined)');
                    }

                }
            };

            getTemplates(window.FFF.getFFFHost() + window.FFF.templatesPath, function (templates) {
                window.FFF.views.popup = templates.popup;
                window.FFF.views.overlay = templates.overlay;
                initCallBack();
            });
        }

        cacheTemplates(function () {
            window.FFF.init($, false);

            if (window.FFF.isIpad()) {
                window.addEventListener('orientationchange', function () {
                    window.FFF.init($, true);
                });
            }

            // Show the Add Product button only on dev envs and MOL internal preview
            if (navigator.userAgent.indexOf('MSIE') == -1 && window.FFF.isPreviewMode) {
                if (!window.FFF.public) {
                    window.FFF.addProductButton(window.jQuery);
                }
            }
        });

        function showInlineProductImage() {
            $('.product-loader').addClass('hidden');
            $('.fff-orig-product-image').removeClass('hidden');

            //TODO remove after the back end with the new template gets released
            $('.fff-inline-image-container').removeClass('hidden');
        }

        $(function () {
            //TODO double check whether we need this after DOM Ready
            showInlineProductImage();
            window.FFF.hideAllInlinesAfterTheFirstOnMobile();
        });
    })(window, $)
})(window, jQuery, Mustache);

},{"./inline":2}]},{},[3]);

/*!
 * typeahead.js 0.9.3
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

(function($) {
    var VERSION = "0.9.3";
    var utils = {
        isMsie: function() {
            var match = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
            return match ? parseInt(match[2], 10) : false;
        },
        isBlankString: function(str) {
            return !str || /^\s*$/.test(str);
        },
        escapeRegExChars: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        isString: function(obj) {
            return typeof obj === "string";
        },
        isNumber: function(obj) {
            return typeof obj === "number";
        },
        isArray: $.isArray,
        isFunction: $.isFunction,
        isObject: $.isPlainObject,
        isUndefined: function(obj) {
            return typeof obj === "undefined";
        },
        bind: $.proxy,
        bindAll: function(obj) {
            var val;
            for (var key in obj) {
                $.isFunction(val = obj[key]) && (obj[key] = $.proxy(val, obj));
            }
        },
        indexOf: function(haystack, needle) {
            for (var i = 0; i < haystack.length; i++) {
                if (haystack[i] === needle) {
                    return i;
                }
            }
            return -1;
        },
        each: $.each,
        map: $.map,
        filter: $.grep,
        every: function(obj, test) {
            var result = true;
            if (!obj) {
                return result;
            }
            $.each(obj, function(key, val) {
                if (!(result = test.call(null, val, key, obj))) {
                    return false;
                }
            });
            return !!result;
        },
        some: function(obj, test) {
            var result = false;
            if (!obj) {
                return result;
            }
            $.each(obj, function(key, val) {
                if (result = test.call(null, val, key, obj)) {
                    return false;
                }
            });
            return !!result;
        },
        mixin: $.extend,
        getUniqueId: function() {
            var counter = 0;
            return function() {
                return counter++;
            };
        }(),
        defer: function(fn) {
            setTimeout(fn, 0);
        },
        debounce: function(func, wait, immediate) {
            var timeout, result;
            return function() {
                var context = this, args = arguments, later, callNow;
                later = function() {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                    }
                };
                callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) {
                    result = func.apply(context, args);
                }
                return result;
            };
        },
        throttle: function(func, wait) {
            var context, args, timeout, result, previous, later;
            previous = 0;
            later = function() {
                previous = new Date();
                timeout = null;
                result = func.apply(context, args);
            };
            return function() {
                var now = new Date(), remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },
        tokenizeQuery: function(str) {
            return $.trim(str).toLowerCase().split(/[\s]+/);
        },
        tokenizeText: function(str) {
            return $.trim(str).toLowerCase().split(/[\s\-_]+/);
        },
        getProtocol: function() {
            return location.protocol;
        },
        noop: function() {}
    };
    var EventTarget = function() {
        var eventSplitter = /\s+/;
        return {
            on: function(events, callback) {
                var event;
                if (!callback) {
                    return this;
                }
                this._callbacks = this._callbacks || {};
                events = events.split(eventSplitter);
                while (event = events.shift()) {
                    this._callbacks[event] = this._callbacks[event] || [];
                    this._callbacks[event].push(callback);
                }
                return this;
            },
            trigger: function(events, data) {
                var event, callbacks;
                if (!this._callbacks) {
                    return this;
                }
                events = events.split(eventSplitter);
                while (event = events.shift()) {
                    if (callbacks = this._callbacks[event]) {
                        for (var i = 0; i < callbacks.length; i += 1) {
                            callbacks[i].call(this, {
                                type: event,
                                data: data
                            });
                        }
                    }
                }
                return this;
            }
        };
    }();
    var EventBus = function() {
        var namespace = "typeahead:";
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        utils.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
            }
        });
        return EventBus;
    }();
    var PersistentStorage = function() {
        var ls, methods;
        try {
            ls = window.localStorage;
            ls.setItem("~~~", "!");
            ls.removeItem("~~~");
        } catch (err) {
            ls = null;
        }
        function PersistentStorage(namespace) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + this.prefix);
        }
        if (ls && window.JSON) {
            methods = {
                _prefix: function(key) {
                    return this.prefix + key;
                },
                _ttlKey: function(key) {
                    return this._prefix(key) + this.ttlKey;
                },
                get: function(key) {
                    if (this.isExpired(key)) {
                        this.remove(key);
                    }
                    return decode(ls.getItem(this._prefix(key)));
                },
                set: function(key, val, ttl) {
                    if (utils.isNumber(ttl)) {
                        ls.setItem(this._ttlKey(key), encode(now() + ttl));
                    } else {
                        ls.removeItem(this._ttlKey(key));
                    }
                    return ls.setItem(this._prefix(key), encode(val));
                },
                remove: function(key) {
                    ls.removeItem(this._ttlKey(key));
                    ls.removeItem(this._prefix(key));
                    return this;
                },
                clear: function() {
                    var i, key, keys = [], len = ls.length;
                    for (i = 0; i < len; i++) {
                        if ((key = ls.key(i)).match(this.keyMatcher)) {
                            keys.push(key.replace(this.keyMatcher, ""));
                        }
                    }
                    for (i = keys.length; i--; ) {
                        this.remove(keys[i]);
                    }
                    return this;
                },
                isExpired: function(key) {
                    var ttl = decode(ls.getItem(this._ttlKey(key)));
                    return utils.isNumber(ttl) && now() > ttl ? true : false;
                }
            };
        } else {
            methods = {
                get: utils.noop,
                set: utils.noop,
                remove: utils.noop,
                clear: utils.noop,
                isExpired: utils.noop
            };
        }
        utils.mixin(PersistentStorage.prototype, methods);
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(utils.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return JSON.parse(val);
        }
    }();
    var RequestCache = function() {
        function RequestCache(o) {
            utils.bindAll(this);
            o = o || {};
            this.sizeLimit = o.sizeLimit || 10;
            this.cache = {};
            this.cachedKeysByAge = [];
        }
        utils.mixin(RequestCache.prototype, {
            get: function(url) {
                return this.cache[url];
            },
            set: function(url, resp) {
                var requestToEvict;
                if (this.cachedKeysByAge.length === this.sizeLimit) {
                    requestToEvict = this.cachedKeysByAge.shift();
                    delete this.cache[requestToEvict];
                }
                this.cache[url] = resp;
                this.cachedKeysByAge.push(url);
            }
        });
        return RequestCache;
    }();
    var Transport = function() {
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests, requestCache;
        function Transport(o) {
            utils.bindAll(this);
            o = utils.isString(o) ? {
                url: o
            } : o;
            requestCache = requestCache || new RequestCache();
            maxPendingRequests = utils.isNumber(o.maxParallelRequests) ? o.maxParallelRequests : maxPendingRequests || 6;
            this.url = o.url;
            this.wildcard = o.wildcard || "%QUERY";
            this.filter = o.filter;
            this.replace = o.replace;
            this.ajaxSettings = {
                type: "get",
                cache: o.cache,
                timeout: o.timeout,
                dataType: o.dataType || "json",
                beforeSend: o.beforeSend
            };
            this._get = (/^throttle$/i.test(o.rateLimitFn) ? utils.throttle : utils.debounce)(this._get, o.rateLimitWait || 300);
        }
        utils.mixin(Transport.prototype, {
            _get: function(url, cb) {
                var that = this;
                if (belowPendingRequestsThreshold()) {
                    this._sendRequest(url).done(done);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    var data = that.filter ? that.filter(resp) : resp;
                    cb && cb(data);
                    requestCache.set(url, resp);
                }
            },
            _sendRequest: function(url) {
                var that = this, jqXhr = pendingRequests[url];
                if (!jqXhr) {
                    incrementPendingRequests();
                    jqXhr = pendingRequests[url] = $.ajax(url, this.ajaxSettings).always(always);
                }
                return jqXhr;
                function always() {
                    decrementPendingRequests();
                    pendingRequests[url] = null;
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(query, cb) {
                var that = this, encodedQuery = encodeURIComponent(query || ""), url, resp;
                cb = cb || utils.noop;
                url = this.replace ? this.replace(this.url, encodedQuery) : this.url.replace(this.wildcard, encodedQuery);
                if (resp = requestCache.get(url)) {
                    utils.defer(function() {
                        cb(that.filter ? that.filter(resp) : resp);
                    });
                } else {
                    this._get(url, cb);
                }
                return !!resp;
            }
        });
        return Transport;
        function incrementPendingRequests() {
            pendingRequestsCount++;
        }
        function decrementPendingRequests() {
            pendingRequestsCount--;
        }
        function belowPendingRequestsThreshold() {
            return pendingRequestsCount < maxPendingRequests;
        }
    }();
    var Dataset = function() {
        var keys = {
            thumbprint: "thumbprint",
            protocol: "protocol",
            itemHash: "itemHash",
            adjacencyList: "adjacencyList"
        };
        function Dataset(o) {
            utils.bindAll(this);
            if (utils.isString(o.template) && !o.engine) {
                $.error("no template engine specified");
            }
            if (!o.local && !o.prefetch && !o.remote) {
                $.error("one of local, prefetch, or remote is required");
            }
            this.name = o.name || utils.getUniqueId();
            this.limit = o.limit || 5;
            this.minLength = o.minLength || 1;
            this.header = o.header;
            this.footer = o.footer;
            this.valueKey = o.valueKey || "value";
            this.template = compileTemplate(o.template, o.engine, this.valueKey);
            this.local = o.local;
            this.prefetch = o.prefetch;
            this.remote = o.remote;
            this.itemHash = {};
            this.adjacencyList = {};
            this.storage = o.name ? new PersistentStorage(o.name) : null;
        }
        utils.mixin(Dataset.prototype, {
            _processLocalData: function(data) {
                this._mergeProcessedData(this._processData(data));
            },
            _loadPrefetchData: function(o) {
                var that = this, thumbprint = VERSION + (o.thumbprint || ""), storedThumbprint, storedProtocol, storedItemHash, storedAdjacencyList, isExpired, deferred;
                if (this.storage) {
                    storedThumbprint = this.storage.get(keys.thumbprint);
                    storedProtocol = this.storage.get(keys.protocol);
                    storedItemHash = this.storage.get(keys.itemHash);
                    storedAdjacencyList = this.storage.get(keys.adjacencyList);
                }
                isExpired = storedThumbprint !== thumbprint || storedProtocol !== utils.getProtocol();
                o = utils.isString(o) ? {
                    url: o
                } : o;
                o.ttl = utils.isNumber(o.ttl) ? o.ttl : 24 * 60 * 60 * 1e3;
                if (storedItemHash && storedAdjacencyList && !isExpired) {
                    this._mergeProcessedData({
                        itemHash: storedItemHash,
                        adjacencyList: storedAdjacencyList
                    });
                    deferred = $.Deferred().resolve();
                } else {
                    deferred = $.getJSON(o.url).done(processPrefetchData);
                }
                return deferred;
                function processPrefetchData(data) {
                    var filteredData = o.filter ? o.filter(data) : data, processedData = that._processData(filteredData), itemHash = processedData.itemHash, adjacencyList = processedData.adjacencyList;
                    if (that.storage) {
                        that.storage.set(keys.itemHash, itemHash, o.ttl);
                        that.storage.set(keys.adjacencyList, adjacencyList, o.ttl);
                        that.storage.set(keys.thumbprint, thumbprint, o.ttl);
                        that.storage.set(keys.protocol, utils.getProtocol(), o.ttl);
                    }
                    that._mergeProcessedData(processedData);
                }
            },
            _transformDatum: function(datum) {
                var value = utils.isString(datum) ? datum : datum[this.valueKey], tokens = datum.tokens || utils.tokenizeText(value), item = {
                    value: value,
                    tokens: tokens
                };
                if (utils.isString(datum)) {
                    item.datum = {};
                    item.datum[this.valueKey] = datum;
                } else {
                    item.datum = datum;
                }
                item.tokens = utils.filter(item.tokens, function(token) {
                    return !utils.isBlankString(token);
                });
                item.tokens = utils.map(item.tokens, function(token) {
                    return token.toLowerCase();
                });
                return item;
            },
            _processData: function(data) {
                var that = this, itemHash = {}, adjacencyList = {};
                utils.each(data, function(i, datum) {
                    var item = that._transformDatum(datum), id = utils.getUniqueId(item.value);
                    itemHash[id] = item;
                    utils.each(item.tokens, function(i, token) {
                        var character = token.charAt(0), adjacency = adjacencyList[character] || (adjacencyList[character] = [ id ]);
                        !~utils.indexOf(adjacency, id) && adjacency.push(id);
                    });
                });
                return {
                    itemHash: itemHash,
                    adjacencyList: adjacencyList
                };
            },
            _mergeProcessedData: function(processedData) {
                var that = this;
                utils.mixin(this.itemHash, processedData.itemHash);
                utils.each(processedData.adjacencyList, function(character, adjacency) {
                    var masterAdjacency = that.adjacencyList[character];
                    that.adjacencyList[character] = masterAdjacency ? masterAdjacency.concat(adjacency) : adjacency;
                });
            },
            _getLocalSuggestions: function(terms) {
                var that = this, firstChars = [], lists = [], shortestList, suggestions = [];
                utils.each(terms, function(i, term) {
                    var firstChar = term.charAt(0);
                    !~utils.indexOf(firstChars, firstChar) && firstChars.push(firstChar);
                });
                utils.each(firstChars, function(i, firstChar) {
                    var list = that.adjacencyList[firstChar];
                    if (!list) {
                        return false;
                    }
                    lists.push(list);
                    if (!shortestList || list.length < shortestList.length) {
                        shortestList = list;
                    }
                });
                if (lists.length < firstChars.length) {
                    return [];
                }
                utils.each(shortestList, function(i, id) {
                    var item = that.itemHash[id], isCandidate, isMatch;
                    isCandidate = utils.every(lists, function(list) {
                        return ~utils.indexOf(list, id);
                    });
                    isMatch = isCandidate && utils.every(terms, function(term) {
                        return utils.some(item.tokens, function(token) {
                            return token.indexOf(term) === 0;
                        });
                    });
                    isMatch && suggestions.push(item);
                });
                return suggestions;
            },
            initialize: function() {
                var deferred;
                this.local && this._processLocalData(this.local);
                this.transport = this.remote ? new Transport(this.remote) : null;
                deferred = this.prefetch ? this._loadPrefetchData(this.prefetch) : $.Deferred().resolve();
                this.local = this.prefetch = this.remote = null;
                this.initialize = function() {
                    return deferred;
                };
                return deferred;
            },
            getSuggestions: function(query, cb) {
                var that = this, terms, suggestions, cacheHit = false;
                if (query.length < this.minLength) {
                    return;
                }
                terms = utils.tokenizeQuery(query);
                suggestions = this._getLocalSuggestions(terms).slice(0, this.limit);
                if (suggestions.length < this.limit && this.transport) {
                    cacheHit = this.transport.get(query, processRemoteData);
                }
                !cacheHit && cb && cb(suggestions);
                function processRemoteData(data) {
                    suggestions = suggestions.slice(0);
                    utils.each(data, function(i, datum) {
                        var item = that._transformDatum(datum), isDuplicate;
                        isDuplicate = utils.some(suggestions, function(suggestion) {
                            return item.value === suggestion.value;
                        });
                        !isDuplicate && suggestions.push(item);
                        return suggestions.length < that.limit;
                    });
                    cb && cb(suggestions);
                }
            }
        });
        return Dataset;
        function compileTemplate(template, engine, valueKey) {
            var renderFn, compiledTemplate;
            if (utils.isFunction(template)) {
                renderFn = template;
            } else if (utils.isString(template)) {
                compiledTemplate = engine.compile(template);
                renderFn = utils.bind(compiledTemplate.render, compiledTemplate);
            } else {
                renderFn = function(context) {
                    return "<p>" + context[valueKey] + "</p>";
                };
            }
            return renderFn;
        }
    }();
    var InputView = function() {
        function InputView(o) {
            var that = this;
            utils.bindAll(this);
            this.specialKeyCodeMap = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            };
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", this._handleBlur).on("focus.tt", this._handleFocus).on("keydown.tt", this._handleSpecialKeyEvent);
            if (!utils.isMsie()) {
                this.$input.on("input.tt", this._compareQueryToInputValue);
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (that.specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                    }
                    utils.defer(that._compareQueryToInputValue);
                });
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
        }
        utils.mixin(InputView.prototype, EventTarget, {
            _handleFocus: function() {
                this.trigger("focused");
            },
            _handleBlur: function() {
                this.trigger("blured");
            },
            _handleSpecialKeyEvent: function($e) {
                var keyName = this.specialKeyCodeMap[$e.which || $e.keyCode];
                keyName && this.trigger(keyName + "Keyed", $e);
            },
            _compareQueryToInputValue: function() {
                var inputValue = this.getInputValue(), isSameQuery = compareQueries(this.query, inputValue), isSameQueryExceptWhitespace = isSameQuery ? this.query.length !== inputValue.length : false;
                if (isSameQueryExceptWhitespace) {
                    this.trigger("whitespaceChanged", {
                        value: this.query
                    });
                } else if (!isSameQuery) {
                    this.trigger("queryChanged", {
                        value: this.query = inputValue
                    });
                }
            },
            destroy: function() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null;
            },
            focus: function() {
                this.$input.focus();
            },
            blur: function() {
                this.$input.blur();
            },
            getQuery: function() {
                return this.query;
            },
            setQuery: function(query) {
                this.query = query;
            },
            getInputValue: function() {
                return this.$input.val();
            },
            setInputValue: function(value, silent) {
                this.$input.val(value);
                !silent && this._compareQueryToInputValue();
            },
            getHintValue: function() {
                return this.$hint.val();
            },
            setHintValue: function(value) {
                this.$hint.val(value);
            },
            getLanguageDirection: function() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
            },
            isOverflow: function() {
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() > this.$input.width();
            },
            isCursorAtEnd: function() {
                var valueLength = this.$input.val().length, selectionStart = this.$input[0].selectionStart, range;
                if (utils.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            }
        });
        return InputView;
        function buildOverflowHelper($input) {
            return $("<span></span>").css({
                position: "absolute",
                left: "-9999px",
                visibility: "hidden",
                whiteSpace: "nowrap",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function compareQueries(a, b) {
            a = (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
            b = (b || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
            return a === b;
        }
    }();
    var DropdownView = function() {
        var html = {
            suggestionsList: '<span class="tt-suggestions"></span>'
        }, css = {
            suggestionsList: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            }
        };
        function DropdownView(o) {
            utils.bindAll(this);
            this.isOpen = false;
            this.isEmpty = true;
            this.isMouseOverDropdown = false;
            this.$menu = $(o.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("click.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover);
        }
        utils.mixin(DropdownView.prototype, EventTarget, {
            _handleMouseenter: function() {
                this.isMouseOverDropdown = true;
            },
            _handleMouseleave: function() {
                this.isMouseOverDropdown = false;
            },
            _handleMouseover: function($e) {
                var $suggestion = $($e.currentTarget);
                this._getSuggestions().removeClass("tt-is-under-cursor");
                $suggestion.addClass("tt-is-under-cursor");
            },
            _handleSelection: function($e) {
                var $suggestion = $($e.currentTarget);
                this.trigger("suggestionSelected", extractSuggestion($suggestion));
            },
            _show: function() {
                this.$menu.css("display", "block");
            },
            _hide: function() {
                this.$menu.hide();
            },
            _moveCursor: function(increment) {
                var $suggestions, $cur, nextIndex, $underCursor;
                if (!this.isVisible()) {
                    return;
                }
                $suggestions = this._getSuggestions();
                $cur = $suggestions.filter(".tt-is-under-cursor");
                $cur.removeClass("tt-is-under-cursor");
                nextIndex = $suggestions.index($cur) + increment;
                nextIndex = (nextIndex + 1) % ($suggestions.length + 1) - 1;
                if (nextIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
                } else if (nextIndex < -1) {
                    nextIndex = $suggestions.length - 1;
                }
                $underCursor = $suggestions.eq(nextIndex).addClass("tt-is-under-cursor");
                this._ensureVisibility($underCursor);
                this.trigger("cursorMoved", extractSuggestion($underCursor));
            },
            _getSuggestions: function() {
                return this.$menu.find(".tt-suggestions > .tt-suggestion");
            },
            _ensureVisibility: function($el) {
                var menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), menuScrollTop = this.$menu.scrollTop(), elTop = $el.position().top, elBottom = elTop + $el.outerHeight(true);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
                }
            },
            destroy: function() {
                this.$menu.off(".tt");
                this.$menu = null;
            },
            isVisible: function() {
                return this.isOpen && !this.isEmpty;
            },
            closeUnlessMouseIsOverDropdown: function() {
                if (!this.isMouseOverDropdown) {
                    this.close();
                }
            },
            close: function() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this.isMouseOverDropdown = false;
                    this._hide();
                    this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor");
                    this.trigger("closed");
                }
            },
            open: function() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
                }
            },
            setLanguageDirection: function(dir) {
                var ltrCss = {
                    left: "0",
                    right: "auto"
                }, rtlCss = {
                    left: "auto",
                    right: " 0"
                };
                dir === "ltr" ? this.$menu.css(ltrCss) : this.$menu.css(rtlCss);
            },
            moveCursorUp: function() {
                this._moveCursor(-1);
            },
            moveCursorDown: function() {
                this._moveCursor(+1);
            },
            getSuggestionUnderCursor: function() {
                var $suggestion = this._getSuggestions().filter(".tt-is-under-cursor").first();
                return $suggestion.length > 0 ? extractSuggestion($suggestion) : null;
            },
            getFirstSuggestion: function() {
                var $suggestion = this._getSuggestions().first();
                return $suggestion.length > 0 ? extractSuggestion($suggestion) : null;
            },
            renderSuggestions: function(dataset, suggestions) {
                var datasetClassName = "tt-dataset-" + dataset.name, wrapper = '<div class="tt-suggestion">%body</div>', compiledHtml, $suggestionsList, $dataset = this.$menu.find("." + datasetClassName), elBuilder, fragment, $el;
                if ($dataset.length === 0) {
                    $suggestionsList = $(html.suggestionsList).css(css.suggestionsList);
                    $dataset = $("<div></div>").addClass(datasetClassName).append(dataset.header).append($suggestionsList).append(dataset.footer).appendTo(this.$menu);
                }
                if (suggestions.length > 0) {
                    this.isEmpty = false;
                    this.isOpen && this._show();
                    elBuilder = document.createElement("div");
                    fragment = document.createDocumentFragment();
                    utils.each(suggestions, function(i, suggestion) {
                        suggestion.dataset = dataset.name;
                        compiledHtml = dataset.template(suggestion.datum);
                        elBuilder.innerHTML = wrapper.replace("%body", compiledHtml);
                        $el = $(elBuilder.firstChild).css(css.suggestion).data("suggestion", suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                        });
                        fragment.appendChild($el[0]);
                    });
                    $dataset.show().find(".tt-suggestions").html(fragment);
                } else {
                    this.clearSuggestions(dataset.name);
                }
                this.trigger("suggestionsRendered");
            },
            clearSuggestions: function(datasetName) {
                var $datasets = datasetName ? this.$menu.find(".tt-dataset-" + datasetName) : this.$menu.find('[class^="tt-dataset-"]'), $suggestions = $datasets.find(".tt-suggestions");
                $datasets.hide();
                $suggestions.empty();
                if (this._getSuggestions().length === 0) {
                    this.isEmpty = true;
                    this._hide();
                }
            }
        });
        return DropdownView;
        function extractSuggestion($el) {
            return $el.data("suggestion");
        }
    }();
    var TypeaheadView = function() {
        var html = {
            wrapper: '<span class="twitter-typeahead"></span>',
            hint: '<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',
            dropdown: '<span class="tt-dropdown-menu"></span>'
        }, css = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none"
            },
            query: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            }
        };
        if (utils.isMsie()) {
            utils.mixin(css.query, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            });
        }
        if (utils.isMsie() && utils.isMsie() <= 7) {
            utils.mixin(css.wrapper, {
                display: "inline",
                zoom: "1"
            });
            utils.mixin(css.query, {
                marginTop: "-1px"
            });
        }
        function TypeaheadView(o) {
            var $menu, $input, $hint;
            utils.bindAll(this);
            this.$node = buildDomStructure(o.input);
            this.datasets = o.datasets;
            this.dir = null;
            this.eventBus = o.eventBus;
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-query");
            $hint = this.$node.find(".tt-hint");
            this.dropdownView = new DropdownView({
                menu: $menu
            }).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed", this._propagateEvent);
            this.inputView = new InputView({
                input: $input,
                hint: $hint
            }).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed tabKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", this._autocomplete);
        }
        utils.mixin(TypeaheadView.prototype, EventTarget, {
            _managePreventDefault: function(e) {
                var $e = e.data, hint, inputValue, preventDefault = false;
                switch (e.type) {
                  case "tabKeyed":
                    hint = this.inputView.getHintValue();
                    inputValue = this.inputView.getInputValue();
                    preventDefault = hint && hint !== inputValue;
                    break;

                  case "upKeyed":
                  case "downKeyed":
                    preventDefault = !$e.shiftKey && !$e.ctrlKey && !$e.metaKey;
                    break;
                }
                preventDefault && $e.preventDefault();
            },
            _setLanguageDirection: function() {
                var dir = this.inputView.getLanguageDirection();
                if (dir !== this.dir) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdownView.setLanguageDirection(dir);
                }
            },
            _updateHint: function() {
                var suggestion = this.dropdownView.getFirstSuggestion(), hint = suggestion ? suggestion.value : null, dropdownIsVisible = this.dropdownView.isVisible(), inputHasOverflow = this.inputView.isOverflow(), inputValue, query, escapedQuery, beginsWithQuery, match;
                if (hint && dropdownIsVisible && !inputHasOverflow) {
                    inputValue = this.inputView.getInputValue();
                    query = inputValue.replace(/\s{2,}/g, " ").replace(/^\s+/g, "");
                    escapedQuery = utils.escapeRegExChars(query);
                    beginsWithQuery = new RegExp("^(?:" + escapedQuery + ")(.*$)", "i");
                    match = beginsWithQuery.exec(hint);
                    this.inputView.setHintValue(inputValue + (match ? match[1] : ""));
                }
            },
            _clearHint: function() {
                this.inputView.setHintValue("");
            },
            _clearSuggestions: function() {
                this.dropdownView.clearSuggestions();
            },
            _setInputValueToQuery: function() {
                this.inputView.setInputValue(this.inputView.getQuery());
            },
            _setInputValueToSuggestionUnderCursor: function(e) {
                var suggestion = e.data;
                this.inputView.setInputValue(suggestion.value, true);
            },
            _openDropdown: function() {
                this.dropdownView.open();
            },
            _closeDropdown: function(e) {
                this.dropdownView[e.type === "blured" ? "closeUnlessMouseIsOverDropdown" : "close"]();
            },
            _moveDropdownCursor: function(e) {
                var $e = e.data;
                if (!$e.shiftKey && !$e.ctrlKey && !$e.metaKey) {
                    this.dropdownView[e.type === "upKeyed" ? "moveCursorUp" : "moveCursorDown"]();
                }
            },
            _handleSelection: function(e) {
                var byClick = e.type === "suggestionSelected", suggestion = byClick ? e.data : this.dropdownView.getSuggestionUnderCursor();
                if (suggestion) {
                    this.inputView.setInputValue(suggestion.value);
                    byClick ? this.inputView.focus() : e.data.preventDefault();
                    byClick && utils.isMsie() ? utils.defer(this.dropdownView.close) : this.dropdownView.close();
                    this.eventBus.trigger("selected", suggestion.datum, suggestion.dataset);
                }
            },
            _getSuggestions: function() {
                var that = this, query = this.inputView.getQuery();
                if (utils.isBlankString(query)) {
                    return;
                }
                utils.each(this.datasets, function(i, dataset) {
                    dataset.getSuggestions(query, function(suggestions) {
                        if (query === that.inputView.getQuery()) {
                            that.dropdownView.renderSuggestions(dataset, suggestions);
                        }
                    });
                });
            },
            _autocomplete: function(e) {
                var isCursorAtEnd, ignoreEvent, query, hint, suggestion;
                if (e.type === "rightKeyed" || e.type === "leftKeyed") {
                    isCursorAtEnd = this.inputView.isCursorAtEnd();
                    ignoreEvent = this.inputView.getLanguageDirection() === "ltr" ? e.type === "leftKeyed" : e.type === "rightKeyed";
                    if (!isCursorAtEnd || ignoreEvent) {
                        return;
                    }
                }
                query = this.inputView.getQuery();
                hint = this.inputView.getHintValue();
                if (hint !== "" && query !== hint) {
                    suggestion = this.dropdownView.getFirstSuggestion();
                    this.inputView.setInputValue(suggestion.value);
                    this.eventBus.trigger("autocompleted", suggestion.datum, suggestion.dataset);
                }
            },
            _propagateEvent: function(e) {
                this.eventBus.trigger(e.type);
            },
            destroy: function() {
                this.inputView.destroy();
                this.dropdownView.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
            },
            setQuery: function(query) {
                this.inputView.setQuery(query);
                this.inputView.setInputValue(query);
                this._clearHint();
                this._clearSuggestions();
                this._getSuggestions();
            }
        });
        return TypeaheadView;
        function buildDomStructure(input) {
            var $wrapper = $(html.wrapper), $dropdown = $(html.dropdown), $input = $(input), $hint = $(html.hint);
            $wrapper = $wrapper.css(css.wrapper);
            $dropdown = $dropdown.css(css.dropdown);
            $hint.css(css.hint).css({
                backgroundAttachment: $input.css("background-attachment"),
                backgroundClip: $input.css("background-clip"),
                backgroundColor: $input.css("background-color"),
                backgroundImage: $input.css("background-image"),
                backgroundOrigin: $input.css("background-origin"),
                backgroundPosition: $input.css("background-position"),
                backgroundRepeat: $input.css("background-repeat"),
                backgroundSize: $input.css("background-size")
            });
            $input.data("ttAttrs", {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass("tt-query").attr({
                autocomplete: "off",
                spellcheck: false
            }).css(css.query);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input.wrap($wrapper).parent().prepend($hint).append($dropdown);
        }
        function destroyDomStructure($node) {
            var $input = $node.find(".tt-query");
            utils.each($input.data("ttAttrs"), function(key, val) {
                utils.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter($node);
            $node.remove();
        }
    }();
    (function() {
        var cache = {}, viewKey = "ttView", methods;
        methods = {
            initialize: function(datasetDefs) {
                var datasets;
                datasetDefs = utils.isArray(datasetDefs) ? datasetDefs : [ datasetDefs ];
                if (datasetDefs.length === 0) {
                    $.error("no datasets provided");
                }
                datasets = utils.map(datasetDefs, function(o) {
                    var dataset = cache[o.name] ? cache[o.name] : new Dataset(o);
                    if (o.name) {
                        cache[o.name] = dataset;
                    }
                    return dataset;
                });
                return this.each(initialize);
                function initialize() {
                    var $input = $(this), deferreds, eventBus = new EventBus({
                        el: $input
                    });
                    deferreds = utils.map(datasets, function(dataset) {
                        return dataset.initialize();
                    });
                    $input.data(viewKey, new TypeaheadView({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                        }),
                        datasets: datasets
                    }));
                    $.when.apply($, deferreds).always(function() {
                        utils.defer(function() {
                            eventBus.trigger("initialized");
                        });
                    });
                }
            },
            destroy: function() {
                return this.each(destroy);
                function destroy() {
                    var $this = $(this), view = $this.data(viewKey);
                    if (view) {
                        view.destroy();
                        $this.removeData(viewKey);
                    }
                }
            },
            setQuery: function(query) {
                return this.each(setQuery);
                function setQuery() {
                    var view = $(this).data(viewKey);
                    view && view.setQuery(query);
                }
            }
        };
        jQuery.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
    })();
})(window.jQuery);
var APP_PATH;
var FFF_HUB_GEO;

$(function () {
    APP_PATH = $(".fff-hub-data").data("path");
    FFF_HUB_GEO = typeof PageCriteria !== 'undefined' && PageCriteria && PageCriteria.geo && PageCriteria.geo.toLowerCase() === 'us' ? 'us' : 'gb';
});

function throttle(fn, delay) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}
/*!
 * infinite gallery for hub
 * Original author:
 * Further changes, comments:
 * Licensed private
 */

/*
TODO:
	implement destroy, remove events and error
*/

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
    'use strict';

    var isTouch = 'ontouchstart' in window ||// works on most browsers
        'onmsgesturechange' in window; // works on ie10

    var animX = (function() {
        var s = document.createElement('p').style;
        var transition =  (s.transition === '' ? 'transform' : false)              ||
                    (s.WebkitTransform === '' in s ? 'WebkitTransform' : false)    ||
                    (s.MozTransform === '' in s ? 'MozTransform' : false)          ||
                    (s.msTransform === '' in s ? 'msTransform' : false)            ||
                    (s.OTransform === '' in s ? 'OTransform' : false)              ||
                    false;

        if(!transition) {
            return function ($target, x) {
                $target.css({left:x});
            };
        }else {
            return function ($target, x) {
                var animObj = {};
                animObj[transition] = 'translateX('+x+'px)';
                $target.css(animObj);
            };
        }
    })();

    // Create the defaults once
    var pluginName = 'hubInfiniteGallery',
        defaults = {
            leftArrow: '.fff-hub-left-arrow',
            rightArrow: '.fff-hub-right-arrow',
            path: $.noop,
            spacing: 8,
            dragSize: 50,
            touchClass: 'fff-is-touch-gall',
            loadingClass: 'fff-is-loading-gall',
            stepClass: 'fff-gall-step-',
            galleryWrap: '.fff-hottest-list',
            clickPrecision: 3,
            animateClass: 'fff-is-animating'
        },
        //add all the public methods here
        publicMethods = ['destroy'];

    // The actual plugin constructor
    function HubInfiniteGallery( element, options ) {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    HubInfiniteGallery.prototype = {
        init: function() {
            this.$element.toggleClass(this.options.touchClass, isTouch);
            this.$leftArrow = this.$element.find(this.options.leftArrow);
            this.$rightArrow = this.$element.find(this.options.rightArrow);
            this.$galleryWrap = this.$element.find('.fff-hottest-list');
            this.$slide = this.$galleryWrap.find('ul');
            //flags
            this.isWaiting = false;
            this.isMultiTouch = false;
            this.isTouchStart = false;

            //touch helper
            this.touchOrigin = {x:0, y:0};

            //gallery step/page showing
            this.step = 0;
            this.lastStepLoaded = 0;

            this.w = this.$galleryWrap.width() + this.options.spacing;
            this.precision = this.options.clickPrecision / this.w;

            //anim helper object
            this.animObj = {pos:0};
            this.$animObj = $(this.animObj);


            this.setStepClass(true);
            this.addEvents();
        },
        addEvents: function () {
            var eventString = isTouch ? 'touchstart MSPointerDown pointerdown' : 'click',
                $document = $(document);
            this.$leftArrow.on(eventString, $.proxy(function onLeft() {
                this.update(-1);
            }, this));

            this.$rightArrow.on(eventString, $.proxy(function onRight() {
                this.update(+1);
            }, this));

            $document.on('keydown', $.proxy(function(e) {
                if(e.keyCode !== 37 && e.keyCode !== 39) {
                    return e;
                }
                if(this.onScreen()) {
                    this.update(e.keyCode === 37 ? -1 : 1);
                }
            }, this));

            if(isTouch) {
                this.$galleryWrap.on('touchstart', $.proxy(function onTouchStart(e) {
                    if(this.isWaiting || this.isAnim || this.isTouchStart) {
                        return false;
                    }
                    this.isTouchStart = true;
                    this.$element.addClass(this.options.animateClass);
                    this.touchOrigin.x = e.originalEvent.touches[0].pageX;
                    this.touchOrigin.y = e.originalEvent.touches[0].pageY;
                }, this));

                $document.on('touchstart', $.proxy(function onTouchStart(e) {
                    if(e.originalEvent.touches.length > 1) {
                        this.isMultiTouch = true;
                    }
                }, this));

                $document.on('touchend', $.proxy(function onTouchStart(e) {
                    if(e.originalEvent.touches.length === 0) {
                        this.isMultiTouch = false;
                    }
                }, this));

                this.$galleryWrap.on('touchmove', $.proxy(function onTouchMove(e) {
                    if(!this.isMultiTouch) {
                        this.touchmove(e.originalEvent.touches[0].pageX);
                        e.preventDefault();
                    }
                }, this));

                this.$slide.on('touchend', $.proxy(function onTouchEnd() {
                    if(this.isTouchStart) {
                        this.isTouchStart = false;
                        this.$element.removeClass(this.options.animateClass);
                        this.anim();
                    }
                }, this));

                this.$galleryWrap.on('click', 'li', $.proxy(function onClickItem(e) {
                    if(this.isWaiting || this.isAnim || this.isTouchStart) {
                        return false;
                    }
                }, this));
            }
        },
        onScreen: function () {
            if(this.$element.is(":hidden")) {
                return false;
            }
            var $window = $(window);
            return this.$element.offset().top < $window.height() + $window.scrollTop() &&
             $window.scrollTop() < this.$element.offset().top + this.$element.height();
        },
        touchmove: function (touchX) {
            if(this.isTouchStart) {
                var newPos = touchX - this.touchOrigin.x;
                if(Math.abs(newPos) > this.options.dragSize) {
                    this.isTouchStart = false;
                    this.update(newPos > this.options.dragSize ? -1 : 1);
                }else {
                    animX(this.$slide, this.getCurrPos() + newPos);
                    this.animObj.pos = this.step - (newPos/this.w);
                }
            }
        },
        setStepClass: function (toggle) {
            this.$element.toggleClass(this.options.stepClass + this.step, toggle);
        },
        getCurrPos: function () {
            return -this.step * this.w;
        },
        update: function (newStep) {
            if(this.isWaiting || this.isAnim) {
                return false;
            }

            this.setStepClass(false);

            this.step = this.step + newStep;

            if(this.step < 0) {
                this.step = 0;
            }

            this.setStepClass(true);

            if(this.step > this.lastStepLoaded) {
                //if they want to move and wait
                //this.anim($.proxy(this.getMore, this));

                //if they want to wait and then move
                this.getMore();
            }else {
                this.anim();
            }
        },
        getMore: function() {
            this.isWaiting = true;
            this.$element.toggleClass(this.options.loadingClass, true);
            this.lastStepLoaded ++;
            var dest = this.options.path(this.step);
            $.ajax({
				url: dest,
				dataType: 'html',
				complete: $.proxy(function onAjaxGetMore(jqXHR, textStatus) {
                    var condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === 'success' || textStatus === 'notmodified');
                    if (condition) {
                        setTimeout($.proxy(function (){
                            this.$element.toggleClass(this.options.loadingClass, false);
                            this.addMore(jqXHR.responseText);
                        }, this), 250);
					} else {
						this.onError('end');
					}
				}, this)
			});
        },
        addMore: function (html) {
            this.isWaiting = false;
            this.$slide.css({width:this.w*(this.step+2)}).append(html);
            this.anim();
        },
        anim: function (callback) {
            //precision to consider a animation
            if(Math.abs(this.animObj.pos - this.step) < this.precision) {
                return false;
            }

            this.isAnim = true;

            var slide = this.$slide;
            var w = this.w;
            callback = callback || $.noop;

            this.$element.addClass(this.options.animateClass);
            this.$animObj.animate({pos: this.step}, {
                step: function(newX) {
                    animX(slide, -w * newX );
                },
                complete: $.proxy(function() {
                    this.isAnim = false;
                    this.$element.removeClass(this.options.animateClass);
                    callback();
                }, this)
            });
        },
        onError: function (type) {
            //hide
        },
        destroy: function(options) {
            //TODO
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        var method = arguments[0];
        if (publicMethods.indexOf(method) != -1) {
            //calling a method
            var args = Array.prototype.slice.call(arguments, 1);
            return this.each(function callMethod() {
                var instance = $.data(this, 'plugin_' + pluginName);
	            if (instance) {
	                instance[method].apply(instance, args);
	            }
            });
        } else if(typeof(method) == 'object' || !method) {
            //constructor
            return this.each(function pluginInit() {
	            if (!$.data(this, 'plugin_' + pluginName)) {
	                $.data(this, 'plugin_' + pluginName,
	                new HubInfiniteGallery( this, options ));
	            }
            });
        } else {
            //trying to acess a protected or method that doens't exist
            $.error( 'Method ' +  method + ' does not exist on jQuery.'+pluginName );
            return this;
        }
    };

})( jQuery, window, document );
var MoreLess = (function () {
    var BTN_CL = '.fff-more-results';
    var BTN_LESS_CL = 'fff-less-results';
    var CONTAINER_CL = '.results';
    var MORE_CL = 'fff-view-more';
    var SHOW_LENGTH = 3;
    var MAX_LENGTH = 15;

    function _moreLess($scope) {
        this.$scope = $scope;
        this.$container = this.$scope.find(CONTAINER_CL);
        this.$btn = this.$scope.find(BTN_CL);
        this.isMoreState = false;


        this.$btn.on('click', $.proxy(function() {
            this.isMoreState = !this.isMoreState;
            this.$container.toggleClass(MORE_CL, this.isMoreState);
            this.$btn.toggleClass(BTN_LESS_CL, this.isMoreState);
            this.$btn.find('span').text((this.isMoreState? 'View less': 'View more'));
        }, this));

        this.update();
    }

    _moreLess.prototype = {
        update: function() {
            var length = this.$scope.find('.results').children().length;
            var checkedLength = this.$scope.find('.results .fff-more.checked').length;
            var showButton = length > SHOW_LENGTH && checkedLength < MAX_LENGTH - SHOW_LENGTH && (length != checkedLength + SHOW_LENGTH);
            this.$btn.css('display', showButton ? 'block' : 'none');
        }
    };

    return _moreLess;

})();

var FiltersUI = (function () {
    return function ($scope, dataContainer, dataKey, updateResults) {
        $scope.on('change', 'input[type="checkbox"]', function (e) {
            var $target = $(e.target);
            $target.closest('li').toggleClass('checked', $target.is(':checked'));

            if($target.is(':checked')) {
                dataContainer.push($target.parent().data(dataKey));
                updateResults();
            }else {
                var id = dataContainer.indexOf($target.parent().data(dataKey));
                dataContainer.splice(id, 1);
                updateResults(true);
            }

        });
        //workaround for a bug in IE7/8 that clicking the image inside the label doesn't update the checkbox
        if($('.lt-ie9').length > 0)
        {
            $scope.on('click', 'img', function (e) {
                var $target = $(e.target).closest('label').find('input[type="checkbox"]');
                $target.click().trigger('change');
                e.stopPropagation();
            });
        }
    };
})();
var CelebsFilter = function (fashionFilters, fashionOptions, $scope, drawFiltersHtml) {
    var order = 'doc_count';
    var letter = '';
    var $celebsContainer = $scope.find('.fff-celebs-results');
    var $orderCeleb = $scope.find('.fff-filter-order a');
    var $celebs = $scope.find('.fff-celebs');
    var $aToZContainer = $scope.find('.fff-a-to-z-list');
    var filtersOptions = fashionOptions.filters;
    var SELECTED_CL = 'fff-btn-checked';
    var A_Z_CL = 'fff-a-to-z-selected';
    var LETTER_SELECTED = 'fff-letter-selected';

    $orderCeleb.on('click', function() {
        var $this = $(this);
        var $aToZLetters = $aToZContainer.find('td');

        if(!$this.hasClass(SELECTED_CL)) {

            $orderCeleb.removeClass(SELECTED_CL);
            $this.addClass(SELECTED_CL);
            $celebs.toggleClass(A_Z_CL, order == 'doc_count');
            $aToZContainer.toggle(order == 'doc_count');
            order = $this.data('order');
            console.log('ORDER', order);
            if(order == 'doc_count') {
                $aToZLetters.removeClass(LETTER_SELECTED);
                $aToZContainer.css('display', 'none');
                letter = '';
                $.get(fashionOptions.filters.getCelebsUrl(), function(html) {
                    drawFiltersHtml($celebsContainer, html, filtersOptions.celebs, 'celeb-name');
                    fashionFilters.refreshMoreLess();
                });
            } else {
                $.get(fashionOptions.filters.getLettersListUrl(), function(data) {
                    $aToZLetters.removeClass(LETTER_SELECTED);
                    $aToZContainer.html(data);
                    $aToZContainer.css('display', 'block');
                    var $firstAvailableLetter = $aToZContainer.find('.fff-letter-available').first();
                    if($firstAvailableLetter) {
                        letter = $firstAvailableLetter.data('letter');
                        $firstAvailableLetter.addClass(LETTER_SELECTED);
                    }
                    $.get(fashionOptions.filters.getCelebsUrl(), function(html) {
                        drawFiltersHtml($celebsContainer, html, filtersOptions.celebs, 'celeb-name');
                    });
                });
            }
        }
    });

    $aToZContainer.on('click', 'td.fff-letter-available:not(.fff-letter-selected)', function(e) {
        var $this = $(this);
        var $aToZLetters = $aToZContainer.find('td');
        $aToZLetters.removeClass(LETTER_SELECTED);
        $this.addClass(LETTER_SELECTED);
        letter = $this.data('letter') || letter;

        $.get(fashionOptions.filters.getCelebsUrl(), function(html) {
            drawFiltersHtml($celebsContainer, html, filtersOptions.celebs, 'celeb-name');
            fashionFilters.refreshMoreLess();
        });
    });

    $aToZContainer.on('click', 'td.fff-letter-available.fff-letter-selected', function(e) {
        var $aToZLetters = $aToZContainer.find('td');
        $aToZLetters.removeClass(LETTER_SELECTED);
        letter = '';
        $.get(fashionOptions.filters.getCelebsUrl(), function(html) {
            drawFiltersHtml($celebsContainer, html, filtersOptions.celebs, 'celeb-name');
            fashionFilters.refreshMoreLess();
        });
    });

};
var ImagesHandler = function  () {
    //handle when images trigger an error
    function imageErrorLoad ($scope, event, wrapClass, imgURL) {

        function changeImage($parent) {
            $parent.find('img').remove();
            var image = $('<img src="'+imgURL+'" />');
            $parent.append(image);
        }

        //listen to future failure events
        $scope.on(event, wrapClass, function(e) {
            changeImage($(e.currentTarget));
        });
        
        //search for images that already failed
        $scope.find(wrapClass+" .imageError").each(function() {
            changeImage($(this).parent());
        });
    }

    imageErrorLoad($('.fff-find-your-look'), 'celeb:error',
        '.fff-image-wrapper', 'http://i.mol.im/i/furniture/fff/celebs/default_celeb.png');

    imageErrorLoad($('.fff-hub'), 'product:error',
        '.fff-product-wrapper', 'http://i.mol.im/i/furniture/fff/hub/placeholder.png');
};
var FashionFilters = function ($scope, hideElements, sorting, fashionOptions) {
    var DISABLE_CL = 'fff-btn-disable';
    var FADE_DURATION = 300;
    var ENTER_KEY = 13;
    var $search = $scope.find('input[type="text"]');
    var filtersOptions = fashionOptions.filters;
    var self = this;

    var moreLesses = [new MoreLess($scope.find('.fff-celebs')), new MoreLess($scope.find('.fff-products')), new MoreLess($scope.find('.fff-trends'))];

    this.refreshMoreLess = function() {
        for(var moreLess in moreLesses) moreLesses[moreLess].update();
    }

    new CelebsFilter(this, fashionOptions, $scope, drawFiltersHtml);


    var updateResults = throttle(function (dontTrack) {
        console.log("> ", filtersOptions);
        filtersOptions.searchString = $search.val();

        sorting.resetSorting();
        updateItemsList();
        showHideElements();
        if (!dontTrack) {
            trackSearch();
        }
        updateFilterlist();
        if (filtersOptions.hasFilters()) {
            fashionOptions.showResultsTitle();
        } else {
            fashionOptions.showDefaultTitle();
        }
    }, 200);

    new FiltersUI($scope.find('.fff-celebs'), filtersOptions.celebs, 'celeb-name', updateResults);
    new FiltersUI($scope.find('.fff-products'), filtersOptions.productTypes, 'product-type-name', updateResults);
    new FiltersUI($scope.find('.fff-trends'), filtersOptions.productTrends, 'product-trend-name', updateResults);

    sorting.resetSorting();

    function drawFiltersHtml($container, $html, dataContainer, dataKey, filterName, nonZeroCallback, zeroFiltersCallback) {
        if ($html.length > 0) {
            nonZeroCallback && nonZeroCallback();

            $container.html($html);
            //mark selected items
            $container.find('label').each(function () {
                var $this = $(this);

                if (dataContainer.indexOf($this.data(dataKey)) != -1) {
                    $this.parent().addClass('checked');
                    $this.find('input[type="checkbox"]').attr('checked', true);
                }
            });

        } else {
            $container.html('<li class="fff-no-items">No ' + filterName + ' found</li>');
            zeroFiltersCallback && zeroFiltersCallback();
        }
    }

    var filterlistSelector = $('.fff-filterlist ul');
    filterlistSelector.on('click', 'label', function () {
        $(this).parent().remove();
        var type = $(this).data('filter-type');
        if (type == 'searchString') {
            $search.typeahead('setQuery', '');
        } else {
            filtersOptions.remove($(this).data('filter-type'), $(this).data('filter-value'));
        }
        updateResults(true);
    });

    function updateFilterlist() {
        filterlistSelector.empty();
        if (filtersOptions.searchString) {
            filterlistSelector.append('<li class="checked"><label data-filter-type="searchString"><input type="checkbox"><span>"' + filtersOptions.searchString + '"</span></label></li>');
        }
        function appendFilter(type, item) {
            filterlistSelector.append('<li class="checked"><label data-filter-type="' + type + '" data-filter-value="' + item + '"><input type="checkbox"><span>' + item + '</span></label></li>');
        }

        $.each(['celebs', 'productTypes', 'productTrends'], function (idx, type) {
            $.each(fashionOptions.filters[type], function (idx, item) {
                appendFilter(type, item);
            });
        });

        var size = filterlistSelector.children().length;

        if (size > 0) {
            filterlistSelector.append('<li class="checked fff-clear-filters-container"><a class="fff-clear-filters">Clear all</a></li>');
        }

        filterlistSelector.parent().toggleClass('fff-active-filter-list', size > 0);
    }

    function trackSearch() {
        var data = {
            searchTerm: fashionOptions.filters.searchString,
            celebrity: fashionOptions.filters.celebs.join(','),
            items: fashionOptions.filters.productTypes.join(','),
            trends: fashionOptions.filters.productTrends.join(',')
        };
        DM.pageEvents.FFF_HUB_SEARCHED && DM.pageEvents.fireEvent(DM.pageEvents.FFF_HUB_SEARCHED, data);
        DM.Log.log('fh', 'tracking event FFF_HUB_SEARCHED fired with data', data);
    }

    function updateItemsList() {
        $.get(fashionOptions.filters.getLettersListUrl(), function (data) {
            var $orderCeleb = $scope.find('.fff-filter-order a.fff-btn-checked');
            if ($orderCeleb.data('order') == 'key') {
                $('.fff-a-to-z-list').css('display', 'block');
                $('.fff-a-to-z-list').html(data);
            }
            $.get(fashionOptions.filters.getFilters(), function (fHtml) {
                $fHtml = $(fHtml);

                drawFiltersHtml($scope.find('.fff-celebs-results'), $fHtml.find('.celebs li'), filtersOptions.celebs, 'celeb-name', "celebs", function () {
                        $('.fff-celebs .fff-filter-order').show();
                    },
                    function () {
                        $('.fff-celebs .fff-filter-order').hide();
                    });
                drawFiltersHtml($scope.find('.fff-products ul'), $fHtml.find('.productTypes li'), filtersOptions.productTypes, 'product-type-name', 'items');
                drawFiltersHtml($scope.find('.fff-trends ul'), $fHtml.find('.trends li'), filtersOptions.productTrends, 'product-trend-name', 'trends');

                self.refreshMoreLess();
            });
        });
    }

    function showHideElements() {
        var toShow = fashionOptions.filters.hasFilters() === false;
        $.each(hideElements, function (index, $elem) {
            !toShow ? $elem.fadeOut(FADE_DURATION) : $elem.fadeIn(FADE_DURATION);
        });
        $('.fff-hub .fff-clear-filters').toggleClass(DISABLE_CL, toShow);
    }

    (function () {
        var $searchBtn = $scope.find('.twitter-search-btn');
        var autoCompleteInAction = false;

        //add search plugin
        $search.typeahead([
            {
                ttl: 1800000, // half hour caching
                name: 'celebs',
                prefetch: APP_PATH + '/list/celebs.json',
                header: '<h6 class="suggestion">Celebs</h6>'
            },
            {
                ttl: 1800000, // half hour caching
                name: 'productTypes',
                prefetch: APP_PATH + '/list/products.json',
                header: '<h6 class="suggestion">Items</h6>'
            },
            {
                ttl: 1800000, // half hour caching
                name: 'productTrends',
                prefetch: APP_PATH + '/list/trends.json',
                header: '<h6 class="suggestion">Trends</h6>'
            }
        ]);

        $search.on('keyup', function (e) {
            //prevent clearing after keypress due to autocompletion
            if (autoCompleteInAction) {
                autoCompleteInAction = false;
                return;
            }

            if (e.keyCode !== ENTER_KEY) {
                return false;
            }
            filtersOptions.clear();
            updateResults();

        });

        $searchBtn.on('click', function () {
            filtersOptions.clear();
            updateResults();
        });

        $search.on('typeahead:autocompleted typeahead:selected', function (e, datum, dataset) {
            autoCompleteInAction = true;

            filtersOptions.addFilter(dataset, datum.value);
            updateResults();
            $search.typeahead('setQuery', '');
        });

        $('.fff-hub').on('click', '.fff-clear-filters', function () {
            if (!$(this).hasClass(DISABLE_CL)) {
                $scope.find('input[type="checkbox"]:checked').click();
                filtersOptions.clear();
                $search.typeahead('setQuery', '');
                updateResults(true);
                $('.fff-hub .fff-clear-filters').removeClass(DISABLE_CL);
            }
        });
    })();
};
var FashionOptions = function () {

    var $fffListHeader = $('.fff-more-fashion-finds-header');
    var resultsTitleInitial = $fffListHeader.html();

    var fashionOptions =
    {
        sortDirection: 'date-desc',
        filters: {
            celebs: [],
            productTypes: [],
            productTrends: [],
            searchString: '',
            clear: function () {
                console.log("clearing");
                this.celebs.length = 0;
                this.productTypes.length = 0;
                this.productTrends.length = 0;
                this.searchString = '';
            },
            addFilter: function (type, value) {
                if (this[type].indexOf(value) < 0) {
                    this[type].push(value);
                }
            },
            hasFilters: function () {
                var filtersList = [this.celebs, this.productTypes, this.productTrends];
                for (var i = filtersList.length - 1; i >= 0; i--) {
                    if (filtersList[i].length > 0) {
                        return true;
                    }
                }
                return this.searchString !== '';
            },
            getCelebsUrl: function () {
                return [APP_PATH,
                    '/celebs?productTrends=', encodeURIComponent(this.productTrends.join(',')),
                    '&productTypes=', encodeURIComponent(this.productTypes.join(',')),
                    '&searchString=', encodeURIComponent(this.searchString),
                    '&aZLetter=', $('.fff-letter-selected').data('letter'),
                    '&size=', 15,
                    '&geo=', FFF_HUB_GEO].join('');
            },
            getLettersListUrl: function () {
                return [APP_PATH,
                    '/module/a-to-z-letters?productTypes=', encodeURIComponent(this.productTypes),
                    '&productTrends=', encodeURIComponent(this.productTrends),
                    '&searchString=', encodeURIComponent(this.searchString),
                    '&letter=', $('.fff-letter-selected') ? $('.fff-letter-selected').data('letter') : '',
                    '&geo=', FFF_HUB_GEO].join('');
            },
            getFilters: function () {
                return [APP_PATH,
                    '/filters?personNames=', encodeURIComponent(this.celebs.join(',')),
                    '&searchString=', encodeURIComponent(this.searchString),
                    '&productTypes=', encodeURIComponent(this.productTypes.join(',')),
                    '&productTrends=', encodeURIComponent(this.productTrends.join(',')),
                    '&aZLetter=', $('.fff-letter-selected').data('letter'),
                    '&size=', 15,
                    '&geo=', FFF_HUB_GEO].join('');
            }
        },
        showDefaultTitle: function () {
            $fffListHeader.html(resultsTitleInitial);
        },
        showResultsTitle: function () {
            $fffListHeader.html("fashion finder<span>results</span>");
        }
    };

    fashionOptions.filters.remove = function (type, value) {
        fashionOptions.filters[type].splice(fashionOptions.filters[type].indexOf(value), 1);
    };

    return fashionOptions;
};
var SortingMoreFashionFinds = function(options) {
    return (function () {
        /*PRIVATE*/
        var self = {};
        initialData = $('.fff-infinite').html();
        var getUrlCallback = function (page) {
            return self.getUrl(page);
        };
        /*PUBLIC*/
        self.random = Math.random();
        self.getUrl = function (page) {
            var url = $('.fff-infinite').data('url') || ['/products?geo=' + FFF_HUB_GEO + '&sortDirection=', options.sortDirection,
                                                        '&searchString=', encodeURIComponent(options.filters.searchString),
                                                        '&personNames=', encodeURIComponent(options.filters.celebs.join(',')),
                                                        '&productTypes=', encodeURIComponent(options.filters.productTypes.join(',')),
                                                        '&productTrends=', encodeURIComponent(options.filters.productTrends.join(','))].join('');
            return [APP_PATH, url, '&page=', page].join('');
        };
        self.resetSorting = function () {
            var self = this,
                infinite = $('.fff-infinite');
            if (infinite.length < 1) return;
            $.get(this.getUrl(), function (data) {
                $('.fff-no-results strong').text(' "'+options.filters.searchString+'"');
                infinite.html(data || initialData);
                $('.fff-no-results').toggle(!data);

                if (!data) {
                    $('.fff-filterlist').removeClass('fff-active-filter-list');
                    options.showDefaultTitle();
                }
                self.initInfinite();
            });
        };
        self.initInfinite = function () {
            $('.fff-infinite').infinitescroll({
                navSelector: ".navigation",
                nextSelector: ".navigation a:first",
                itemSelector: "li",
                prefill: true,
                state: {
                    isDuringAjax: false,
                    isInvalidPage: false,
                    isDestroyed: false,
                    isDone: false, // For when it goes all the way through the archive.
                    isPaused: false,
                    isBeyondMaxPage: false,
                    currPage: 0
                },
                loading: {
                    finishedMsg: "<div>No more results</div>",
                    msgText: " ",
                    img: " ",
                    msg: $('<div class="fff-loading"><img src="http://f.mol.im/i/furniture/fff/preload-inline.gif" /></div>')
                },
                path: getUrlCallback,
                appendCallback: true,
                maxPage: 45,
                bufferPx: 156,
                errorCallback: function () {
                    $('.fff-infinite').infinitescroll({state: {isDone: true}});
                }
            });
            $('.fff-infinite').infinitescroll('bind');
        };
        return self;
    }());
};
$(function () {
    var fashionOptions = new FashionOptions();
    var sorting = new SortingMoreFashionFinds(fashionOptions);

    if (!window.FFF) {
        $('.fff-adblocker-msg').show();
    }

    sorting.initInfinite();

    new FashionFilters($('.fff-find-your-look'), [$('.fff-hottest'), $('.news-module'), $('.column-splitter'), $('.fff-style-news-header')], sorting, fashionOptions);
    new ImagesHandler();

    (function startHottestGallery() {
        var $gallery = $(".fff-hottest");
        var $loading = $('<div class="fff-gall-loading"><img src="http://f.mol.im/i/furniture/fff/hub/black-preload.gif" /></div>');
        $gallery.find('.fff-hottest-list').append($loading);

        $gallery.hubInfiniteGallery({
            galleryWrap: '.fff-hottest-list',
            path: function (page) {
                return APP_PATH+'/hottests?geo=' + FFF_HUB_GEO + '&page='+page
            }
        });
    })();

    //create the sort box
    $("#fff-infinite-sort").selectBox({
        mobile: true,
        keepInViewport: false
    }).change(function() {
        fashionOptions.sortDirection = $(this).val();
        sorting.resetSorting();
    });

    var fffHub = $('.fff-hub');

    //block readmore redirect
    fffHub.on('click', '.read_more', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(e.target).parent().click();
    });

    //click in any item in the hub with a url open overlay
    fffHub.on('click', '*[data-fff-overlay-url]', function (e) {
        var url = $(this).data('fff-overlay-url');
        $.get(APP_PATH + '/overlay?geo=' + FFF_HUB_GEO + '&url=' + url, function (overlaydata) {
            window.FFF.openHubOverlay(JSON.parse(overlaydata), url, e);
        });
    });

    if (PageCriteria.isTablet && $('.fff-infinite').length) {
        (function () {
            var $backtop = $('<div class="fff-back-top"><a><span>Back to top</span></a></div>');

            var $beta = $(".beta");
            var $page = $('html, body');
            var $window = $(window);
            $beta.append($backtop);

            $window.on('scroll', function () {
                $backtop.toggleClass('fff-top-stick', $window.scrollTop() > $backtop.offset().top);
            });
            $backtop.on('click', function (){
                $page.animate({ scrollTop: 0 }, 600);
            });
        })();
    }

    // track clicks on trending products
    $('.fff-hub .fff-trending .fff-trend-link').on('click', function (e) {
        var product = $(e.target).closest('*[data-product]').data('product');
        var data = {
            celebrity: product.personName,
            productId: product.productId,
            items: product.productTypes,
            trends: product.trends,
            position: $(e.target).closest('li').index() + 1,
            pageMetaData: DM.getPageMetadata(),
            fffType: window.FFF.fffType(e),
            fffSource: window.FFF.fffSource(e)
        };
        DM.pageEvents.FFF_BUY_TRENDING_CLICKED && DM.pageEvents.fireEvent(DM.pageEvents.FFF_BUY_TRENDING_CLICKED, data);
        DM.Log.log('fh', 'Tracking event FFF_BUY_TRENDING_CLICKED fired with data', data);
    });

});
});
// Delay until the DOM is ready and the MOL async bundle loaded
