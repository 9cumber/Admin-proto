jQuery( function($) {
    $('tbody tr td[data-href]').addClass('clickable').click( function() {
	window.location = $(this).attr('data-href');
    }).find('a').hover( function() {
	$(this).parents('td').unbind('click');
    }, function() {
	$(this).parents('td').click( function() {
	    window.location = $(this).attr('data-href');
	});
    });
});

$("a").click(function ( event ) {
    event.preventDefault();
    $(this).hide();
});