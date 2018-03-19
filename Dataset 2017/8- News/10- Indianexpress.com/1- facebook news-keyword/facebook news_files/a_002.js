(function($) {
	function do_all_client_side_twitter_oembed() {	
		if( typeof twttr === undefined ) {
			$.getScript('//platform.twitter.com/widgets.js', function() { $( '.pending-tweet' ).each( do_client_side_twitter_oembed ); } );
		}
	}

	// handle failed tweets or tweets that haven't been fetched yet
	function do_client_side_twitter_oembed() {
		var $this = $(this),
			text,
			url = 'https://api.twitter.com/1/statuses/oembed.json?omit_script=true&callback=?&';

		// Handle instances where make_clickable gets too friendly and linkifies our Twitter URL 
		if ( $this.has( 'a' ).length ) {
			text = $this.find( 'a' ).first().attr( 'href' );
		} else {
			text = $this.text();
		}
			
		// If we find an exact match, we want to fetch its content from the oembed endpoint and display it
		if ( text.match( /^http(s|):\/\/twitter\.com(\/\#\!\/|\/)([a-zA-Z0-9_]{1,20})\/status(es)*\/(\d+)$/ ) ) {
			url += 'url=' + encodeURIComponent( text );
		} else if ( text.match( /^(\d+)$/ ) ) {
			url += 'id=' + text;
		} else {
			return;
		}

		// Need to make a JSONP call to avoid CORS issues
		$.getJSON( url, function( data ) {
			if ( data.html ) {
				$this.html( data.html );
				$this.show();
				twttr.widgets.load();
			}
		} );
	}

	$( document ).ready( do_all_client_side_twitter_oembed );
	$( document.body ).on('post-load', do_all_client_side_twitter_oembed );
})(jQuery);
;
jQuery( document.body ).on( 'post-load', function() {
	if ( typeof twttr == 'object' && twttr.widgets && twttr.widgets.load )
		twttr.widgets.load();
});;
(function() {
	var ajaxurl = window.ajaxurl || '/wp-admin/admin-ajax.php',
		data = window.wpcomVipAnalytics,
		dataQs, percent;

	if ( typeof XMLHttpRequest === 'undefined' ) {
		return;
	}

	if ( ! data ) {
		return;
	}

	percent = ~~data.percentToTrack;
	if ( percent && percent < 100 && ( ~~( ( Math.random() * 100 ) + 1 ) > percent ) ) {
		return;
	}

	dataQs = 'action=wpcom_vip_analytics';

	for ( var key in data ) {
		if ( key === 'percentToTrack' ) {
			continue;
		}
		if ( data.hasOwnProperty( key ) ) {
			dataQs += '&' +
				encodeURIComponent( key ).replace(/%20/g, '+' ) + '=' +
				encodeURIComponent( data[key] ).replace(/%20/g, '+' );
		}
	}

	function sendInfo() {
		var xhr = new XMLHttpRequest();
		xhr.open( 'POST', ajaxurl, true );
		xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
		xhr.send( dataQs );
	}

	// Delay for some time after the document is ready to ping
	function docReady() {
		setTimeout( function() {
			sendInfo();
		}, 1500 );
	}

	if ( document.readyState === 'complete' ) {
		docReady.apply();
	}
	else if ( document.addEventListener ) {
		document.addEventListener( 'DOMContentLoaded', docReady, false );
	}
	else if ( document.attachEvent ) {
		document.attachEvent( 'onreadystatechange', docReady );
	}
})();
;
jQuery( document ).ready( function( $, wpcom ) {
	var masterbar,
		menupops = $( 'li#wp-admin-bar-blog.menupop, li#wp-admin-bar-newdash.menupop, li#wp-admin-bar-my-account.menupop' ),
		newmenu = $( '#wp-admin-bar-new-post-types' );

	// Unbind hoverIntent, we want clickable menus.
	menupops
		.unbind( 'mouseenter mouseleave' )
		.removeProp( 'hoverIntent_t' )
		.removeProp( 'hoverIntent_s' )
		.on( 'mouseover', function(e) {
			var li = $(e.target).closest( 'li.menupop' );
			menupops.not(li).removeClass( 'ab-hover' );
			li.toggleClass( 'ab-hover' );
		} )
		.on( 'click touchstart', function(e) {
			var $target = $( e.target );

			if ( masterbar.focusSubMenus( $target ) ) {
				return;
			}

			e.preventDefault();
			masterbar.toggleMenu( $target );
		} );

	masterbar = {
		focusSubMenus: function( $target ) {
			// Handle selection of menu items
			if ( ! $target.closest( 'ul' ).hasClass( 'ab-top-menu' ) ) {
				$target
					.closest( 'li' );

				return true;
			}

			return false;
		},

		toggleMenu: function( $target ) {
			var $li = $target.closest( 'li.menupop' ),
				$html = $( 'html' );

			$( 'body' ).off( 'click.ab-menu' );
			$( '#wpadminbar li.menupop' ).not($li).removeClass( 'ab-active wpnt-stayopen wpnt-show' );

			if ( $li.hasClass( 'ab-active' ) ) {
				$li.removeClass( 'ab-active' );
				$html.removeClass( 'ab-menu-open' );
			} else {
				$li.addClass( 'ab-active' );
				$html.addClass( 'ab-menu-open' );

				$( 'body' ).on( 'click.ab-menu', function( e ) {
					if ( ! $( e.target ).parents( '#wpadminbar' ).length ) {
						e.preventDefault();
						masterbar.toggleMenu( $li );
						$( 'body' ).off( 'click.ab-menu' );
					}
				} );
			}
		}
	};
} );;
