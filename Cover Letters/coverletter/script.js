$(document).ready(function(){
   var WH = $(window).height();  
  
var slidenumber = 13;
var bodyheight = slidenumber*WH;

$('body').css("height",bodyheight);

var SH = $('body')[0].scrollHeight;
  $(".slide").css("height",WH);


$('#start').click(function(){
    

  $('html, body').stop().animate({scrollTop: SH-WH}, 75000);

  console.log( SH+' '+WH ); // TEST
    
}); 

$('#end').click(function(){
    

  $('html, body').stop().animate({scrollTop: WH-SH}, 5000);

  console.log( SH+' '+WH ); // TEST
    
}); 




});