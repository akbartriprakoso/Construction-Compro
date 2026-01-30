$(document).ready(function () {
  var currentIndex = 0;
  var $backgroundImage = $(".image-infinite-bg");
  var images = $backgroundImage.data("images");

  function changeBackgroundImage() {
    // Mengubah gambar latar belakang dengan indeks berikutnya dalam array
    if ($backgroundImage.length) {
      $backgroundImage.removeClass("animation-bg");
      currentIndex = (currentIndex + 1) % images.length;
      var imagePath = images[currentIndex];
      $backgroundImage.css("background-image", "url('" + imagePath + "')");
      $backgroundImage[0].offsetHeight;
      $backgroundImage.addClass("animation-bg");
    }
  }

  // Panggil fungsi untuk pertama kali
  changeBackgroundImage();

  // Set interval untuk memanggil fungsi perubahan gambar dengan waktu yang ditentukan
  setInterval(changeBackgroundImage, 5000);

  const testimonialcarousel = new Swiper(".swiper.testimonial-carousel", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
  });

  const swiperCardCarousel = new Swiper(".swiper.card-carousel", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  const swiperGallery3 = new Swiper(".swiper.gallery-3", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: false,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: ".gallery-3-next-btn",
      prevEl: ".gallery-3-prev-btn",
    },
  });

  const swiperGalleryHistory = new Swiper(".swiper.gallery-history", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: ".gallery-history-next-btn",
      prevEl: ".gallery-history-prev-btn",
    },
  });

  const swiperGalleryCareers = new Swiper(".swiper.career-carousel", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const swiperTestimonialSlider = new Swiper(".swiper.testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    // navigation is disabled (removed)
  });

  const swiperProjectCarousel = new Swiper(".swiper.project-carousel", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    navigation: {
      nextEl: ".project-carousel-next",
      prevEl: ".project-carousel-prev",
    },
  });

  const swiperProjectCarousel3 = new Swiper(".swiper.project-carousel-3", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    speed: 800,
    navigation: {
      nextEl: ".project-carousel-next",
      prevEl: ".project-carousel-prev",
    },
  });

  var $cursor = $(".cursor");
  var $cursorinner = $(".inner-cursor");
  var $a = $("a");

  // gerakan cursor utama
  $(document).on("mousemove", function (e) {
    $cursor.css(
      "transform",
      `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    );
  });

  // gerakan cursor inner
  $(document).on("mousemove", function (e) {
    $cursorinner.css({
      left: e.clientX + "px",
      top: e.clientY + "px",
    });
  });

  // klik
  $(document).on("mousedown", function () {
    $cursor.addClass("click");
    $cursorinner.addClass("cursorinnerhover");
  });

  $(document).on("mouseup", function () {
    $cursor.removeClass("click");
    $cursorinner.removeClass("cursorinnerhover");
  });

  // hover link
  $a.on("mouseover", function () {
    $cursor.addClass("hover");
  });

  $a.on("mouseleave", function () {
    $cursor.removeClass("hover");
  });
});
