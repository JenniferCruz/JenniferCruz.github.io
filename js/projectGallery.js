$(document).ready(function() {
  $(".project-gallery").each(function(element) {
      doGallery(this);
  });
});

function doGallery(container) {
  var img_array  = $("img", container); // Select all images in this container
  var limit = img_array.length - 1;
  var currentImg = 0;

   //event handling
   var nextButton = $(".right", container).eq(0);  // select class in the container context
   nextButton.click(next);

   var prevButton = $(".left", container).eq(0);
   prevButton.click(prev); // select class in the container context


  function next(){
    enableTheOtherArrow(".left");
    displayNextImage();
    disableArrowAtLastPosition(".right", currentImg);
  }

  function prev(){
    enableTheOtherArrow(".right");
    displayPreviousImage();
    disableArrowAtLastPosition(".left", currentImg);
  }

  function displayNextImage(){
    currentImg=Math.max(0, Math.min(currentImg+1, limit));
    img_array.addClass("img-hidden");
    img_array.eq(currentImg).removeClass("img-hidden");
  }


  function displayPreviousImage(){
    currentImg=Math.max(0, currentImg-1);
    img_array.addClass("img-hidden");
    img_array.eq(currentImg).removeClass("img-hidden");
  }


  function enableTheOtherArrow(arrowClass){
    $(arrowClass).removeClass("unabled").addClass("abled");
  }


  function disableArrowAtLastPosition(arrowClass, position){
    if(position === 0){
        $(arrowClass).addClass("unabled").removeClass("abled");
    } else if(position === limit){
      $(arrowClass).addClass("unabled").removeClass("abled");
    }
  }
}
