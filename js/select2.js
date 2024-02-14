$(document).ready(function(){

  chk1 =true;
  $(".s1").click(function(){
    $(".m1").stop().slideToggle();
    $(this).toggleClass("active");

    if(chk1){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"0"});
      chk1=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=true;
    }
  });

  chk2 =true;
  $(".s2").click(function(){
    $(".m2").stop().slideToggle();
    $(this).toggleClass("active");

    if(chk2){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"0"});
      chk2=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk2=true;
    }
  });

});