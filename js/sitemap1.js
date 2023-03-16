$(document).ready(function(){

  site=true;

  $(".sitemap_btn").click(function(){

    if(site){
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(".footer_sitemap").stop().css({"height":"240px"}); 
      $(".footer_sitemap").css({"border-bottom":"1px solid #e5e5e5"});   
      $(".sitemap").fadeIn(); 
      site=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(".footer_sitemap").stop().css({"height":"0px"}); 
      $(".footer_sitemap").css({"border-bottom":"none"});  
      $(".sitemap").fadeOut(); 
      site=true;
    }

  });

});