const body = document.querySelector("body");


const swiper = new Swiper(".swiper-container", {
 
  loop: true,
  autoplay: {
    delay: 3000, 
  },
  speed: 500, 


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.on("slideChange", function () {
  console.log(swiper.realIndex);

  let active = swiper.realIndex;

  if (active == 0) {
    body.classList.remove(...body.classList);
    body.classList.add("zero");
  } else if (active == 1) {
    body.classList.remove(...body.classList);
    body.classList.add("first");
  } else if (active == 2) {
    body.classList.remove(...body.classList);
    body.classList.add("second");
  } else if (active == 3) {
    body.classList.remove(...body.classList);
    body.classList.add("threed");
  }
});
