(function($){

	$.fn.blink = function( options ){

		initKeyframes(options);

		this.each(function(){
			var text = $(this).text();
			var lastRand = 0;
			var textHtml = "";
			for(var i in text){
				var rand = getRandom();
				while(Math.floor(rand) == lastRand){
					rand = getRandom();
				}
				lastRand = Math.floor(rand);
				textHtml += "<span class='blinkText blinkText"+Math.floor(rand)+"'>" + text[i] + "</span>";
			}
			$(this).html(textHtml);
		});
		
		function getRandom(){
			return Math.random() * 6;
		}

		function initKeyframes(options){
			var settings = $.extend({
	            duration:3
	        }, options);
			var x = document.styleSheets[0];

			if(window.CSSRule.WEBKIT_KEYFRAMES_RULE){
				pre = '-webkit-';
			}else if(window.CSSRule.MOZ_KEYFRAMES_RULE){
				pre = '-moz-';
			}else{
				pre = '';
			}

			var animate = ["{0% {opacity: 0;}10% {opacity: 0;}50% {opacity: 1;}}",
							"{0% {opacity: 0;}5% {opacity: 0;}60% {opacity: 1;}}",
							"{0% {opacity: 0;}30% {opacity: 0;}70% {opacity: 1;}}",
							"{0% {opacity: 0;}20% {opacity: 0;}80% {opacity: 1;}}",
							"{0% {opacity: 0;}95% {opacity: 1;}}",
							"{0% {opacity: 0;}30% {opacity: 0;}100% {opacity: 1;}}"];

			for(var j in animate){
				x.insertRule("@"+pre+"keyframes animateShow"+j+" " + animate[j], 0); 
				x.insertRule(".blinkText"+j+"{"+pre+"animation:animateShow"+j+" "+settings['duration']+"s ease;}", 0);
			}
		}
	}
}($));