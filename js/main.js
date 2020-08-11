window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("stuck", window.scrollY, 10);
});
window.onload = function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints:{
          750: {
              slidesPerView: 1,
              spaceBetween: 30
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
      }
      });
}
