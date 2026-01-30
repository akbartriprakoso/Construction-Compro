$(document).ready(() => {
  const btnFilter = $(".btn-filter");

  const swiper = new Swiper(".swiper.gallery", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: false,
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
  });

  btnFilter.on("click", (e) => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    $this.addClass("active");
    btnFilter.not($this).removeClass("active");
    filtering();
  });

  function filtering() {
    const activeBtn = $(".btn-filter.active");
    let filter = activeBtn.data("filter-by");
    if (filter == "all") {
      $("[data-filter]").show();
      swiper.update();
    } else {
      let filterEL = $("[data-filter='" + filter + "']");
      filterEL.show();
      $("[data-filter]").not(filterEL).hide();
      swiper.update();
    }
  }

  filtering();
});
