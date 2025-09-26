$(function () {
  $(".contentWrap .title").on("click", function () {
    let isOn = $(this).siblings(".detail").hasClass("on");

    if (isOn) {
      $(this).siblings(".detail").removeClass("on");
    } else {
      $(".contentWrap .detail").removeClass("on");
      $(this).siblings(".detail").addClass("on");
    }
  });
});
