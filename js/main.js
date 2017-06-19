$(function(){	
	$(".btn_menu").click(function(){
		$("nav ul").slideToggle();
		})
	});


document.addEventListener('scroll', function(e){
	e = e || window.event;
	var btn = document.querySelector('.btn_up'),
		windowHeight = document.documentElement.clientHeight - 600,
		scrolled = window.scrollY || document.documentElement.scrollTop;
	if(scrolled > windowHeight){
		if(btn.classList.contains('btn_none')) btn.classList.remove('btn_none');
	} else if(scrolled < windowHeight){
		if(!btn.classList.contains('btn_none')) btn.classList.add('btn_none');
	}
});




	