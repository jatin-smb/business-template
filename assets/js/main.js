const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});

$(".slider").owlCarousel({
  items:1,
  loop:true,
  autoplay:true,
              

})