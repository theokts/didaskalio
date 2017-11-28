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
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  };

  // When the user clicks on the button, scroll to the top of the document

  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };

  // When the user focus on the forms, the placeholder dissapears

  $(".enter-mail,.name_form,.email_form,.textarea_form").focus(function() {
    $(this).removeAttr("placeholder");
  });

  // When the user deletes the inputs in the forms, the placeholder appears

  $(".enter-mail").focusout(function() {
    if ($(this).val() == ""){
      $(this).attr("placeholder", "Βάλε το email σου εδώ");
    }
  });

  $(".name_form").focusout(function() {
    if ($(this).val() == ""){
      $(this).attr("placeholder", "Όνομα");
    }
  });

  $(".email_form").focusout(function() {
    if ($(this).val() == ""){
      $(this).attr("placeholder", "Email");
    }
  });

  $(".textarea_form").focusout(function() {
    if ($(this).val() == ""){
      $(this).attr("placeholder", "Μήνυμα");
      $(".textarea_form").css({"padding-left": "2px", "padding-top": "2px"});
    }
  });

    // Carousel - Index page

    var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


});


