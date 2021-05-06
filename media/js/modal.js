	$(function(){
		var fx = {
			
			'initModal': function(){
				if($('.modal-window').length==0){
					$('<div>').attr('id','overlay').appendTo('body');
					
					return $('<div>').addClass('modal-window').appendTo('body');
							}else {
					return $('.modal-window');
				}
			}
			
		}
		
		
		
		
		
		
$('.window').on('click', function(e){
	e.preventDefault();
	name=$(this).attr('data-name');
	body=$(this).attr('data-body');
	pic=$(this).attr('data-pic');
	modal=fx.initModal();
	$('<a>').addClass('modal-close-btn').html('&times;').attr('href','#').click(function(e){
		e.preventDefault();
		modal.remove();
		$('#overlay').remove();
	}) .appendTo(modal);
	
	
	modal.append('<img src="' + pic +'" width="50%"/>');
	modal.append('<h5>' + name + '</h5>');
	modal.append('<div>' + body + '</div>');
	
	
	})	

	
	})