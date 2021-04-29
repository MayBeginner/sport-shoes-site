$(function(){
	$('#logo').click(function(){
		$('#header').slideUp(2000,function(){
			$('#header').slideDown(2000);
		});
	});
});
