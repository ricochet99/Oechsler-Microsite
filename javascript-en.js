
$(document).ready(function()
{
	var navOpen = 0;
	$('.navbar-toggle').click(function () {
		if(navOpen==0) {
			$('nav').removeClass('mobilNav');
			navOpen = 1;
		} else {
			$('nav').addClass('mobilNav');
			navOpen = 0;
		}
	});
	
	function goToByScroll(id){
		$('html,body').animate({scrollTop: $("."+id).offset().top-45},	'slow');
	}
	
	
	function resizeElements()
	{
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		
		//set Headerdiv
		if(windowWidth > windowHeight-100) {
			$('#headerIMG').attr('src', 'img/header-desktop_en.gif');
			$('#headerIMG').css('margin', '30px 0px 30px 0px');
			var headerHeight = $('header').height();
			var headHeight = windowHeight-headerHeight;
			$('.arrow').css('display', 'block');
			$('.startbild').css('height', headHeight+'px');
			
			$( "#headerIMG" ).on("load", function() {
				var imgheight = $('#headerIMG').height();
				var topPadding = (headHeight-imgheight)/100*42;
				$('#headerIMG').css('padding-top', topPadding+'px');
			});
		}
		else {
			$('#headerIMG').attr('src', 'img/header-mobil02_en.gif');
			$('#headerIMG').css('margin', '50px 0px 80px 0px');
			$('.startbild').css('height', 'auto');
			$('.arrow').css('display', 'none');
			$( "#headerIMG" ).on("load", function() {
				$('#headerIMG').css('padding-top', '0px');
			});
		}
	}
	
	resizeElements();
	
	$(window).resize(function() {
		resizeElements();
	});
	
	$('.jumplink').click(function() {
		var id = $(this).attr("id");
		id = id.replace('Link','');
		goToByScroll(id);
		$('nav').addClass('mobilNav');
	});
	
	$('.arrow img').click(function() {
		goToByScroll("intro");
	});
	
});