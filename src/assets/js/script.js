const links = document.getElementById('links');
const burgerBtn = document.getElementById('burger');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('toggle');
    links.classList.toggle('show');
});
