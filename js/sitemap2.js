$(document).ready(function(){

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".sitemap").slideToggle("fast");
  });

});