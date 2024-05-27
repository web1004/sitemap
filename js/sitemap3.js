$(document).ready(function(){
  
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".modal").slideToggle("fast");
  });
  
});