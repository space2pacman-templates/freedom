$('.js-gallery-carousel').owlCarousel({
    items: 1,
    dots: true,
    merge: true,
    responsiveClass: true,
    responsive: {
        768: {
            items: 3,
            mergeFit: true
        },
        1400: {
            items: 6,
        }
    }
});