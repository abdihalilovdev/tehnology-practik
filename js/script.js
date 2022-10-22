const swiper = new Swiper(".mySwiper", {
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const btn = document.querySelector('.hero--title__elements--btn button')
btn.addEventListener('click',() => {
    document.querySelector('.about--modal').style.display = 'block'
})


const btnCloce = document.querySelector('.about--modal__block--square__close')
btnCloce.addEventListener('click',() => {
    document.querySelector('.about--modal').style.display = 'none'
})




