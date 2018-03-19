
/*
 * jQuery UI Autocomplete 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.position.js
 */
(function( $ ) {

$.widget( "ui.autocomplete", {
	options: {
		minLength: 1,
		delay: 300
	},
	_create: function() {
		var self = this;
		this.element
			.addClass( "ui-autocomplete-input" )
			.attr( "autocomplete", "off" )
			// TODO verify these actually work as intended
			.attr({
				role: "textbox",
				"aria-autocomplete": "list",
				"aria-haspopup": "true"
			})
			.bind( "keydown.autocomplete", function( event ) {
				var keyCode = $.ui.keyCode;
				switch( event.keyCode ) {
				case keyCode.PAGE_UP:
					self._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					self._move( "nextPage", event );
					break;
				case keyCode.UP:
					self._move( "previous", event );
					// prevent moving cursor to beginning of text field in some browsers
					event.preventDefault();
					break;
				case keyCode.DOWN:
					self._move( "next", event );
					// prevent moving cursor to end of text field in some browsers
					event.preventDefault();
					break;
				case keyCode.ENTER:
					// when menu is open or has focus
					if ( self.menu.active ) {
						event.preventDefault();
					}
				case keyCode.TAB:
					if ( !self.menu.active ) {
						return;
					}
					self.menu.select();
					break;
				case keyCode.ESCAPE:
					self.element.val( self.term );
					self.close( event );
					break;
				case 16:
				case 17:
				case 18:
					// ignore metakeys (shift, ctrl, alt)
					break;
				default:
					// keypress is triggered before the input value is changed
					clearTimeout( self.searching );
					self.searching = setTimeout(function() {
						self.search( null, event );
					}, self.options.delay );
					break;
				}
			})
			.bind( "focus.autocomplete", function(event ) {
				self.previous = self.element.val();
				self.close( event );


			})
			

			/*bind( "blur.autocomplete", function( event ) {
				clearTimeout( self.searching );
				// clicks on the menu (or a button to trigger a search) will cause a blur event
				// TODO try to implement this without a timeout, see clearTimeout in search()
				self.closing = setTimeout(function() {
					self.close( event );
				}, 150 );
			});*/
		this._initSource();
		this.response = function() {
			return self._response.apply( self, arguments );
		};
		this.menu = $( "<ul></ul>" )
			.addClass( "ui-autocomplete" )
			.appendTo( this.element.parent() )
			.menu({
				focus: function( event, ui ) {
					var item = ui.item.data( "item.autocomplete" );
					if ( false !== self._trigger( "focus", null, { item: item } ) ) {
						// use value to match what will end up in the input
						self.element.val( item.value );
					}
				},
				selected: function( event, ui ) {
					var item = ui.item.data( "item.autocomplete" );
					if ( false !== self._trigger( "select", event, { item: item } ) ) {
						self.element.val( item.value );
					}
					//self.close( event );
					//self.previous = self.element.val();
					// only trigger when focus was lost (click on menu)
					if ( self.element[0] != document.activeElement ) {
						self.element.focus();
					}
				}
			})
			.zIndex( this.element.zIndex() + 1 )
			// workaround for jQuery bug #5781 http://dev.jquery.com/ticket/5781
			.css({ top: 0, left: 0 })
			.hide()
			.data( "menu" );
		if ( $.fn.bgiframe ) {
			 this.menu.element.bgiframe();
		}
	},

	destroy: function() {
		this.element
			.removeClass( "ui-autocomplete-input ui-widget ui-widget-content" )
			.removeAttr( "autocomplete" )
			.removeAttr( "role" )
			.removeAttr( "aria-autocomplete" )
			.removeAttr( "aria-haspopup" );
		this.menu.element.remove();
		$.Widget.prototype.destroy.call( this );
	},

	_setOption: function( key ) {
		$.Widget.prototype._setOption.apply( this, arguments );
		if ( key == "source" ) {
			this._initSource();
		}
	},

	_initSource: function() {
		if ( $.isArray(this.options.source) ) {
			var array = this.options.source;
			this.source = function( request, response ) {
				// escape regex characters
				var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
				response( $.grep( array, function(value) {
    				return matcher.test( value.value || value.label || value );
				}) );
			};
		} else if ( typeof this.options.source == "string" ) {
			var url = this.options.source;
			this.source = function( request, response ) {
				$.getJSON( url, request, response );
			};
		} else {
			this.source = this.options.source;
		}
	},

	search: function( value, event ) {
		value = value != null ? value : this.element.val();
		if ( value.length < this.options.minLength ) {
			return this.close( event );
		}

		clearTimeout( this.closing );
		if ( this._trigger("search") === false ) {
			return;
		}

		return this._search( value );
	},

	_search: function( value ) {
		this.term = this.element
			.addClass( "ui-autocomplete-loading" )
			// always save the actual value, not the one passed as an argument
			.val();

		this.source( { term: value }, this.response );
	},

	_response: function( content ) {
		if ( content.length ) {
			content = this._normalize( content );
			this._trigger( "open" );
			this._suggest( content );
		} else {
			this.close();
		}
		this.element.removeClass( "ui-autocomplete-loading" );
	},

	close: function( event ) {
		clearTimeout( this.closing );
		if ( this.menu.element.is(":visible") ) {
			this._trigger( "close", event );
			 this.menu.element.hide();
			 this.menu.deactivate();
		}
		if ( this.previous != this.element.val() ) {
			this._trigger( "change", event );
		}
	},

	_normalize: function( items ) {
		// assume all items have the right format when the first item is complete
		if ( items.length && items[0].label && items[0].value ) {
			return items;
		}
		return $.map( items, function(item) {
			if ( typeof item == "string" ) {
				return {
					label: item,
					value: item
				};
			}
			return $.extend({
				label: item.label || item.value,
				value: item.value || item.label
			}, item );
		});
	},

	_suggest: function( items ) {
		var self = this,
			ul = this.menu.element.empty();
		this._renderMenu( ul, items );
		// TODO refresh should check if the active item is still in the dom, removing the need for a manual deactivate
		this.menu.deactivate();
		this.menu.refresh();
		this.menu.element.show().position({
			my: "left top",
			at: "left bottom",
			of: this.element,
			collision: "none"
		});
		if ( this.options.autoFocus ) {
			this.menu.next( new $.Event("mouseover") );
		};
		if ( ul.width() <= this.element.width() ) {
			ul.width( this.element.width() );
		}
		
	},
	
	_renderMenu: function( ul, items ) {
		var self = this;
		$.each( items, function( index, item ) {
			self._renderItem( ul, item );
		});
	},

	_renderItem: function( ul, item) {
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( "<a>" + item.label + "</a>" )
			.appendTo( ul );
	},

	_move: function( direction, event ) {
		if ( !this.menu.element.is(":visible") ) {
			this.search( null, event );
			return;
		}
		if ( this.menu.first() && /^previous/.test(direction) ||
				this.menu.last() && /^next/.test(direction) ) {
			this.element.val( this.term );
			this.menu.deactivate();
			return;
		}
		this.menu[ direction ]();
	},

	widget: function() {
		return this.menu.element;
	}
});

$.extend( $.ui.autocomplete, {
	escapeRegex: function( value ) {
		return value.replace( /([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1" );
	}
});

})( jQuery );

/*
 * jQuery UI Menu (not officially released)
 * 
 * This widget isn't yet finished and the API is subject to change. We plan to finish
 * it for the next release. You're welcome to give it a try anyway and give us feedback,
 * as long as you're okay with migrating your code later on. We can help with that, too.
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Menu
 *
 * Depends:
 *	jquery.ui.core.js
 *  jquery.ui.widget.js
 */
(function($) {

$.widget("ui.menu", {
	_create: function() {
		var self = this;
		this.element
			.addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
			.attr({
				role: "menu",
				"aria-activedescendant": "ui-active-menuitem"
			})
			.click(function(e) {
				// temporary
				e.preventDefault();
				self.select();
			});
		this.refresh();
	},
	
	refresh: function() {
		var self = this;

		// don't refresh list items that are already adapted
		var items = this.element.children("li:not(.ui-menu-item):has(a)")
			.addClass("ui-menu-item")
			.attr("role", "menuitem");
		
		items.children("a")
			.addClass("ui-corner-all")
			.attr("tabindex", -1)
			// mouseenter doesn't work with event delegation
			.mouseenter(function() {
				self.activate($(this).parent());
			});
	},

	activate: function(item) {
		this.deactivate();
		this.active = item.eq(0)
			.children("a")
				.addClass("ui-state-hover")
				.attr("id", "ui-active-menuitem")
			.end();
		this._trigger("focus", null, { item: item });
		if (this.hasScroll()) {
			var offset = item.offset().top - this.element.offset().top,
				scroll = this.element.attr("scrollTop"),
				elementHeight = this.element.height();
			if (offset < 0) {
				this.element.attr("scrollTop", scroll + offset);
			} else if (offset > elementHeight) {
				this.element.attr("scrollTop", scroll + offset - elementHeight + item.height());
			}
		}
	},

	deactivate: function() {
		if (!this.active) { return; }

		this.active.children("a")
			.removeClass("ui-state-hover")
			.removeAttr("id");
		this.active = null;
	},

	next: function() {
		this.move("next", "li:first");
	},

	previous: function() {
		this.move("prev", "li:last");
	},

	first: function() {
		return this.active && !this.active.prev().length;
	},

	last: function() {
		return this.active && !this.active.next().length;
	},

	move: function(direction, edge) {
		if (!this.active) {
			this.activate(this.element.children(edge));
			return;
		}
		var next = this.active[direction]();
		if (next.length) {
			this.activate(next);
		} else {
			this.activate(this.element.children(edge));
		}
	},

	// TODO merge with previousPage
	nextPage: function() {
		if (this.hasScroll()) {
			// TODO merge with no-scroll-else
			if (!this.active || this.last()) {
				this.activate(this.element.children(":first"));
				return;
			}
			var base = this.active.offset().top,
				height = this.element.height(),
				result = this.element.children("li").filter(function() {
					var close = $(this).offset().top - base - height + $(this).height();
					// TODO improve approximation
					return close < 10 && close > -10;
				});

			// TODO try to catch this earlier when scrollTop indicates the last page anyway
			if (!result.length) {
				result = this.element.children(":last");
			}
			this.activate(result);
		} else {
			this.activate(this.element.children(!this.active || this.last() ? ":first" : ":last"));
		}
	},

	// TODO merge with nextPage
	previousPage: function() {
		if (this.hasScroll()) {
			// TODO merge with no-scroll-else
			if (!this.active || this.first()) {
				this.activate(this.element.children(":last"));
				return;
			}

			var base = this.active.offset().top,
				height = this.element.height();
				result = this.element.children("li").filter(function() {
					var close = $(this).offset().top - base + height - $(this).height();
					// TODO improve approximation
					return close < 10 && close > -10;
				});

			// TODO try to catch this earlier when scrollTop indicates the last page anyway
			if (!result.length) {
				result = this.element.children(":first");
			}
			this.activate(result);
		} else {
			this.activate(this.element.children(!this.active || this.first() ? ":last" : ":first"));
		}
	},

	hasScroll: function() {
		return this.element.height() < this.element.attr("scrollHeight");
	},

	select: function() {
		this._trigger("selected", null, { item: this.active });
	}
});

})(jQuery);
/*
 * jQuery UI Button 1.8rc3
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function( $ ) {

var lastActive,
	baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
	otherClasses = "ui-state-hover ui-state-active " +
		"ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon ui-button-text-only";

$.widget( "ui.button", {
	options: {
		text: true,
		label: null,
		icons: {
			primary: null,
			secondary: null
		}
	},
	_create: function() {
		this._determineButtonType();
		this.hasTitle = !!this.buttonElement.attr( "title" );

		var self = this,
			options = this.options,
			toggleButton = this.type === "checkbox" || this.type === "radio",
			hoverClass = "ui-state-hover" + ( !toggleButton ? " ui-state-active" : "" ),
			focusClass = "ui-state-focus";

		if ( options.label === null ) {
			options.label = this.buttonElement.html();
		}

		this.buttonElement
			.addClass( baseClasses )
			.attr( "role", "button" )
			.bind( "mouseenter.button", function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).addClass( "ui-state-hover" );
				if ( this === lastActive ) {
					$( this ).addClass( "ui-state-active" );
				}
			})
			.bind( "mouseleave.button", function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).removeClass( hoverClass );
			})
			.bind( "focus.button", function() {
				// no need to check disabled, focus won't be triggered anyway
				$( this ).addClass( focusClass );
			})
			.bind( "blur.button", function() {
				$( this ).removeClass( focusClass );
			});

		if ( this.type === "checkbox") {
			this.buttonElement.bind( "click.button", function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).toggleClass( "ui-state-active" );
				self.buttonElement.attr( "aria-pressed", self.element[0].checked );
			});
		} else if ( this.type === "radio") {
			this.buttonElement.bind( "click.button", function() {
				if ( options.disabled ) {
					return;
				}
				$( this ).addClass( "ui-state-active" );
				self.buttonElement.attr( "aria-pressed", true );

				var radio = self.element[ 0 ],
					name = radio.name,
					form = radio.form,
					radios;
				if ( name ) {
					if ( form ) {
						radios = $( form ).find( "[name=" + name + "]" );
					} else {
						radios = $( "[name=" + name + "]", radio.ownerDocument )
							.filter(function() {
								return !this.form;
							});
					}
					radios
						.not( radio )
						.map(function() {
							return $( this ).button( "widget" )[ 0 ];
						})
						.removeClass( "ui-state-active" )
						.attr( "aria-pressed", false );
				}
			});
		} else {
			this.buttonElement
				.bind( "mousedown.button", function() {
					if ( options.disabled ) {
						return;
					}
					$( this ).addClass( "ui-state-active" );
					lastActive = this;
					$( document ).one( "mouseup", function() {
						lastActive = null;
					});
				})
				.bind( "mouseup.button", function() {
					if ( options.disabled ) {
						return;
					}
					$( this ).removeClass( "ui-state-active" );
				})
				.bind( "keydown.button", function(event) {
					if ( event.keyCode == $.ui.keyCode.SPACE || event.keyCode == $.ui.keyCode.ENTER ) {
						$( this ).addClass( "ui-state-active" );
					}
				})
				.bind( "keyup.button", function() {
					$( this ).removeClass( "ui-state-active" );
				});
			if (this.buttonElement.is("a")) {
				this.buttonElement.keyup(function(event) {
					if (event.keyCode == $.ui.keyCode.SPACE) {
						// TODO pass through original event correctly (just as 2nd argument doesn't work)
						$(this).trigger("click");
					}
				});
			}
		}

		this._resetButton();
	},

	_determineButtonType: function() {
		this.type = this.element.is( ":checkbox" )
			? "checkbox"
			: this.element.is( ":radio" )
				? "radio"
				: this.element.is( "input" )
					? "input"
					: "button";

		if ( this.type === "checkbox" || this.type === "radio" ) {
			this.buttonElement = $( "[for=" + this.element.attr("id") + "]" );
			this.element.hide();

			var checked = this.element.is( ":checked" );
			if ( checked ) {
				this.buttonElement.addClass( "ui-state-active" );
			}
			this.buttonElement.attr( "aria-pressed", checked );
		} else {
			this.buttonElement = this.element;
		}
	},

	widget: function() {
		return this.buttonElement;
	},

	destroy: function() {
		this.buttonElement
			.removeClass( baseClasses + " " + otherClasses )
			.removeAttr( "role" )
			.removeAttr( "aria-pressed" )
			.html( this.buttonElement.find(".ui-button-text").html() );

		if ( !this.hasTitle ) {
			this.buttonElement.removeAttr( "title" );
		}

		if ( this.type === "checkbox" || this.type === "radio" ) {
			this.element.show();
		}

		$.Widget.prototype.destroy.call( this );
	},

	_setOption: function( key, value ) {
		$.Widget.prototype._setOption.apply( this, arguments );
		this._resetButton();
	},

	_resetButton: function() {
		if ( this.type === "input" ) {
			if ( this.options.label ) {
				this.element.val( this.options.label );
			}
			return;
		}
		var buttonElement = this.buttonElement,
			buttonText = $( "<span></span>" )
				.addClass( "ui-button-text" )
				.html( this.options.label )
				.appendTo( buttonElement.empty() )
				.text();

		var icons = this.options.icons,
			multipleIcons = icons.primary && icons.secondary;
		if ( icons.primary || icons.secondary ) {
			buttonElement.addClass( "ui-button-text-icon" +
				( multipleIcons ? "s" : "" ) );
			if ( icons.primary ) {
				buttonElement.prepend( "<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>" );
			}
			if ( icons.secondary ) {
				buttonElement.append( "<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>" );
			}
			if ( !this.options.text ) {
				buttonElement
					.addClass( multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only" )
					.removeClass( "ui-button-text-icons ui-button-text-icon" );
				if ( !this.hasTitle ) {
					buttonElement.attr( "title", buttonText );
				}
			}
		} else {
			buttonElement.addClass( "ui-button-text-only" );
		}
	}
});

$.widget( "ui.buttonset", {
	_create: function() {
		this.element.addClass( "ui-button-set" );
		this.buttons = this.element.find( ":button, :submit, :reset, :checkbox, :radio, a, .ui-button" )
			.button()
			.map(function() {
				return $( this ).button( "widget" )[ 0 ];
			})
				.removeClass( "ui-corner-all" )
				.filter( ":first" )
					.addClass( "ui-corner-left" )
				.end()
				.filter( ":last" )
					.addClass( "ui-corner-right" )
				.end()
			.end();
	},

	_setOption: function( key, value ) {
		if ( key === "disabled" ) {
			this.buttons.button( "option", key, value );
		}

		$.Widget.prototype._setOption.apply( this, arguments );
	},

	destroy: function() {
		this.element.removeClass( "ui-button-set" );
		this.buttons
			.button( "destroy" )
			.removeClass( "ui-corner-left ui-corner-right" );

		$.Widget.prototype.destroy.call( this );
	}
});


})( jQuery );
 