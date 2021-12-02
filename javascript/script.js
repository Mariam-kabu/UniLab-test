// overlay menu - responsive
const menuBar = document.querySelector('.toggle-bar');
const overlayMenu = document.querySelector('.overlay-menu-container');
const overlayLogo =document.querySelector('.toggleLogo');
let menuOpen = false;
menuBar.addEventListener('click', ()=>{
  if(!menuOpen){
    overlayMenu.classList.add('open');
    overlayMenu.classList.remove('closed');
    menuOpen = true;
  }
});
overlayLogo.addEventListener('click', ()=>{
  if(menuOpen){
    overlayMenu.classList.add('closed');
    overlayMenu.classList.remove('open');
    menuOpen = false;
  }
});