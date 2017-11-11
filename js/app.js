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


  // When the user scrolls down, appears the top button

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document

  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

})


