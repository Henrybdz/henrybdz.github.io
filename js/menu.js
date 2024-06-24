// menu.js

$(document).ready(function() {
    $(".menu-toggle").click(function() {
        $(".menu").toggleClass("menu-expanded");
    });

    $(".close-menu").click(function() {
        $(".menu").removeClass("menu-expanded");
    });
});
