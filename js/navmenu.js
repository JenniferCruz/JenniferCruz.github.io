/*
 * Open the menu when the hamburguer icon is clicked.
 */
var menu = document.querySelector('#hamburguer');
var main = document.querySelector('header');
var drawer = document.querySelector('nav ul');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();

});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

/*
 * Hover effect for navigation menu
 */
$(document).ready(function(){
  $("nav ul li").hover(highlight, highlight);
});

function highlight(){
  $(this).toggleClass("highlight-menu");
  $(this).children("img").toggleClass("img-hidden");
}
