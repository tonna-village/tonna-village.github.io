$("#nav-open").on("click", function() {
  $("body").addClass("no-scroll");
  $(".nav").fadeIn("fast");
});

$("#nav-close").on("click", function() {
  $(".nav").fadeOut("fast");
  $("body").removeClass("no-scroll");
});

// Disable touch highlight color: https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/
document.addEventListener("touchstart", function() {}, true);
