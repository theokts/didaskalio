$(document).ready(function(){

  //Animate owner name
  $("#owner").css({"position":"relative","opacity":0, "right":"+=700"});
  $("#owner").animate({left:0, opacity:1},1500);

  //Animate owner name

  $("#maria-photo").css({"position":"relative","opacity":0, "right":"+=700"});
  $("#maria-photo").animate({left:0, opacity:1},1500);

  // Fade in effect in photo in contact page

  $(".ContactImg").css("display","none").fadeIn(1500);

  // Fade in effect in blockquote in index page

  $("blockquote").css("display","none").fadeIn(2000);

  // Increase the opacity of the logo when the user selects the index page

   $(".index:selected").click(function(){
     $(".logo").css("opacity","1");
   })


})


