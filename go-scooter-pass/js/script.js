document.addEventListener('DOMContentLoaded', function() {

  

  //Слайдер Каталог
  const swiperOb = document.querySelector(".evenemang")// Для обёртки if
  if (swiperOb) { // Обёртка if. Спасение Gulp-а от null в браузере
    
  //Эксклюзивный доступ к событиям Самокатов slider
  let evenemangSlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,

    /*//Бесконечное листание страниц
    speed: 2000, //Интервал ожидания

    autoplay: {
      delay: 3000,//Интервал ожидания
        disableOnInteraction: false,      
    },*/ 

    pagination: {
      el: ".slider__section .slider-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".slider-btn_next",
      prevEl: ".slider-btn_prev"
    },
  
    breakpoints: {
      555: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 20
      },
      800: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 20
      },
      
      1279: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 20
      },
      
      1439: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 20
      }
    },
  
    a11y: false
  });





  }; //Обёртка if


});





