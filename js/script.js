"use strict";

let lastScrollTop = 0;
const scrollToTop = () => {
  let scrollTop = $(this).scrollTop();
  if (scrollTop > lastScrollTop) {
    $("#header").stop().animate({ top: "-80px" }, 200);
  } else {
    $("#header").stop().animate({ top: "0" }, 200);
  }
  lastScrollTop = scrollTop;
};
$(window).scroll(scrollToTop);

$(document).ready(function () {
  // Check to see if the window is top if not then display button
  $(window).scroll(() => {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });

  // Click event to scroll to top
  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 50);
    return false;
  });
});

const openNavBar = () => {
  $(".navlist").css("display", "none");
  $(".menu-overlay").css("display", "block");
  $(".mobile-nav-btn").css("display", "none");
  $(".close-btn").css("display", "block");
  $("body").css("overflow", "hidden");
};
$(".mobile-nav-btn").click(openNavBar);

const closeNavBar = () => {
  $(".menu-overlay").css("display", "none");
  $(".mobile-nav-btn").css("display", "block");
  $(".close-btn").css("display", "none");
  $("body").css("overflow", "auto");
};
$(".close-btn").click(closeNavBar);
