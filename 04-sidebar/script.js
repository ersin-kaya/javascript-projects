"use strict"

const sidebar = document.querySelector('.sidebar');
const barsIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-xmark');

barsIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

closeIcon.addEventListener('click', () => {
    hideSidebar();
});

document.addEventListener('click', e => {
    if (e.target.tagName === 'HTML') {
        hideSidebar();
    }
});

const hideSidebar = () => {
    sidebar.classList.remove('show-sidebar');
}