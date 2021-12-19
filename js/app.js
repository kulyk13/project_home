//Hero slider
const slides = ['01', '02']
const heroSlider = new Swiper(".hero-slider", {
    loop: true,
    spaceBetween: 100,
    speed: 400,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
            clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (slides[index++]) + '</span>';
        }
    },
});

//Copyright year
copyrightYear.textContent = new Date().getFullYear();