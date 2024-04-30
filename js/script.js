
document.addEventListener('DOMContentLoaded', function () {

    const swiperQuiz = new Swiper(".animeslide", {
        // Optional parameters
        effect: "fade",
        loop: true,
        speed: 900,
        centeredSlides: true,
        pagination: {
          el: ".animeslide-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            let indT = total >= 5 ? total : `${total}`;
            let indC = current >= 5 ? current : `${current}`;
            return `<b>${indC}</b><span>/</span>${indT}`;
          }
        },
        navigation: {
          nextEl: ".animeslide-button-next",
          prevEl: ".animeslide-button-prev"
        },
        scrollbar: {
          el: ".animeslide-scrollbar",
          draggable: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        runCallbacksOnInit: true
      });

     
     
  });

//Navbar scroll boxshadow

const headerE1 = document.querySelector('.navbar');
window.addEventListener('scroll', () => {

    if(window.scrollY > 500){
        headerE1.classList.add('navbar-scrolled');
    }else if(window.scrollY <= 500) {
        headerE1.classList.remove('navbar-scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function () {
$(".owl-carousel").owlCarousel({
  margin:10,
  loop:true,
  dots: true,
  nav: true,
  autoplay: false,
  items: 3
});    
});
document.addEventListener('DOMContentLoaded', function () {
    const swiperQuiz = new Swiper(".testislide", {
        // Optional parameters
        effect: "fade",
        loop: true,
        speed: 900,
        centeredSlides: true,
        pagination: {
          el: ".testislide-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            let indT = total >= 5 ? total : `${total}`;
            let indC = current >= 5 ? current : `${current}`;
            return `<b>${indC}</b><span>/</span>${indT}`;
          }
        },
        navigation: {
          nextEl: ".testislide-button-next",
          prevEl: ".testislide-button-prev"
        },
        scrollbar: {
          el: ".testislide-scrollbar",
          draggable: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        runCallbacksOnInit: true
      });
    
     
  });


  let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
if (currentIndex < slides.length - 1) {
currentIndex++;
} else {
currentIndex = 0;
}
updateSlider();
}

function prevSlide() {
if (currentIndex > 0) {
currentIndex--;
} else {
currentIndex = slides.length - 1;
}
updateSlider();
}

function updateSlider() {
const offset = -currentIndex * 100;
document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}