document.addEventListener('DOMContentLoaded', function () {
    new Splide('.photos .splide', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 3500,
        pagination: false,
        arrows: true,
    }).mount();
});