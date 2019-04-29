$(document).ready(function(){
  
  
  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});
  
  
  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  
  //------------------------------------//
  //Wow Animation//
  //------------------------------------// 
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();


	
});

$(function() { 
  var ht = $('.hththt')
      // Add class
  
    ht.hover(function(){
      ht.toggleClass('hththt-dots');

      ht.click(function(){
      ht.toggleClass('hththt-liked');           ht.toggleClass('hththt-beating');  
    });
  });
});


var image = ['./love_images/1.jpg','./love_images/2.jpg', './love_images/3.jpg', './love_images/4.jpg',
'./love_images/5.jpeg',
'./love_images/6.jpg',
'./love_images/7.jpeg',
];
function imggen() {
  var img = image.length
  var rand = Math.floor((Math.random() * img) + 0);
  var ranimg = image[rand];
  $('#insertp').prepend("<img src='"+ranimg+"' height=800px ></img>");
}
$('.hththt').click(function(){
  $('#insertp').text("");
  imggen();
});

