$(document).ready(function(){

  chk1 =true;
  $(".s1").click(function(){
    $(".m1").stop().slideToggle();
    $(this).toggleClass("active");
    $(this).find("span i").toggleClass("fa-chevron-up fa-chevron-down")
  });

  chk2 =true;
  $(".s2").click(function(){
    $(".m2").stop().slideToggle();
    $(this).toggleClass("active");
    $(this).find("span i").toggleClass("fa-chevron-up fa-chevron-down")
  });

});