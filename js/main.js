$(function() {

    /**
     * selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#nav')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 50) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /*
        Sidebar
    */
    $('.dismiss').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $('.dismiss').removeClass('active');
    });

    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.dismiss').addClass('active');
    });

});