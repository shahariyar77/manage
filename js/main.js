$(document).ready(function(){
    
  $(".testmonial-carousel").owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  margin: 30,
  autoplay: true,
  navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
  nav:false,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
}
});
// offcanvas manu

$(".header-bar").on("click", function(){
  $(".offcanvas-manu, .offcanvas-overylay").addClass("active");  
});


$(".manu-close, .offcanvas-overylay").on("click", function(){
  $(".offcanvas-manu, .offcanvas-overylay").removeClass("active");  
});




    
});