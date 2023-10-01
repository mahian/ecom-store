const nav = document.querySelector('#navigation');
const sidebar = document.getElementById("side-navbar");
let navbarOpen = true;
const toggleSidebar = ()=>{
    if (navbarOpen) {
        navbarOpen = false;
        sidebar.classList.add("hidden")
    }else{
        sidebar.classList.remove("hidden")
        navbarOpen = true
    }
}

// toggle cart section
const cartContainer = document.getElementById("cart-container");
const cart = document.getElementById("cart");

const toggleCart = ()=>{
    if (cartContainer.style.display == "none") {
        cartContainer.style.display = "flex";
    }else {
        cartContainer.style.display = "none";
    }
}

// hero section slider carousel
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('#carousel .carousel-item');
const indicators = document.querySelectorAll('.indicator');

let i = 0;

prevBtn.onclick = function() {
    slides[i].classList.remove("opacity-0");
    i--;
  
    if (i < 0) {
      i = slides.length - 1;
    }
    slides[i].classList.add("opacity-0");
  };
  nextBtn.onclick = function() {
    slides[i].classList.remove("opacity-0");
    i++;
  
    if (i >= slides.length) {
      i = 0;
    }
    slides[i].classList.add("opacity-0");
  };

// sticky navbar
function stickyNavigation() {
  if (window.scrollY >= nav.offsetTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    nav.classList.add('fixed', 'top-0');
  } else if (window.scrollY >= 0) {
    document.body.style.paddingTop = 0;
    nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', stickyNavigation);
