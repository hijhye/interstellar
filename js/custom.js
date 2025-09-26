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
      $(".title p i").removeClass("on");
      $(this).find("i").addClass("on");
    }
  });

  $(".category02 .detail .scroll div").on("click", function () {
    $(".category02 .detail  p").toggleClass("scrollup");
    $(this).toggleClass("scrollup");
  });
});
