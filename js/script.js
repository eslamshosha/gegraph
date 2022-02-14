$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 1199) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".overlay-box").fadeToggle(300);
      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
    });
    $(".nav-head .close-btn, .overlay-box").click(function () {
      $(".overlay-box").fadeOut(300);
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
  }
  $("#menu-id").click(function () {
    $(".menu-bars .bars").toggleClass("open-bars");
    $(".menu-bars .bars").toggleClass("close-bars");
  });
  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

  //scroll down button to about us section
  $("#scroll-to-about-section").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about-us").offset().top,
      },
      1000
    );
  });
});
