$(document).ready(function() {
    $(".wrapper div").tilt({
        maxTilt: 45,
        perspective: 2000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        glare: true,
        maxGlare: 0.2,
        scale: 1.05
    });
});


