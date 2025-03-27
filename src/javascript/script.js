var swiper1 = new Swiper(".mySwiper1", {
  observer: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    550: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  observer: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  observer: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    550: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});

// Inicialização da biblioteca ScrollReveal e configuração das animações
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal("#cta_high , .title-default", {
    origin: "left",
    duration: 1500,
    distance: "20%",
  });

  ScrollReveal().reveal("#cta_low p , #social_media , .provided-list-item", {
    origin: "right",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".footer-texts , #footer_title", {
    origin: "bottom",
    duration: 1500,
    distance: "20%",
  });

  ScrollReveal().reveal("#cta_secondary_text p", {
    origin: "top",
    duration: 2000,
    distance: "100%",
  });

  ScrollReveal().reveal("#content_projects_text h2", {
    origin: "right",
    duration: 3000,
    distance: "20%",
  });

  ScrollReveal().reveal("#page_services_text_1", {
    origin: "right",
    duration: 2000,
    distance: "50%",
  });

  ScrollReveal().reveal("#page_content_portfolio h2", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".page-portfolio-slides", {
    origin: "right",
    duration: 2000,
    distance: "20%",
  });
});
