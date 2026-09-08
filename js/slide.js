const wrapper = document.getElementById('slideWrapper');
const slides = document.querySelectorAll('.slide-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const total = slides.length;
let timer;

function updateSlide() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % total;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + total) % total;
    updateSlide();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
});

function startTimer() {
    timer = setInterval(nextSlide, 3000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

startTimer();
