// Offcanvas Navbar
function ToggleOpen() {
  document.querySelector('.offcanvas-navbar').classList.add('open');
}

function ToggleClose() {
  document.querySelector('.offcanvas-navbar').classList.remove('open');
}


const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('navbar-active');
    } else {
        navbar.classList.remove('navbar-active');
    }
};