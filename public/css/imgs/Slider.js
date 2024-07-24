
  

            
$(document).ready(function(){
  // Activate Carousel
  $(".d-block").carousel({interval: 500});
    
  // Enable Carousel Indicators
  $(".d-block").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".d-block").click(function(){
    $(".d-block").carousel(1);
  });
  $(".d-block").click(function(){
    $(".d-block").carousel(2);
  });
  $(".d-block").click(function(){
    $(".d-block").carousel(3);
  });
    
  // Enable Carousel Controls
  $(".d-block").click(function(){
    $(".sr").carousel("prev");
  });
  $("").click(function(){
    $(".sr").carousel("next");
  });
});

