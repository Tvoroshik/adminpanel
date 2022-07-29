$( document ).ready(function() {
    $('.order').click(function() {
    		$('div.item').css('background-color', 'inherit');
    		$(this).parents('div.item').css('background-color', 'red');
    });
});