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

    // const swiperPrevEmp = document.getElementById('swiperPrevEmp')
    // const swiperNextEmp = document.getElementById('swiperNextEmp')

    // swiperPrevEmp.addEventListener('click', () => {
    //     mySwiper.slidePrev();
    // })
    // swiperNextEmp.addEventListener('click', () => {
    //     mySwiper.slideNext();
    // })

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

    // const swiperPrev = document.getElementById('swiperPrev')
    // const swiperNext = document.getElementById('swiperNext')

    // swiperPrev.addEventListener('click', () => {
    //     mySwiper.slidePrev();
    // })
    // swiperNext.addEventListener('click', () => {
    //     mySwiper.slideNext();
    // })
})