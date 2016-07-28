/*
 * Create gallery for each project
 */
$(document).ready(function() {
    $(".project-gallery").each(function(element) {
        doGallery(this); // Set up gallery for each project
    });
});


function doGallery(container) {
    var img_array = $("img", container); // Select all images in this container
    var limit = img_array.length - 1;
    var currentImg = 0;

    var nextButton = $(".right", container).eq(0); // select corresponding arrow in the container context
    nextButton.click(next); // handle click event
    var prevButton = $(".left", container).eq(0);
    prevButton.click(prev);


    function next() {
        enableTheOtherArrow(".left");
        displayNextImage();
        disableArrowAtLastPosition(".right", currentImg);
    }

    function prev() {
        enableTheOtherArrow(".right");
        displayPreviousImage();
        disableArrowAtLastPosition(".left", currentImg);
    }

    function displayNextImage() {
        currentImg = Math.max(0, Math.min(currentImg + 1, limit)); // Avoid out of index calls
        img_array.addClass("img-hidden"); // Hide all images in gallery
        img_array.eq(currentImg).removeClass("img-hidden"); // Show next image
    }

    function displayPreviousImage() {
        currentImg = Math.max(0, currentImg - 1); // Avoid out of index calls
        img_array.addClass("img-hidden"); // Hide all images in gallery
        img_array.eq(currentImg).removeClass("img-hidden"); // Show previous image
    }

    function enableTheOtherArrow(arrowClass) {
        $(arrowClass, container).removeClass("unabled").addClass("abled");
    }


    function disableArrowAtLastPosition(arrowClass, position) {
        // If user reaches end/beginning of gallery, style arrow to look 'unabled'
        if (position === 0) {
            $(arrowClass, container).addClass("unabled").removeClass("abled");
        } else if (position === limit) {
            $(arrowClass, container).addClass("unabled").removeClass("abled");
        }
    }
}
