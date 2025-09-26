$(function () {
  $(".contentWrap .title").on("click", function () {
    let isOn = $(this).siblings(".detail").hasClass("on");

    if (isOn) {
      $(this).removeClass("on");
      $(this).siblings(".detail").removeClass("on");
    } else {
      $(".contentWrap .detail").removeClass("on");
      $("contentWrap .title").removeClass("on");
      $(this).addClass("on");
      $(this).siblings(".detail").addClass("on");
    }
  });

  $(".contentWrap .title").on("mouseenter", function () {
    $(this).children("p").stop().animate({ "margin-right": "-10px" });
  });
  $(".contentWrap .title").on("mouseleave", function () {
    $(this).children("p").animate({ "margin-right": "0px" });
  });

  $(".category02 .detail .scroll div").on("click", function () {
    $(".category02 .detail  p").toggleClass("scrollup");
    $(this).toggleClass("scrollup");
  });
});
