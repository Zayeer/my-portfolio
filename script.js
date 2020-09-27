$(document).ready(function (e) {
  $(".about-me").fadeIn(3000);
  $(".about-me").css("display", "flex");
  const $navLinks = $(".nav-list > a");
  $(".nav-list > a").click(function (e) {
    let prevDisplay;
    $navLinks.each(function () {
      if ($(this).hasClass("active-navLink")) {
        prevDisplay = prevActiveDisplay(this);
        $(this).removeClass("active-navLink");
        return false;
      }
    });
    $(e.target).addClass("active-navLink");
    displayMainContent(e.target, prevDisplay);
  });
});

//previously active div from main-content
function prevActiveDisplay(link) {
  if ($(link).attr("id") === "about") {
    return $(".about-me");
  } else if ($(link).attr("id") === "proj") {
    return $(".projects");
  } else {
    return $(".contact-info");
  }
}

function displayMainContent(target, fadeOutEle) {
  $(fadeOutEle).fadeOut(3000);
  if ($(target).text() === "About") {
    $(".projects").css("display", "none");
    $(".contact-info").css("display", "none");
    $(".about-me").fadeIn(3000);
    $(".about-me").css("display", "flex");
  } else if ($(target).text() === "Projects") {
    $(".contact-info").css("display", "none");
    $(".about-me").css("display", "none");
    $(".projects").fadeIn(3000);
    $(".projects").css("display", "grid");
  } else {
    $(".projects").css("display", "none");
    $(".about-me").css("display", "none");
    $(".contact-info").fadeIn(3000);
    $(".contact-info").css("display", "flex");
  }
}
