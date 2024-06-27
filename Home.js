// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css';

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // or 'vertical'
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
x