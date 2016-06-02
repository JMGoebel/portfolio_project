$(document).ready(function () {

  var home_pos = $("#home").offset().top;
  var about_pos = $("#about").offset().top;
  var portfolio_pos = $("#portfolio").offset().top;
  var contact_pos = $("#contact").offset().top;

  $(".home-link").addClass("red");

  $(window).scroll(function(){
    var y = $(window).scrollTop();

    /* Not the most efficient way but i'm learning */
    if (y >= home_pos && y < about_pos){
      $(".home-link").addClass( "red" );
    } else {
      $(".home-link").removeClass( "red" );
    };

    if (y >= about_pos && y < portfolio_pos){
      $(".about-link").addClass( "red" );
    } else {
      $(".about-link").removeClass( "red" );
    };

    if (y >= portfolio_pos && y < contact_pos){
      $(".portfolio-link").addClass( "red" );
    } else {
      $(".portfolio-link").removeClass( "red" );
    };

     if (y >= contact_pos){
      $(".contact-link").addClass( "red" );
    } else {
      $(".contact-link").removeClass( "red" );
    };

  });


// Thank you www.w3schools.com for this sweet script!!!
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = $(this).attr("href");

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


