$(document).ready(function(){

  $(".s1").click(function(){
    $(this).toggleClass("active");
    $(".footmenu1 .fbox1").stop().slideToggle();
  });

});