// sliders
var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".home .swiper-pagination",
    },
    navigation: {
        nextEl: ".home .swiper-button-next",
        prevEl: ".home .swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper1", {
    loop: true,
    pagination: {
        el: ".home .swiper-pagination",
    },
    navigation: {
        nextEl: ".home_mob .swiper-button-next",
        prevEl: ".home_mob .swiper-button-prev",
    },
});

var swiper13 = new Swiper(".mySwiper13", {
    direction: "vertical",
    slidesPerView: 5,
    spaceBetween: 15,
    watchSlidesProgress: true,

    navigation: {
        nextEl: ".group_inf_product .swiper-button-next",
        prevEl: ".group_inf_product .swiper-button-prev",
    },

    breakpoints: {
        0: {
            direction: "horizontal",
            slidesPerView: 4,
        },
        768: {
            direction: "horizontal",
            slidesPerView: 4,
        },
        1000: {
            direction: "vertical",
            slidesPerView: 5,
        }
    }
});

var swiper14 = new Swiper(".mySwiper14", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper13,
    },
});

// filter
document.querySelectorAll('.checkboxes_filter').forEach(filter => {
    const moreBtn = filter.querySelector('.more');
    const hidden = filter.querySelector('.hidden');

    if (moreBtn && hidden) {
        moreBtn.addEventListener('click', () => {
            hidden.classList.toggle('active');

            if (hidden.classList.contains('active')) {
                moreBtn.innerHTML = `Скрыть <img src="img/icon_more.svg" alt="">`;
            } else {
                moreBtn.innerHTML = `Еще <img src="img/icon_more.svg" alt="">`;
            }
        });
    }
});


// modal basket
const openBasket = document.querySelector('.open_modal_basket');
const modalBasket = document.querySelector('.modal_basket');
const overlay = document.querySelector('.modal_overlay');
const closeBasket = document.querySelector('.modal_basket .close');

openBasket.addEventListener('click', e => {
    e.preventDefault();
    modalBasket.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeModal() {
    modalBasket.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeBasket.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});



// quantity counter
document.querySelectorAll('.quantity').forEach(quantity => {

    const input = quantity.querySelector('.quantity__input');
    const plus = quantity.querySelector('.quantity__plus');
    const minus = quantity.querySelector('.quantity__minus');

    plus.addEventListener('click', () => {
        input.value = +input.value + 1;
    });

    minus.addEventListener('click', () => {
        if (+input.value > 1) {
            input.value = +input.value - 1;
        }
    });

});




