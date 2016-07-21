/*
 * Open the drawer when the menu ison is clicked.
 */
var menu = document.querySelector('#hamburguer');
var main = document.querySelector('main');
var drawer = document.querySelector('nav ul');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});
