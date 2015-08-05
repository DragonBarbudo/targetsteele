$(function(){

  
  if($('#map-contact').length>0){
    map = new GMaps({
			div: '#map-contact',
			lat: 19.4145829,
      lng: -99.18143180000001,
      zoom: 16
		});
		
		map.addMarker({
			lat: 19.4145829, lng: -99.18143180000001, details: 'Nuestras oficinas',
			infoWindow: { content: '<p><strong>Target Steele</strong><br>Nuestras oficinas</p>' }
		});
  }
  
  
  if($('.toggleSlideBtn').length>0){
    $('.toggleSlideBtn, .triggerSlider').click(function(){
      var show = $(this).attr('data-show');
      var hide = $(this).attr('data-hide');
      $(hide).slideUp();
      $(show).slideDown();
      console.log(show);
    });
  }
  
  
  $(".rslides").responsiveSlides();
	
  $('#toTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
 
  
  $('.tooltip').tooltipster({
    position: 'bottom'
  });
  
  
  
  $('.deployer').click(function(){
    $(this).next('.hidden').slideToggle();
    $(this).children('.mas').toggle();
    $(this).children('.menos').toggle();
  });
  
  
});

window.sr = new scrollReveal({
  //reset: true,
  enter: 'left',
  move: '100px',
  mobile: true,
  vFactor:  0.50
});

