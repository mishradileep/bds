$(document).ready( function() {

  $('#menu_close').click(function(){
    $("#menu_system").animate({left:'-100%'}, 500);
  });

  $('#menu_open').click(function(){
    $("#menu_system").animate({left:'0'}, 500);
  });

});
