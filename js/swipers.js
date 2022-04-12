$(function() {
    // =======================
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        grabCursor: true,
    });

    var swiperEmp = new Swiper(".swiperEmps", {
        slidesPerView: "auto",
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: "#swiperNextEmp",
            prevEl: "#swiperPrevEmp",
        },
        grabCursor: true,
    });

    var swiperLicenses = new Swiper(".swiperLicenses", {
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
        },
        grabCursor: true,
        breakpoints: {
            768: {
                pagination: {

                    el: ".swiper-pagination-licenses",
                    type: "fraction",
                },
                navigation: {
                    nextEl: "#swiperNext",
                    prevEl: "#swiperPrev",
                },
            }
        }
    });

    var swiperScroll = new Swiper(".swiperScroll", {
        slidesPerView: "auto",
        centeredSlides: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
            snapOnRelease: false,
            dragSize: 100,
        },
        grabCursor: true,
        initialSlide: 1,
    });

})