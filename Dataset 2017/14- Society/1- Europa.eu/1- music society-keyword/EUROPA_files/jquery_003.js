(function($){
	$.widget( "custom.vmenu", {

		// options: {
		  // callback: false,
		// },
		
		
		_create: function() {
			// console.log('_create');
			
			fixed = false;
			
			obj = this;
			el = obj.element;
			if(el.offset()){
				x = el.offset().top;
				roundX = Math.round(x);
				
				$(window).bind('scroll',function(e) {
					// console.log('scroll');
					obj._update();
				});
			}
		},
		reset : function(){
			fixed = false;
			el = this.element;
			el.css('position','relative');
			obj._update();
		},
		_setOption: function( key, value ) {
			this.options[ key ] = value;
			this._update();
		},
		_update: function() {
			var diff = $(document).scrollTop()-roundX;
			if(diff>=0 && !fixed)
			{
				fixed = true;
				el.css('position','fixed');
				obj._trigger( "fixed", null, { fixed: true } );
			}
			else if (diff<0 && fixed){
				fixed = false;
				el.css('position','relative');
				obj._trigger( "fixed", null, { fixed: false } );
			}
		},
		destroy: function() {
			el.css('position','relative');
			$(window).unbind('scroll');
			// Call the base destroy function.
			$.Widget.prototype.destroy.call( this );
		}

	 
	});
})(jQuery);