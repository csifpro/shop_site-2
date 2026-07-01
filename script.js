const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
});
const buyButtons = document.querySelectorAll('.price-button');

const sound = new Audio('buy.mp3');

buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sound.currentTime = 0; // щоб звук грав кожного разу
        sound.play();
    });
});
