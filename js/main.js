window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("stuck", window.scrollY, 10);
});
var myVar;

function myFunction(){
    myVar = setTimeout(hiding, 5000);
    myVar = setTimeout(showPage,6000);
}

function showPage(){
    document.getElementById("preload").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function hiding(){
    document.getElementById("preload").style.animation = "fadeout 3s ease";
    document.getElementById("myDiv").style.animation = "fadein 3s ease";
}
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
