"use strict";

let lastScrollTop = 0;
let header = $("#header");
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  if (scrollTop > lastScrollTop) {
    header.stop().animate({ top: "-80px" }, 200);
  } else {
    header.stop().animate({ top: "0" }, 200);
  }
  lastScrollTop = scrollTop;
});
