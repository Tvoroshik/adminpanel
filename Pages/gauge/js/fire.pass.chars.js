(function($) {
	$.fn.awesomePassword = function(options) { 
		// дефолтные значения
		var defaults = {
 			speed: 	150, // скорость
 			cl: 	'typed-char', // класс лэйбла
 			top: 	0, // верхний отступ
 			left:	0 // нижний отступ
 		}, 	opts = $.extend(defaults, options);	
 		
 		var top 		= this.offset().top + opts['top'];
 		var left 		= this.offset().left + this.width() + opts['left'];
 		var charSpan 	= attachCharSpan();
 		
 		function attachCharSpan() {
 			var charSpan = $("<span class=" + opts['cl'] + "></span>").hide();
 			charSpan.css({
 				position: 	'absolute',
 				top: 		top + 'px',
 				left: 		left + 'px'				
 			});
 			charSpan.appendTo("body");
			return charSpan;
 		}; 	
  		
  		this.keypress(function(e) {
  			var code = e.which;
			var typedChar;
			
			if(!e.ctrlKey && !e.metaKey) {
				typedChar = String.fromCharCode(code);
				if(typedChar == ' ') typedChar = '&nbsp;';
				charSpan.html(typedChar).show().fadeOut(opts['speed']);
			}
  		});
  		
  		
    }

})(jQuery);