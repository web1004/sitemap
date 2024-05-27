$(document).ready(function(){

  $(".title").click(function(){
    $(this).toggleClass("active");
    $(".sub-navi").slideToggle(200);
  });

});