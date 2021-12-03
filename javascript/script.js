// overlay menu - responsive
const menuBar = document.querySelector('.toggle-bar');
const overlayMenu = document.querySelector('.overlay-menu-container');
const overlayLogo = document.querySelector('.toggleLogo');
const body = document.getElementsByTagName("BODY")
let menuOpen = false;
menuBar.addEventListener('click', () => {
  if (!menuOpen) {
    overlayMenu.classList.add('open');
    overlayMenu.classList.remove('closed');
    menuOpen = true;
  }
});
overlayLogo.addEventListener('click', function () {
  if (menuOpen) {
    overlayMenu.classList.add('closed');
    overlayMenu.classList.remove('open');
    menuOpen = false;
  }
});