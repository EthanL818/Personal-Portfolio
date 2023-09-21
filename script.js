// function controls preloader animation
$(document).ready(function () {
    const preloader = $('.preloader');

    // Hide the preloader after a set time (3 seconds in this example)
    setTimeout(function () {
        preloader.css('opacity', '0'); // Start fading out the preloader
        setTimeout(function () {
            preloader.css('display', 'none'); // Hide the preloader after the transition
        }, 1000); // Wait for 1 second for the transition to complete
    }, 3000); // 3000 milliseconds (3 seconds)

    // Adjust the loader animation style to make it spin
    const loader = $('.loader');
    loader.css('animation', 'spin2 3s linear infinite'); // Apply the animation style

    // Stop the loader animation after the same time (3 seconds in this example)
    setTimeout(function () {
        loader.css('animation', 'none'); // Stop the animation
        $('body').css('overflow', 'auto'); // Enable scrolling by removing the "overflow: hidden" style
    }, 3000); // 3000 milliseconds (3 seconds)
});

// function controls elements fading in
function fadeElementsIn() {
    $('.hideme').each(function(i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height() - 100; 
        
        /* If the object is partially visible in the window and hasn't been animated yet, fade it in */
        if (bottom_of_window > bottom_of_object && !$(this).hasClass('animated')) {
            $(this).addClass('animated');
            $(this).delay(i * 100).animate({'opacity':'1'}, 600);
        }
    });
}

$(document).ready(function() {
    fadeElementsIn(); // Call the function on page load

    /* Call the function when the window is scrolled */
    $(window).scroll(function() {
        fadeElementsIn();
    });
});
// resets window to top position on reload
$(document).ready(function(){
    $(this).scrollTop(0);
});
