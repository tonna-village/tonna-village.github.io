---
---

$("#nav-open").on("click", function() {
  $("body").addClass("no-scroll");
  $(".nav").fadeIn("fast");
});

$("#nav-close").on("click", function() {
  $(".nav").fadeOut("fast");
  $("body").removeClass("no-scroll");
});

{% if jekyll.environment == 'production' %}
// Track navigation events with Google Analytics
$(".nav a").on("click", function(e) {
  const eventName = $(this).data("name");
  ga("send", {
    hitType: "event",
    eventCategory: "Navigation",
    eventAction: "selected",
    eventLabel: eventName
  });
});
{% endif %}

// Disable touch highlight color: https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/
document.addEventListener("touchstart", function() {}, true);
