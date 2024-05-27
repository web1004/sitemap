$(document).ready(function(){

  site=true;

  $(".sitemap_btn").click(function(){
    if(site){
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(".footer_sitemap").css({"height":"240px","border-bottom":"1px solid #c3c3c3"});
      $(".sitemap").fadeIn(); 
      site=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(".footer_sitemap").stop().css({"height":"0px","border-bottom":"none"});
      $(".sitemap").fadeOut(); 
      site=true;
    };
  });
  
});