$(document).ready(function(){

	$('.backButton').hide();

	$(window).scroll(function(){
		if ($(thid).scrollTop() > 150){
			$('.backButton').fadeIn('800');
		}else{
			$('.backButton').fadeOut('800');
		}
	});

	$('.backButton').click(function(){
		$('body,html').animate({
			scrollTop:0 
		});
	});
});